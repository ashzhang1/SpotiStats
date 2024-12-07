import { useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyService";

export const useSpotifyUser = (token) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const data = await spotifyService.getCurrentUser(token);
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  return { userData, loading, error };
};
