import React, { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BettingPage = () => {
  const navigate = useNavigate();
  let [bet, setBet] = useState("5");
  return (
    <div
      className="betting contanior direction_col"
      style={{ height: "100vh" }}
    >
      <div className="card direction_col">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div className="center">
          <div>Betting Amount</div>
          <div className="bets">
            <div
              className={bet === "5" ? "bet 5 selected" : "bet 5"}
              onClick={() => setBet("5")}
            >
              &#8377;5
            </div>
            <div
              className={bet === "10" ? "bet 10 selected" : "bet 10"}
              onClick={() => setBet("10")}
            >
              &#8377;10
            </div>
          </div>
          <div className="btnContanior">
            <div className="okBtn" onClick={() => navigate("/game")}>
              OK
            </div>
          </div>
          <div className="btnContanior">
            <div className="cancleBtn" onClick={() => navigate("/play")}>
              Cancle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingPage;
