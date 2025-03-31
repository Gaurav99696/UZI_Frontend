import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const VerificationOTP = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerifyClick = async () => {
    console.log(location.state?.from);
    if (!otp) {
      setMessage("Please enter OTP");
      return;
    }

    const payload = {
      OTP: otp,
      email: location.state?.email || "",
      purpose:
        location.state?.from === "/signup" ? "register" : "forgotPassword",
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/verifyUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      setMessage(data.message || "Verification successful");
      if (location.state?.from === "/signup") {
        navigate("/play");
      } else {
        navigate("/updatePassword");
      }
    } catch (error) {
      setMessage("Verification failed");
    }
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav />
        <div className="signPageContanior">
          <div className="signContanior varifyContanior">
            <div className="text">Verification OTP</div>
            <p>
              Enter the 4-digit OTP code that you have received on your email
            </p>
            <input
              type="text"
              placeholder="Enter OTP..."
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyClick}>Verify</button>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationOTP;
