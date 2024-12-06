const SPOTIFY_API_BASE = "https://api.spotify.com/v1";

export const spotifyService = {
  async getCurrentUser(token) {
    try {
      const response = await fetch(`${SPOTIFY_API_BASE}/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      throw new Error(`Failed to fetch user data: ${err.message}`);
    }
  },
};
