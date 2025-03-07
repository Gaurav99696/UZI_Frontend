import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Processing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/paymentSucess");
    }, 3000);
  });
  return (
    <div className="processing contanior" style={{ height: "100vh" }}>
      <div className="card centerAll">
        <div>Processing....</div>
      </div>
    </div>
  );
};

export default Processing;
