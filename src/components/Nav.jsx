import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="logo">UZI.</div>
      <div className="actionBtns">
        <div className="login" onClick={() => navigate("/comingSoon")}>
          Log In
        </div>
        <div className="signup" onClick={() => navigate("/comingSoon")}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Nav;
