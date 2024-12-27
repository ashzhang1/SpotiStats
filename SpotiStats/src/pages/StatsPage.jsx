import { useSpotifyUser } from "../hooks/useSpotifyUser";
import { useSpotifyToken } from "../hooks/useSpotifyToken";
import { useTopArtists } from "../hooks/useTopArtists";
import TopItems from "../components/TopItems";
import { useTopTracks } from "../hooks/useTopTracks";
import { useLastTrack } from "../hooks/useLastTrack";
import spotifyIcon from "../assets/spotifyIcon.svg";
import "../styles/pages/statsPage.css";

export default function StatsPage() {
  const { token } = useSpotifyToken();
  const {
    userData,
    loading: userLoading,
    error: userError,
  } = useSpotifyUser(token);

  const {
    topArtistsData,
    loading: artistsLoading,
    error: artistsError,
  } = useTopArtists(token);

  const {
    topTrackData,
    loading: tracksLoading,
    error: tracksError,
  } = useTopTracks(token);

  const {
    lastTrackData,
    loading: lastTrackLoading,
    error: lastTrackError,
  } = useLastTrack(token);

  if (userLoading || artistsLoading || tracksLoading || lastTrackLoading) {
    return <div>loading...</div>;
  }

  if (userError || artistsError || tracksLoading || lastTrackError) {
    return <div>Error: {userError || artistsError || tracksError}</div>;
  }

  if (!userData || !topArtistsData || !topTrackData || !lastTrackData) {
    return <div>No data available</div>;
  }

  return (
    <>
      <section className="stats-landing-container">
        <div className="stats-landing-content-container">
          <h1 className="stats-landing-title">
            Welcome to Your SpotiStats, Scroll Down to View
          </h1>

          <div className="user-info-outer-container">
            <div className="user-info-box">
              <h4 className="info-subtitle">Logged in as</h4>
              <div className="info-container">
                {userData?.images?.length > 0 ? (
                  <img
                    src={userData.images[0].url}
                    className="profile-image"
                    alt={`${userData.display_name}'s profile`}
                  />
                ) : (
                  <div className="profile-image-placeholder" />
                )}
                <div className="user-info-container">
                  <span className="display-name">{userData.display_name}</span>
                  <span className="user-email">{userData.email}</span>
                </div>
              </div>
            </div>

            <div className="additional-info-container">
              <div className="last-track-container">
                <h4 className="info-subtitle">Last Played Track</h4>
                <div className="info-container">
                  <img
                    className="last-track-img"
                    src={lastTrackData.items[0].track.album.images[0].url}
                    alt="Last track album art"
                  />
                  <div className="last-track-info">
                    <span>{lastTrackData.items[0].track.name}</span>
                    <span>{lastTrackData.items[0].track.artists[0].name}</span>
                  </div>
                  <a
                    href={lastTrackData.items[0].track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotify-link"
                    aria-label="View last track on Spotify"
                  >
                    <img
                      src={spotifyIcon}
                      className="spotify-logo"
                      alt="Spotify icon"
                    />
                  </a>
                </div>
              </div>

              <div className="follower-count-container">
                <h4 className="info-subtitle">Follower Count</h4>
                <div className="info-container">
                  <span className="display-name">
                    {userData.followers.total} Followers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          Scroll Down <span className="scroll-arrow">↓</span>
        </div>
      </section>

      <section>
        <TopItems
          title="Top Artists"
          data={topArtistsData}
          statDescription="Above are your most listened to artists on Spotify. 
          This was calculated by looking at your data from approximately the last 6 months.
          The popularity score of an artist is a value between 0 and 100, with 100 being the most popular. 
          The artist's popularity score is calculated from the popularity of all the artist's tracks."
        />
      </section>

      <section>
        <TopItems
          title="Top Tracks"
          data={topTrackData}
          statDescription="Above are your most listened to tracks on Spotify. 
          This was calculated by looking at your data from approximately the last 6 months.
          The popularity score of a track is a value between 0 and 100, with 100 being the most popular. 
          A track's popularity is calculated by the most part, on the total number of plays the track has had and how recent those plays are."
        />
      </section>
    </>
  );
}
