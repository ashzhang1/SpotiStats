import PropTypes from "prop-types";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const SpotifyAuthButton = ({ config }) => {
  const { handleSpotifyLogin, isLoading, error } = useSpotifyAuth(config);

  if (error) {
    console.error("Spotify authentication error:", error);
  }

  return (
    <button
      className="get-started-button"
      onClick={handleSpotifyLogin}
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {isLoading ? "Loading..." : "Get Started"}
    </button>
  );
};

SpotifyAuthButton.propTypes = {
  config: PropTypes.shape({
    authEndpoint: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
    scopes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
