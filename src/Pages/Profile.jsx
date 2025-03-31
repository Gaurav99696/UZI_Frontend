import React, { useState, useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { FaUser, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import GameContext from "../Context/GameContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const betting = useContext(GameContext);
  const [userData, setUserData] = useState({
    userName: "",
    upiId: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!userName) {
      console.error("User name not found in localStorage");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://uzi-server.onrender.com/api/users/getProfile/${userName}`
        );
        const data = await response.json();

        if (data.message === "Success" && data.getProfile) {
          const profile = data.getProfile;
          betting.setRoundsPlayed(profile.gameProgress.roundsPlayed);
          betting.setMatchsPlayed(profile.gameProgress.matchesPlayed);
          betting.setRoundsWin(profile.gameProgress.roundsWon);
          betting.setRoundsLose(profile.gameProgress.roundsLost);
          betting.setWinAmount(profile.gameProgress.winAmount);
          betting.setLostAmount(profile.gameProgress.amountLost);

          setUserData({
            userName: profile.userName,
            upiId: profile.upiId,
            email: profile.email,
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
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
            <IoMdMail id="emailIcon" /> {userData.email}
          </div>
        </div>
      </div>
      <div className="gameProgress">
        <div className="card">
          <div className="progressBoard">Game Progress</div>
          <div className="progress">
            <div className="roundsPlayed box">
              <div className="blue">Rounds Played</div>
              <div className="blue">{betting.roundsPlayed}</div>
            </div>
            <div className="matchesPlayed box">
              <div className="blue">Matches Played</div>
              <div className="blue">{betting.matchsPlayed}</div>
            </div>
            <div className="roundsWins box">
              <div className="blue">Rounds Won</div>
              <div>{betting.roundsWin}</div>
            </div>
            <div className="roundsLose box">
              <div className="blue">Rounds Lost</div>
              <div>{betting.roundsLose}</div>
            </div>
            <div className="winAmount box">
              <div className="blue">Win Amount</div>
              <div style={{ color: "green" }}>&#8377;{betting.winAmount}+</div>
            </div>
            <div className="lostAmount box">
              <div className="blue">Amount Lost</div>
              <div style={{ color: "red" }}>&#8377;{betting.lostAmount}-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
