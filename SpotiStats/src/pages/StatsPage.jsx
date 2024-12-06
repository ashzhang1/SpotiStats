import { useSpotifyUser } from "../hooks/userSpotifyUser";
import { useSpotifyToken } from "../hooks/useSpotifyToken";

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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome {userData.display_name}</h1>
    </div>
  );
}
