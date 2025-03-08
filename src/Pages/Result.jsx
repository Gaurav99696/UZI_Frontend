import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const Result = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const results = betting.results;

  // Calculate total amount correctly
  const totalAmount = results.reduce((acc, curr) => {
    return curr[0] === "win"
      ? acc + parseFloat(curr[1])
      : acc - parseFloat(curr[1]);
  }, 0);

  const pay = () => {
    betting.setResults([]);
    betting.setRoundsPlayed(betting.roundsPlayed + 5);
    betting.setMatchsPlayed(betting.matchsPlayed + 1);

    if (totalAmount >= 0) {
      betting.setWinAmount(betting.winAmount + totalAmount);
      betting.setHistory([...betting.history, ["Recived", totalAmount]]);
      console.log(betting.history);
    } else {
      betting.setLostAmount(betting.lostAmount + Math.abs(totalAmount));
      betting.setHistory([...betting.history, ["Payed", totalAmount]]);
    }

    navigate("/process");
  };

  return (
    <div className="result" style={{ height: "100vh" }}>
      <div className="matchResult">
        <div className="resultHeading text">Match Results</div>
        <div className="resultComliment text">
          {totalAmount > 0 ? "You Win" : "You Lose"}
        </div>

        <div className="resultsOverview">
          <div className="rounds">
            {results.map(([status], index) => (
              <div key={index} className="rounds">
                Round {index + 1} {status}
              </div>
            ))}
          </div>
          <div className="results">
            {results.map(([status, amount], index) => (
              <div key={index} className="rounds">
                {status === "win" ? `₹${amount}+` : `₹${amount}-`}
              </div>
            ))}
          </div>
        </div>

        <div className="total">
          <div className="contanior">
            <div className="line"></div>
          </div>
          <div className="calculatedTotal resultsOverview">
            <div className="totalText">Total:</div>
            <div
              className="money"
              style={{ color: totalAmount >= 0 ? "green" : "red" }}
            >
              ₹{totalAmount} {totalAmount >= 0 ? "+" : null}
            </div>
          </div>
        </div>
      </div>

      <div className="conclusion">
        <div className="eighteen">
          {totalAmount >= 0
            ? `In total, I have to pay ₹${totalAmount}`
            : `You have to pay me ₹${Math.abs(totalAmount)}`}
        </div>
        <div className="eighteen">
          You {totalAmount >= 0 ? "win" : "lose"} ₹{Math.abs(totalAmount)}
        </div>
        <button onClick={pay}>Pay</button>
      </div>
    </div>
  );
};

export default Result;
