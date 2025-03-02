import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav />

        <div className="signPageContanior">
          <div className="signContanior">
            <div className="text">SIGN UP</div>
            <input type="text" placeholder="Username..." />
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <button onClick={() => navigate("/varify")}>SIGN UP</button>
            <br />
            <br />
            <p onClick={() => navigate("/login")}>Already have an account ?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
