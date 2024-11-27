import "../styles/pages/LandingPage.css";
import logo from "../assets/logo.svg";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <div className="landing-page-logo-container">
          <img src={logo} />
          <h1 className="logo-title">Spotistics</h1>
        </div>
        <h2 className="landing-page-subtitle">Chart your musical voyage</h2>
      </div>
      <button className="get-started-button">Get Started</button>
    </div>
  );
}
