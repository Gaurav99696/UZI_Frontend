import React, { useState, useContext } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const BettingPage = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
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
              className={betting.bet === "5" ? "bet 5 selected" : "bet 5"}
              onClick={() => betting.setBet("5")}
            >
              &#8377;5
            </div>
            <div
              className={betting.bet === "10" ? "bet 10 selected" : "bet 10"}
              onClick={() => betting.setBet("10")}
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
