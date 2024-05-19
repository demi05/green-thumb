import Man from "../assets/images/Man.png";
import Woman from "../assets/images/Woman.png";
import People from "../assets/images/People.png";

const OnboardingLogic = ({ onboardingCount }) => {
  console.log(onboardingCount);
  if (onboardingCount === 0) {
    return (
      <div className="onboarding-img-div">
        <img src={Man} alt="man with a rake" />
      </div>
    );
  } else if (onboardingCount === 1) {
    return (
      <div className="onboarding-img-div">
        <img src={Woman} alt="man with a hose" />
      </div>
    );
  } else {
    return (
      <div className="onboarding-img-div">
        <img src={People} alt="people garderning" />
      </div>
    );
  }
  return null;
};

export default OnboardingLogic;
