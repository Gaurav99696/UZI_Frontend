import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);

  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handlePassUpdate = async () => {
    if (!pass) {
      setMessage("Please enter password !!");
      return;
    }

    try {
      const response = await fetch(
        "https://uzi-server.onrender.com/api/users/forgetPassword",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword: pass, email: betting.email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(data.message || "Password updated successfully!");
      navigate("/login");
    } catch (error) {
      setMessage(error.message);
      if (error.message.includes("verification")) {
        navigate("/varify");
      }
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="signPageContanior">
        <div className="signContanior varifyContanior">
          <div className="text">Set your Password</div>
          {message && <p>{message}</p>}
          <input
            type="password"
            placeholder="Enter New password..."
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handlePassUpdate}>Set Password</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
