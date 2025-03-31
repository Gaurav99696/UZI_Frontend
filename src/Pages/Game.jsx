import React, { useContext, useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/GameContext";

const Game = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const [win, setWin] = useState(false);
  const [buttonValue, setButtonValue] = useState("OK");
  const [round, setRound] = useState(1);
  const [userChoice, setUserChoice] = useState("");
  const [chance, setChance] = useState(1);
  const [hint, setHint] = useState("");
  const [computerChoice, setComputerChoice] = useState(null);
  const maxRounds = 5;
  const maxChances = 3;
  const bet = betting.bet;

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/game/randomNumber"
      );
      const data = await response.json();
      if (data.success) {
        setComputerChoice(data.number);
      }
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    fetchRandomNumber();
  }, []);

  const check = () => {
    const guess = parseInt(userChoice);

    if (isNaN(guess)) {
      setHint("Please enter a valid number!");
      return;
    }

    if (guess === computerChoice) {
      setWin(true);
      setButtonValue("Next Round");
      betting.setResults([...betting.results, ["win", bet]]);
      setHint("Correct! You guessed it right.");
      betting.setRoundsWin(betting.roundsWin + 1);
    } else {
      if (guess > computerChoice) {
        setHint("Too high! Try a lower number.");
      } else {
        setHint("Too low! Try a higher number.");
      }

      if (chance < maxChances) {
        setChance(chance + 1);
      } else {
        betting.setResults([...betting.results, ["lose", bet / 2]]);
        setButtonValue("Retry");
        setHint(`You lost! The correct number was ${computerChoice}.`);
        betting.setRoundsLose(betting.roundsLose + 1);
      }
    }
  };

  const nextRound = () => {
    if (round === maxRounds) {
      navigate("/matchover");
      return;
    }
    setWin(false);
    setButtonValue("OK");
    setUserChoice("");
    setHint("");
    setChance(1);
    setRound(round + 1);
    fetchRandomNumber(); // Fetch new number for next round
  };

  return (
    <div className="game contanior" style={{ height: "100vh" }}>
      <div className="card">
        <HiArrowNarrowLeft onClick={() => navigate("/play")} />
        <div style={{ textAlign: "center" }}>GUESS THE NUMBER</div>

        {win ? (
          <div className="contanior direction_col">
            <div className="text">
              You Won! Computer: {computerChoice}, You: {userChoice}
            </div>
            <div className="text">You won &#8377;{bet}</div>
          </div>
        ) : (
          <div className="text" style={{ marginTop: "10px" }}>
            Computer has chosen a number. You have {maxChances - chance + 1}{" "}
            chances left.
          </div>
        )}

        <div className="contanior">
          <input
            type="text"
            className="guess"
            placeholder="Your Guess..."
            value={userChoice}
            onChange={(e) => setUserChoice(e.target.value)}
          />
        </div>

        {hint && <div className="hint text">{hint}</div>}

        <div className="roundBet contanior">
          <div className="round text">Round: {round}</div>
          <div className="bet text">Bet: &#8377;{bet}</div>
        </div>

        <div className="contanior">
          <div
            className="button"
            onClick={buttonValue === "OK" ? check : nextRound}
          >
            {buttonValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
