import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  let round = 1;
  let bet = 10;
  return (
    <div className="game contanior" style={{ height: "100vh" }}>
      <div className="card">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div style={{ textAlign: "center" }}>GUESS THE NUMBER</div>
        {/* <div className="text" style={{ marginTop: "10px" }}>
          Computer has been guessed the number now you have 3 chances to guess
          it.
        </div> */}
        <div className="contanior direction_col">
          <div className="text">You Won Computer : 4 and You: 4</div>
          <div className="text">You won &#8377;{bet}</div>
        </div>
        <div className="contanior">
          <input type="text" className="guess" placeholder="Your Guess..." />
        </div>
        <div className="roundBet contanior">
          <div className="round text">Round: {round}</div>
          <div className="bet text">Bet: &#8377;{bet}</div>
        </div>
        <div className="contanior">
          <div className="button" onClick={() => navigate("/matchover")}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
