import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import Status from "./components/Status";
import Onboarding from "./components/Onboarding";

function App() {
  return (
    <Router>
      <div className="App">
        <Status />
        {/* <Onboarding /> */}
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signinpage" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
