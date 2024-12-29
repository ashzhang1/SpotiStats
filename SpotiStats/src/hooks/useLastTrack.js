import { useEffect, useState } from "react";
import { spotifyService } from "../services/spotifyService";

export const useLastTrack = (token) => {
  const [lastTrackData, setLastTrackData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //This uses the token to fetch the current logged in user details
  useEffect(() => {
    const fetchLastTrackData = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const data = await spotifyService.getLastPlayedTrack(token);
        setLastTrackData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLastTrackData();
  }, [token]);

  return { lastTrackData, loading, error };
};
