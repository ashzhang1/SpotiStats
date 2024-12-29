import WarningSymbol from "../assets/WarningSymbol.svg";
import "../styles/components/WarningBanner.css";

export default function WarningBanner() {
  return (
    <a
      href="https://developer.spotify.com/blog/2023-05-29-quota-extension"
      target="_blank"
      rel="noopener noreferrer"
      className="warning-banner-container"
      aria-label="Find out more about the extension request through the link"
    >
      <div className="warning-container">
        <img
          src={WarningSymbol}
          className="warning-symbol"
          alt="Warning symbol"
        />
        <span className="warning-subtitle">WARNING</span>
      </div>
      <p>
        The Spotify login is currently limited to certain users due to developer
        mode restrictions. Our request to extend access is currently pending.
        Click here to learn out more.
      </p>
    </a>
  );
}
