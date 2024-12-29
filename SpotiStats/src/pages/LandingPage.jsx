import "../styles/pages/LandingPage.css";
import logo from "../assets/logo.svg";
import AboutSection from "../components/AboutSection";
import SoundWaveVisualizer from "../components/SoundWaveVisualiser";
import { SpotifyAuthButton } from "../components/SpotifyAuthButton";
import { spotifyConfig } from "../config/spotifyConfig";
import WarningBanner from "../components/WarningBanner";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <WarningBanner />
      <SoundWaveVisualizer className="sound-wave-visualizer" />
      <section className="hero-section">
        <div className="landing-page-content">
          <div className="landing-page-logo-container">
            <img src={logo} className="logo-image" alt="SpotiStats Logo" />
            <h1 className="logo-title">MySpotiStats</h1>
          </div>
          <h2 className="landing-page-subtitle">Chart your musical voyage</h2>
        </div>
        <SpotifyAuthButton config={spotifyConfig} />
      </section>

      <section className="about-section">
        <AboutSection />
      </section>
    </div>
  );
}
