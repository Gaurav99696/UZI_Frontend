import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  return (
    <div className="result" style={{ height: "100vh" }}>
      <div className="matchResult">
        <div className="resultHeading text">Match Results</div>
        <div className="resultComliment text">You Win</div>
        <div className="resultsOverview">
          <div className="rounds">
            <div className="rounds">Round 1 win </div>
            <div className="rounds">Round 1 lose </div>
            <div className="rounds">Round 1 win </div>
            <div className="rounds">Round 1 lose </div>
            <div className="rounds">Round 1 lose </div>
          </div>
          <div className="results">
            <div className="rounds">&#8377;10+</div>
            <div className="rounds">&#8377;5-</div>
            <div className="rounds">&#8377;10+</div>
            <div className="rounds">&#8377;5-</div>
            <div className="rounds">&#8377;5-</div>
          </div>
        </div>
        <div className="total">
          <div className="contanior">
            <div className="line"></div>
          </div>
          <div className="calculatedTotal resultsOverview">
            <div className="totalText">Total:</div>
            <div className="money">&#8377;5+</div>
          </div>
        </div>
      </div>
      <div className="conclusion">
        <div className="eighteen">In total i have to Rs 5 to You</div>
        <div className="eighteen">You win Rs 5</div>
        <button onClick={() => navigate("/process")}>Pay</button>
      </div>
    </div>
  );
};

export default Result;
