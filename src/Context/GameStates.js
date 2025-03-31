import GameContext from "./GameContext";
import { useState } from "react";

export const GameState = (props) => {
  const [bet, setBet] = useState("5");
  const [results, setResults] = useState([]);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [matchsPlayed, setMatchsPlayed] = useState(0);
  const [roundsWin, setRoundsWin] = useState(0);
  const [roundsLose, setRoundsLose] = useState(0);
  const [winAmount, setWinAmount] = useState(0);
  const [lostAmount, setLostAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [email, setEmail] = useState("");

  return (
    <GameContext.Provider
      value={{
        bet,
        setBet,
        results,
        setResults,
        roundsPlayed,
        setRoundsPlayed,
        matchsPlayed,
        setMatchsPlayed,
        roundsWin,
        setRoundsWin,
        roundsLose,
        setRoundsLose,
        winAmount,
        setWinAmount,
        lostAmount,
        setLostAmount,
        history,
        setHistory,
        email,
        setEmail,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
