import React, { useState, useContext } from "react";
import Nav from "../components/Nav";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import GameContext from "../Context/GameContext";

const Profile = () => {
  const betting = useContext(GameContext);

  let [userData, setUserData] = useState({
    userName: "Gaurav Mishra",
    upiId: "7380973585@ibl",
    email: "gauravmishra99696@gmail.com",
    phoneNumber: "7380973585",
    gameProgress: {
      roundsPlayed: betting.roundsPlayed,
      matchesPlayed: betting.matchsPlayed,
      roundsWon: betting.roundsWin,
      roundsLost: betting.roundsLose,
      winAmount: betting.winAmount,
      lostAmount: betting.lostAmount,
    },
  });
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav home={true} />
        <div className="userDetails">
          <div className="mainDetails">
            <div className="image">
              <FaUser id="user" />
            </div>
            <div className="details">
              <div className="username">{userData.userName}</div>
              <div className="upiId">UPI ID: {userData.upiId}</div>
            </div>
          </div>
          <div className="normDetails">
            <div className="email">
              <IoMdMail id="emailIcon" />
              {userData.email}
            </div>
            <div className="phoneNo">
              <FaPhone id="phoneIcon" /> {userData.phoneNumber}
            </div>
          </div>
        </div>
        <div className="gameProgress">
          <div className="card">
            <div className="progressBoard">Game Progress</div>

            <div className="progress">
              <div className="roundsPlayed box">
                <div className="blue">Rounds Played</div>
                <div className="blue">{userData.gameProgress.roundsPlayed}</div>
              </div>
              <div className="matchesPlayed box">
                <div className="blue">Matchs Played</div>
                <div className="blue">
                  {userData.gameProgress.matchesPlayed}
                </div>
              </div>
              <div className="roundsWins box">
                <div className="blue">Rounds Wins</div>
                <div>{userData.gameProgress.roundsWon}</div>
              </div>
              <div className="roundsLouse box">
                <div className="blue">Rounds Lost</div>
                <div>{userData.gameProgress.roundsLost}</div>
              </div>
              <div className="winAmount box">
                <div className="blue">Win Amount</div>
                <div style={{ color: "green" }}>
                  &#8377;{userData.gameProgress.winAmount}+
                </div>
              </div>
              <div className="louseAmount box">
                <div className="blue">Amount Lost</div>
                <div style={{ color: "red" }}>
                  &#8377;{userData.gameProgress.lostAmount}-
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
