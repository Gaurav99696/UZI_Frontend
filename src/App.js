import "./App.css";
import HomePage from "./Pages/HomePage";
import ComingSoon from "./Pages/ComingSoon";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VarificatonOTP from "./Pages/VarificatonOTP";
import Profile from "./Pages/Profile";
import Play from "./Pages/Play";
import BettingPage from "./Pages/BettingPage";
import Game from "./Pages/Game";
import Over from "./Pages/Over";
import Result from "./Pages/Result";
import Processing from "./Pages/Processing";
import PaymentSucess from "./Pages/PaymentSucess";
import History from "./Pages/History";
import { GameState } from "./Context/GameStates";

function App() {
  return (
    <>
      <GameState>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/varify" element={<VarificatonOTP />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/play" element={<Play />} />
          <Route path="/bet" element={<BettingPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/matchover" element={<Over />} />
          <Route path="/result" element={<Result />} />
          <Route path="/process" element={<Processing />} />
          <Route path="/paymentSucess" element={<PaymentSucess />} />
        </Routes>
      </GameState>
    </>
  );
}

export default App;
