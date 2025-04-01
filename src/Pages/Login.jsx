import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import GameContext from "../Context/GameContext";

const Login = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      alert("You need to log out First");
      navigate("/play");
    }
  }, []);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://uzi-server.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.isLogin.Authorization);
        localStorage.setItem("userName", data.isLogin.data.userName);
        navigate("/play");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "100vh" }} className="loginPage">
      <Nav />
      <div className="loginPageContanior">
        <div className="loginContanior">
          <div className="text">LOG IN</div>

          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p onClick={() => navigate("/emailVerification")}>Forget Password?</p>

          <button onClick={handleLogin}>LOG IN</button>

          <p onClick={() => navigate("/signup")}>Don’t have an account?</p>
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-popup">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default Login;
