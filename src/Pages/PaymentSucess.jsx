import React, { useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PaymentSucess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="paymentSucess contanior" style={{ height: "100vh" }}>
      <div className="card">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div className="center">
          <div className="text">Payment Sucessful</div>
          <button className="button" onClick={() => navigate("/bet")}>
            One more Match ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
