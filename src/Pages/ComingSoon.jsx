import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh" }}>
      <div>ComingSoon</div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ComingSoon;
