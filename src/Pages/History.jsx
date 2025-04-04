import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Divider from "../components/Divider";
import GameContext from "../Context/GameContext";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchHistory = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://uzi-server.onrender.com/api/users/getTranx/${localStorage.getItem(
            "userName"
          )}`
        );
        const data = await response.json();

        if (data.message === "Success") {
          betting.setHistory(data.tranxHistory);
        }
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [navigate, betting.userName, betting.setHistory]);

  return (
    <div className="history" style={{ height: "100vh" }}>
      <Nav home={true} />
      <div className="main">
        <div className="heading">Transaction History</div>
        <Divider width={150} />

        <div className="transactions">
          <br />
          {betting.history?.length > 0 ? (
            betting.history.map(({ method, amount }, index) => (
              <div key={index}>
                <div className="transaction container">
                  <div className="duo">
                    <div className="transactionNo">{index + 1}.</div>
                    <div className="method">{method}</div>
                  </div>
                  <div className="amount">
                    {method === "Payed" ? `₹${amount}-` : `₹${amount}+`}
                  </div>
                </div>
                <div className="container">
                  <div className="line"></div>
                </div>
              </div>
            ))
          ) : (
            <p>No transaction history available.</p>
          )}
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-popup">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default History;
