import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh" }} className="loginPage">
        <Nav />

        <div className="loginPageContanior">
          <div className="loginContanior">
            <div className="text">LOG IN</div>
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <p onClick={() => navigate("/varify")}>Forget Password?</p>
            <button onClick={() => navigate("/profile")}>LOG IN</button>
            <br />
            <br />
            <p onClick={() => navigate("/signup")}>Don’t have an account ?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
