import { useSpotifyUser } from "../hooks/useSpotifyUser";
import { useSpotifyToken } from "../hooks/useSpotifyToken";
import "../styles/pages/statsPage.css";

export default function StatsPage() {
  const { token } = useSpotifyToken();
  const { userData, loading, error } = useSpotifyUser(token);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="stats-landing-container">
      <div className="stats-landing-content-container">
        <div className="profile-image-container">
          <img
            src={userData.images[0].url}
            className="profile-image"
            alt={`${userData.display_name}'s profile`}
          />
        </div>
        <h1 className="stats-landing-title">Welcome {userData.display_name}</h1>
        <h2 className="stats-landing-subtitle">Your Pie is Ready</h2>
      </div>
      <div className="scroll-indicator">
        Scroll Down <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}
