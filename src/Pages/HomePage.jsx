import React from "react";
import Nav from "../components/Nav";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Divider from "../components/Divider";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLock } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      <Nav show={true} />

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
            <div className="playNow" onClick={() => navigate("/login")}>
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
        <section className="securedPayment">
          <div className="topic">Secured Payment</div>
          <Divider width={145} />
          <div className="secure">
            <FaLock />
            <div>100% Secure Payment</div>
          </div>
          <div className="methordes">
            <FaStripe fontSize={45} />
            <FaPaypal />
            <FaGooglePay fontSize={50} />
            <SiPhonepe />
          </div>
        </section>
        <Divider center={true} />
        <section className="whyThisGameWrapper">
          <div className="whyThisGame">
            <h2>
              Why to play this <br /> Game ?
            </h2>
            <p>
              For Students – If you're a student, why not try your luck and earn
              some extra cash?
            </p>
            <p>
              Want snacks or small treats? Instead of asking for money, try your
              luck and win!
            </p>
            <p>
              No risk to start! I will give you the first ₹30 for free so you
              don’t have to invest anything initially!
            </p>
            <p>
              Quick & fun! Just guess a number and win up to ₹10 per round, with
              special bonuses for winning streaks!
            </p>
          </div>
        </section>
        <br />
        <br />
        <Divider center={true} />
        <section className="getinTouch">
          <div className="topic">Get in Touch</div>
          <Divider />
          <div className="ways">
            <RxLinkedinLogo
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gaurav-mishra-7368b8307/",
                  "_blank"
                )
              }
            />
            <BsWhatsapp
              onClick={() =>
                window.open("https://wa.me/918795398896", "_blank")
              }
            />
            <BsYoutube
              onClick={() =>
                window.open(
                  "https://youtube.com/@thedarkest17?si=aVAYO_8DJ10OPEgl",
                  "_blank"
                )
              }
            />
            <MdEmail
              onClick={() => window.open("mailto:gauravmishra99696@gmail.com")}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
