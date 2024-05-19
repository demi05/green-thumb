import { useState, useEffect } from "react";
import OnboardingLogic from "./OnboardingLogic";
import "./Onboarding.css";
import { Link, useHistory } from "react-router-dom";
// import SignInPage from "./SignInPage";

const Onboarding = () => {
  const onboardingData = [
    {
      text1: "Welcome to GreenThumb!",
      text2:
        "We're excited to have you join GreenThumb, your go-to app for gardening success in Jamaica. Let's get started on your journey to becoming a master gardener!",
    },
    {
      text1: "Overcoming Gardening Hurdles",
      text2:
        "Gardening in Jamaica comes with its unique set of challenges. But fear not! We've got solutions to help you thrive.",
    },
    {
      text1: "Fueling Your Passion",
      text2:
        "Your love for plants and nature is what drives us. Let's keep that passion growing with these resources and community connections.",
    },
  ];

  const [onboardingCount, setOnboardingCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setOnboardingCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextClick = () => {
    setOnboardingCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
  };

  return (
    <div className="onboarding-div">
      <OnboardingLogic onboardingCount={onboardingCount} />
      <ul className="onboarding-dots">
        {onboardingData.map((_, index) => (
          <li
            key={index}
            className={onboardingCount === index ? "active" : "not-active"}
          ></li>
        ))}
      </ul>
      <div className="onboarding-div-text">
        <h1>{onboardingData[onboardingCount].text1}</h1>
        <p>{onboardingData[onboardingCount].text2}</p>
        <h2>
          <Link to="/signinpage">SKIP</Link>
        </h2>
        {onboardingCount === 2 ? (
          <button>
            <Link to="/signinpage">EXPLORE</Link>
          </button>
        ) : (
          <button onClick={handleNextClick}>NEXT</button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
