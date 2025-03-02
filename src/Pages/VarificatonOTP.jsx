import React from "react";
import Nav from "../components/Nav";

const VarificatonOTP = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav />

        <div className="signPageContanior">
          <div className="signContanior varifyContanior">
            <div className="text">Vrification OTP</div>
            <p>Enter the 4 digit OTP code that u have recived on your email</p>
            <input type="text" placeholder="Username..." />
            <button>Varify</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VarificatonOTP;
