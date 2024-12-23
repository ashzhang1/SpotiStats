import { useSpotifyUser } from "../hooks/useSpotifyUser";
import { useSpotifyToken } from "../hooks/useSpotifyToken";
import { useTopArtists } from "../hooks/useTopArtists";
import "../styles/pages/statsPage.css";
import TopItems from "../components/TopItems";
import { useTopTracks } from "../hooks/useTopTracks";
import { useLastTrack } from "../hooks/useLastTrack";

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
          <div className="profile-image-container">
            {userData?.images?.length > 0 && (
              <img
                src={userData.images[0].url}
                className="profile-image"
                alt={`${userData.display_name}'s profile`}
              />
            )}
          </div>
          <h1 className="stats-landing-title">
            Welcome {userData.display_name}
          </h1>
          <h2 className="stats-landing-subtitle">Your SpotiStats Await You</h2>
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
