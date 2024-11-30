import "../styles/components/AboutSection.css";
import analyticsIcon from "../assets/chart.svg";
import reactIcon from "../assets/reactIcon.svg";
import spotifyIcon from "../assets/spotifyIcon.svg";
import viteIcon from "../assets/viteIcon.svg";

export default function AboutSection() {
  return (
    <div className="about-section-container">
      <div className="about-main-title-container">
        <h2 className="about-main-title">
          Deep dive into your musical story with personalised insights and
          data-driven discovery.
        </h2>
      </div>

      <div className="about-features-container">
        <img
          src={analyticsIcon}
          alt="Analytics chart icon representing data visualization features"
          className="analytics-icon"
        />
        <p className="about-description">
          Utilising various charts, visualise your Spotify listening patterns,
          encompassing your most recent favourite genres, artists, tracks as
          well as music recommendations.
        </p>
      </div>

      <div className="tech-stack-container">
        <h2 className="about-project-title">About this project</h2>
        <p className="about-project-description">
          The purpose of this project was to develop my front-end web
          development skills with React and showcase my knowledge of working
          with APIs. Although relatively a simple website, I am proud of what I
          have made here and hope you have had a pleasant experience using it.
        </p>

        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Tech-Stack:</h3>
          <div className="icon-label-container">
            <img src={reactIcon} alt="React icon" className="tech-stack-icon" />
            <span className="tech-name">React</span>
          </div>
          <div className="icon-label-container">
            <img src={viteIcon} alt="React icon" className="tech-stack-icon" />
            <span className="tech-name">Vite</span>
          </div>
          <div className="icon-label-container">
            <img
              src={spotifyIcon}
              alt="React icon"
              className="tech-stack-icon"
            />
            <span className="tech-name">Spotify API</span>
          </div>
        </div>
      </div>
    </div>
  );
}
