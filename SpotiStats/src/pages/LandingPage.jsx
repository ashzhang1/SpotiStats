import "../styles/pages/LandingPage.css";
import logo from "../assets/logo.svg";
import AboutSection from "../components/AboutSection";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <section className="hero-section">
        <div className="landing-page-content">
          <div className="landing-page-logo-container">
            <img src={logo} className="logo-image" alt="SpotiStats Logo" />
            <h1 className="logo-title">SpotiStats</h1>
          </div>
          <h2 className="landing-page-subtitle">Chart your musical voyage</h2>
        </div>
        <button className="get-started-button">Get Started</button>
      </section>

      <section className="about-section">
        <AboutSection />
      </section>
    </div>
  );
}
