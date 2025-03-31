import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import GameContext from "../Context/GameContext";

const Processing = () => {
  const betting = useContext(GameContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    // betting.setResults([]);
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
