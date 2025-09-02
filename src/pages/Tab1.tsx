import axios from "axios";
import { useState } from "react";
import "./Tab1.css";

export default function Tab1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:4000/register", { email, password });
      alert("Registered successfully! Please login on Tab2.");
    }
    catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="tab-container">
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
