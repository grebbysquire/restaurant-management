import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
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
   <div //bacckground 
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",      
  backgroundImage :`url(${bgImage})`,
  width:"100%"
  
     
  }}
>
  <div //login box 
    style={{
      textAlign: "center",
      background: "grey",
      padding: "30px",
      borderRadius: "10px",
      width: "300px"

    }}
  >
    <h2>Login</h2>

    <form onSubmit={handlelogin}>     
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button type="submit">Login</button>
    </form>

    <Form.Text muted>
      Your password must be 8-20 characters long.
    </Form.Text>
  </div>
</div>
  );
};

export default Addlog;