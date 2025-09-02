import axios from "axios";
import { useState } from "react";
import "./Tab2.css";

export default function Tab2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful! Go to Tab3 (Dashboard).");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="tab-container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
