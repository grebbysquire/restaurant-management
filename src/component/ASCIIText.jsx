// Matrix ASCII Version

import { useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uEnableWaves;

void main() {
  vUv = uv;
  vec3 transformed = position;

  if(uEnableWaves > 0.5){
    float time = uTime * 5.;
    transformed.x += sin(time + position.y) * 0.5;
    transformed.y += cos(time + position.z) * 0.15;
    transformed.z += sin(time + position.x);
  }

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;

void main() {
  gl_FragColor = texture2D(uTexture, vUv);
}
`;

Math.map = function (n, start, stop, start2, stop2) {
  return ((n - start) / (stop - start)) * (stop2 - start2) + start2;
};

class AsciiFilter {
  constructor(renderer, { fontSize } = {}) {
    this.renderer = renderer;

    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.top = "0";
    this.domElement.style.left = "0";
    this.domElement.style.width = "100%";
    this.domElement.style.height = "100%";
    this.domElement.style.background = "#000"; // Black background

    this.pre = document.createElement("pre");
    this.domElement.appendChild(this.pre);

    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.domElement.appendChild(this.canvas);

    this.fontSize = fontSize ?? 10;
    this.charset = "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    this.context.imageSmoothingEnabled = false;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.renderer.setSize(width, height);

    this.context.font = `${this.fontSize}px monospace`;
    const charWidth = this.context.measureText("A").width;

    this.cols = Math.floor(width / charWidth);
    this.rows = Math.floor(height / this.fontSize);

    this.canvas.width = this.cols;
    this.canvas.height = this.rows;

    Object.assign(this.pre.style, {
      fontFamily: "monospace",
      fontSize: `${this.fontSize}px`,
      margin: "0",
      padding: "0",
      lineHeight: "1em",
      position: "absolute",
      left: "0",
      top: "0",
      color: "#00ff41",
      background: "transparent",
      textShadow: "0 0 6px #00ff41",
      animation: "matrixFall 8s linear infinite, flicker 0.15s infinite",
      pointerEvents: "none",
      userSelect: "none",
    });
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);

    const w = this.canvas.width;
    const h = this.canvas.height;

    this.context.drawImage(this.renderer.domElement, 0, 0, w, h);

    const imgData = this.context.getImageData(0, 0, w, h).data;
    let str = "";

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (x + y * w) * 4;
        const r = imgData[i];
        const g = imgData[i + 1];
        const b = imgData[i + 2];

        const gray = (0.3 * r + 0.6 * g + 0.1 * b) / 255;
        const idx = Math.floor((1 - gray) * (this.charset.length - 1));
        str += this.charset[idx];
      }
      str += "\n";
    }

    this.pre.innerHTML = str;
  }

  dispose() {}
}

class CanvAscii {
  constructor({ text, asciiFontSize, enableWaves }, container, width, height) {
    this.container = container;
    this.width = width;
    this.height = height;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.z = 30;

    this.scene = new THREE.Scene();

    this.textCanvas = document.createElement("canvas");
    const ctx = this.textCanvas.getContext("2d");
    ctx.font = "bold 200px monospace";
    const metrics = ctx.measureText(text);

    this.textCanvas.width = metrics.width + 20;
    this.textCanvas.height = 220;

    ctx.font = "bold 200px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, 10, 180);

    this.texture = new THREE.CanvasTexture(this.textCanvas);

    const geometry = new THREE.PlaneGeometry(12, 4, 36, 36);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        uEnableWaves: { value: enableWaves ? 1 : 0 },
      },
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0x000000, 0);

    this.filter = new AsciiFilter(this.renderer, {
      fontSize: asciiFontSize,
    });

    this.container.appendChild(this.filter.domElement);
    this.filter.setSize(width, height);
  }

  load() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.mesh.material.uniforms.uTime.value = performance.now() * 0.001;
      this.filter.render(this.scene, this.camera);
    };
    animate();
  }

  dispose() {
    this.renderer.dispose();
  }
}

export default function ASCIIText({
  text = "WAKE UP",
  asciiFontSize = 12,
  enableWaves = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const instance = new CanvAscii(
      { text, asciiFontSize, enableWaves },
      container,
      width,
      height
    );

    instance.load();

    return () => instance.dispose();
  }, [text, asciiFontSize, enableWaves]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes flicker {
          0% { opacity: 0.9; }
          50% { opacity: 1; }
          100% { opacity: 0.85; }
        }
      `}</style>
    </div>
  );
}