import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BettingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="betting" style={{ height: "100vh" }}>
      <div className="card">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div className="center">
          <div>Betting Amount</div>
          <div className="bets">
            <div className="bet 5">&#8377;5</div>
            <div className="bet 10">&#8377;10</div>
          </div>
          <div className="btnContanior">
            <div className="okBtn">OK</div>
          </div>
          <div className="btnContanior">
            <div className="cancleBtn">Cancle</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingPage;
