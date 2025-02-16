import "./App.css";
import HomePage from "./Pages/HomePage";
import ComingSoon from "./Pages/ComingSoon";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
