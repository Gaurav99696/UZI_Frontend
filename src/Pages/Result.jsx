import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const Result = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const results = betting.results;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const totalAmount = results.reduce((acc, curr) => {
    return curr[0] === "win"
      ? acc + parseFloat(curr[1])
      : acc - parseFloat(curr[1]);
  }, 0);

  const updateGameProgress = async () => {
    const data = {
      roundsPlayed: betting.roundsPlayed + 5,
      matchesPlayed: betting.matchsPlayed + 1,
      roundsWon: betting.roundsWin,
      roundsLost: betting.roundsLose,
      winAmount: betting.winAmount + (totalAmount >= 0 ? totalAmount : 0),
      amountLost:
        betting.lostAmount + (totalAmount < 0 ? Math.abs(totalAmount) : 0),
    };

    try {
      const response = await fetch(
        "https://uzi-server.onrender.com/api/game/updateGameProgress/GM",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log("Game Progress Updated:", result);
    } catch (error) {
      console.error("Error updating game progress:", error);
    }
  };

  const pay = async () => {
    await updateGameProgress();
    betting.setResults([]);
    betting.setRoundsPlayed(betting.roundsPlayed + 5);
    betting.setMatchsPlayed(betting.matchsPlayed + 1);

    if (totalAmount >= 0) {
      betting.setWinAmount(betting.winAmount + totalAmount);
      // betting.setHistory([...betting.history, ["Recived", totalAmount]]);
    } else {
      betting.setLostAmount(betting.lostAmount + Math.abs(totalAmount));
      // betting.setHistory([...betting.history, ["Payed", totalAmount]]);
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
