import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "../components/images/Restaurent.jpg";

const Addlog = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlelogin(e) {
    e.preventDefault();

    if (username === "ameen" && password === "1234") {       
      navigate("/dashboard"); 
    } else {
      alert("wrong input details");
    }
  }

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",  
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
      }}
    >

      {/* Welcome text */}
      <h1
        style={{
          color: "white",
          marginBottom: "100px",
          fontFamily:"ui-serif",
          fontSize:70,
          

        }}
      >
        Welcome to Restaurant Hub
      </h1>

      {/* login box */}
      <div
        style={{
          textAlign: "center",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
        }}
      >

        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handlelogin}>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Login
          </button>

        </form>

        <p style={{ marginTop: "15px", fontSize: "13px", color: "gray" }}>
          Password must be 8–20 characters.
        </p>

      </div>
    </div>
  );
};

export default Addlog;