import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Over = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/result");
    }, 3000);
  });
  return (
    <div className="matchOver contanior" style={{ height: "100vh" }}>
      <div className="card centerAll direction_col">
        <div className="main">MATCH IS OVER</div>
        <div className="text">Preparing your Results</div>
        <div className="text">Loading....</div>
      </div>
    </div>
  );
};

export default Over;
