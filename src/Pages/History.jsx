import React, { useContext } from "react";
import Nav from "../components/Nav";
import Divider from "../components/Divider";
import GameContext from "../Context/GameContext";

const History = () => {
  const betting = useContext(GameContext);
  return (
    <div className="history" style={{ height: "100vh" }}>
      <Nav home={true} />
      <div className="main">
        <div className="heading">Tranction History</div>
        <Divider width={150} />

        <div className="tranctions">
          <br />
          {betting.history?.length > 0 ? (
            betting.history.map(([methord, amount], index) => (
              <>
                <div className="tranction contanior">
                  <div className="duo">
                    <div className="tranctionNo">{index + 1}.</div>
                    <div className="methord">{methord}</div>
                  </div>
                  <div className="amount">
                    {methord == "Payed" ? `₹${amount}-` : `₹${amount}+`}
                  </div>
                </div>
                <div className="contanior">
                  <div className="line"></div>
                </div>
              </>
            ))
          ) : (
            <p>No transaction history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
