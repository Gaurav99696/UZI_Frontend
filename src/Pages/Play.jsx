import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh" }}>
      <Nav home={true} />
      <div className="playMainSection">
        <div className="instructions">
          <div className="instructionHeading">Instrunctions</div>
          <div className="instruction">
            Create a match by clicking on the create match button.
          </div>
          <div className="instruction">
            Than scelect the Bet amount your options are Rs5 or Rs10.
          </div>
          <div className="instruction">
            Than your 1st round will start and u will get hints according to
            your betting amount on Rs5 you will get 2 chance to guess the number
            and on the Rs10 you wil get 3 chances to guess the number.
          </div>
          <div className="instruction">
            After 5 rounds the match will end and the total will be calculated
            and than it will decide who had to pay.
          </div>
          <div className="instruction">
            First you will get the Rs 30 of Bonus to try this Game.
          </div>
          <div className="instruction">
            If u win the wining amount will be added to your account but if you
            lose you will lose the money that i have given you.
          </div>
          <div className="instruction">
            NOTE: If end up with the money that i have given you than you have
            to pay from your account.
          </div>
        </div>
        <div className="wrapper">
          <div className="createMatch" onClick={() => navigate("/bet")}>
            Create Match
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
