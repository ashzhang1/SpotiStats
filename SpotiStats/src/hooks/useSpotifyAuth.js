import { useCallback, useState } from "react";

export const useSpotifyAuth = (config) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSpotifyLogin = useCallback(() => {
    try {
      setIsLoading(true);
      setError(null);
      const SPACE_PARAM = "%20";
      const SCOPES_URL_PARAM = config.scopes.join(SPACE_PARAM);

      //must use this structure
      window.location.href = `${config.authEndpoint}?client_id=${config.clientId}&redirect_&redirect_uri=${config.redirectUri}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    } catch (err) {
      setError(err);
      console.error("Failed to initiate Spotify login:", err);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  return { handleSpotifyLogin, isLoading, error };
};
