//The actual client id and redirect uri are set in the .env file

export const spotifyConfig = {
  authEndpoint: "https://accounts.spotify.com/authorize",
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  redirectUri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
  scopes: [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
  ],
};
