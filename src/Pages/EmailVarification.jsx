import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const EmailVarification = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleVerifyClick = async () => {
    if (!betting.email) {
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://uzi-server.onrender.com/api/users/emailVerification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: betting.email }),
        }
      );
      const data = await response.json();
      setMessage(data.message || "Verification email sent!");
      navigate("/varify", {
        state: { email: betting.email, from: "/emailVerification" },
      });
    } catch (error) {
      setMessage("Failed to send verification email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="signPageContanior">
        <div className="signContanior varifyContanior">
          <div className="text">Email Varification</div>
          <p>Enter your email we needd to varify you !!</p>
          {message && <p>{message}</p>}
          <input
            type="text"
            placeholder="Enter email..."
            value={betting.email}
            onChange={(e) => betting.setEmail(e.target.value)}
          />
          <button onClick={handleVerifyClick}>Verify</button>
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

export default EmailVarification;
