import React from "react";
import Nav from "../components/Nav";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Divider from "../components/Divider";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const featuresAndRules = {
  features: [
    "If you lose, you pay ₹5, but if I lose, I pay ₹10.",
    "Winning 3 times in a row rewards ₹40.",
    "₹10 bet gives 3 chances with higher/lower hints.",
    "₹5 bet gives 2 chances with higher/lower hints.",
    "Users start with a ₹30 bonus.",
    "All transactions are recorded.",
  ],
  rules: [
    "The computer selects a random number between 1 and 10.",
    "Users must choose a bet amount (₹5 or ₹10).",
    "Correct guess on ₹10 bet wins ₹10; losing costs ₹5.",
    "Correct guess on ₹5 bet wins ₹5; losing costs ₹2.5.",
    "Payments must be made every 5 rounds to continue playing.",
    "Players can play up to 30 rounds per day.",
  ],
};

const HomePage = () => {
  return (
    <>
      <Nav />

      <main>
        {/* Intro section */}
        <section className="introSection">
          <section className="introductionSection">
            <div className="big1">GUESS</div>
            <div className="big2">THE NUMBER</div>
            <div className="big3">The Easiest and Fun way to</div>
            <div className="big3">Earn by just Trying your Luck.</div>
          </section>
          <section className="actionSection">
            <div className="playNow">
              PLAY NOW <HiMiniArrowLongRight id="playIcon" />
            </div>
          </section>
        </section>
        <Divider center={true} />
        <section className="featuresAndRules">
          <section className="featuresSection">
            <div className="topic">FEATURES</div>
            <Divider />
            {featuresAndRules.features.map((val, index) => {
              return (
                <div className="feature">
                  <div>
                    <FaStar />
                  </div>
                  {val}
                </div>
              );
            })}
          </section>
          <section className="rulesSection">
            <div className="topic">RULES</div>
            <Divider width={44} />
            {featuresAndRules.rules.map((val, index) => {
              return (
                <div className="rule">
                  <div>
                    <GoDotFill />
                  </div>
                  {val}
                </div>
              );
            })}
          </section>
        </section>
        <Divider center={true} />
      </main>
    </>
  );
};

export default HomePage;
