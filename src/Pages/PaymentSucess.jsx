import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PaymentSucess = () => {
  const navigate = useNavigate();
  return (
    <div className="paymentSucess contanior" style={{ height: "100vh" }}>
      <div className="card">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div className="center">
          <div className="text">Payment Sucessful</div>
          <button className="button" onClick={() => navigate("/play")}>
            One more Match ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
