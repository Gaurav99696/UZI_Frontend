import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Play = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Nav home={true} />
      <div className="playMainSection">
        <div className="instructions">
          <div className="instructionHeading">Instructions</div>
          <div className="instruction" style={{ color: "#ffcc00 " }}>
            <strong>IMPORTANT NOTICE:</strong> Due to some issues, we are
            currently unable to process money exchanges. We sincerely apologize
            for the inconvenience. Your winnings will be recorded, and all
            pending amounts will be paid in the next update. If you send 50
            emails requesting an early launch, we will release the update by
            April 15, 2025. Till then enjoy the game !!!
          </div>

          <div className="instruction">
            Create a match by clicking on the create match button.
          </div>
          <div className="instruction">
            Then select the Bet amount, your options are Rs5 or Rs10.
          </div>
          <div className="instruction">
            Then your 1st round will start, and you will get hints based on your
            bet. - Rs5 bet: 2 chances to guess the number. - Rs10 bet: 3 chances
            to guess the number.
          </div>
          <div className="instruction">
            After 5 rounds, the match will end, and the total score will
            determine who pays.
          </div>
          <div className="instruction">
            You start with Rs30 as a bonus to try the game.
          </div>
          <div className="instruction">
            If you win, the winning amount is added to your account. If you
            lose, the bonus money is deducted.
          </div>
          <div className="instruction">
            <strong>NOTE:</strong> If you run out of bonus money, you need to
            pay from your own account.
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
