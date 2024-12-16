import { useState, useEffect } from "react";
import { spotifyService } from "../services/spotifyService";

export const useTopTracks = (token) => {
  const [topTrackData, setTopTracks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //This uses the token to fetch the top tracks data of the current logged in user
  useEffect(() => {
    const fetchTopTracks = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const data = await spotifyService.getTopItems(token, "tracks");
        setTopTracks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, [token]);

  return { topTrackData, loading, error };
};
