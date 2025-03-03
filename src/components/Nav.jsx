import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ show, home }) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="logo">UZI.</div>
      <div className="actionBtns">
        {show ? (
          <>
            <div className="login" onClick={() => navigate("/login")}>
              Log In
            </div>
            <div className="signup" onClick={() => navigate("/signup")}>
              Sign Up
            </div>
          </>
        ) : null}

        {home ? (
          <>
            <div className="login" onClick={() => navigate("/login")}>
              History
            </div>
            <div className="signup" onClick={() => navigate("/signup")}>
              Profile
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
