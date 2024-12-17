import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSpotifyToken = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Check for error parameters in URL first
      const queryParams = new URLSearchParams(window.location.search);
      const errorParam = queryParams.get("error");

      if (errorParam) {
        // Clear any existing auth state
        sessionStorage.removeItem("spotify_token");
        setToken(null);
        setError("Authentication cancelled");
        navigate("/");
        return;
      }

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
          window.location.hash = ""; //clearing the hash in the url for security reasons
        }
      } else {
        const storedToken = sessionStorage.getItem("spotify_token"); // if no hash in URL, we check session storage
        if (storedToken) {
          setToken(storedToken);
        }
      }
    } catch (err) {
      setError(`Failed to process token: ${err.message}`);
      navigate("/");
    }
  }, [navigate]); //This will only run once when the component first renders

  // Add cleanup function to handle unmounting
  useEffect(() => {
    return () => {
      // Cleanup any auth-related state if needed
      if (error) {
        sessionStorage.removeItem("spotify_token");
      }
    };
  }, [error]);

  return { token, error };
};
