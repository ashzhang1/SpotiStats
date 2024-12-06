import { useState, useEffect } from "react";

export const useSpotifyToken = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // This gets the url after the # symbol upon successful login and breaks it down into distinct parts
      // This is the access token, token typem and when it expires.
      const hash = window.location.hash;
      if (hash) {
        const tokenParams = hash
          .substring(1)
          .split("&")
          .reduce((acc, item) => {
            const [key, value] = item.split("=");
            acc[key] = value;
            return acc;
          }, {});

        const accessToken = tokenParams.access_token;
        if (accessToken) {
          setToken(accessToken);
          sessionStorage.setItem("spotify_token", accessToken);
          window.location.hash = ""; //clearing the hash for security reasons
        }
      } else {
        const storedToken = sessionStorage.getItem("spotify_token"); // no hash in URL so we check session storage
        if (storedToken) {
          setToken(storedToken);
        }
      }
    } catch (err) {
      setError(`Failed to process token: ${err.message}`);
    }
  }, []);

  return { token, error };
};
