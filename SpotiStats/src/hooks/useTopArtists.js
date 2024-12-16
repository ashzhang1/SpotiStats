import { useState, useEffect } from "react";
import { spotifyService } from "../services/spotifyService";

export const useTopArtists = (token) => {
  const [topArtistsData, setTopArtists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //This uses the token to fetch the top artists data of the current logged in user
  useEffect(() => {
    const fetchTopArtists = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const data = await spotifyService.getTopItems(token, "artists");
        setTopArtists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [token]);

  return { topArtistsData, loading, error };
};
