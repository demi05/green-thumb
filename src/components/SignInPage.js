import { Link } from "react-router-dom";
import "./SignInPage.css";
import SignIn from "./SignIn";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-page-div">
        <div>
          <h1>Welcome to GreenThumb</h1>
          <p>Cultivate Your Gardening Passion, Rooted in Jamaica!"</p>
        </div>
        <div className="buttons">
          <Link to="/signin">SIGN IN</Link>
          <Link>SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
