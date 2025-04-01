import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [upiId, setupiId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      alert("You need to log out First");
      navigate("/play");
    }
  }, []);

  const validateInputs = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!userName.trim()) return "Username is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!passwordRegex.test(password))
      return "Password must be at least 6 characters long and include a number.";
    if (!upiId.trim()) return "upiId ID is required.";
    return null;
  };

  const handleSignup = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch(
        "https://uzi-server.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            password,
            email,
            upiId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      navigate("/varify", { state: { email: email, from: "/signup" } });
    } catch (err) {
      setError(err.message);
      // navigate("/varify", { state: { email: email, from: "/signup" } });
    }
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav />
        <div className="signPageContanior">
          <div className="signContanior">
            <div className="text">SIGN UP</div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="text"
              placeholder="Username..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="upiId..."
              value={upiId}
              onChange={(e) => setupiId(e.target.value)}
            />
            <button onClick={handleSignup}>SIGN UP</button>
            <br />
            <br />
            <p onClick={() => navigate("/login")}>Already have an account?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
