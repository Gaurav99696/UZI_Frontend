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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/varify" element={<VarificatonOTP />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/play" element={<Play />} />
        <Route path="/bet" element={<BettingPage />} />
      </Routes>
    </>
  );
}

export default App;
