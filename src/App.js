import "./App.css";
import HomePage from "./Pages/HomePage";
import ComingSoon from "./Pages/ComingSoon";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VarificatonOTP from "./Pages/VarificatonOTP";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/varify" element={<VarificatonOTP />} />
      </Routes>
    </>
  );
}

export default App;
