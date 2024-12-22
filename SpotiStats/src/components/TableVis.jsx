import PropTypes from "prop-types";
import "../styles/components/TopItems.css";
import spotifyIcon from "../assets/spotifyIcon.svg";

export default function TableVis({ title, tableData, isTrack }) {
  const getImageUrl = (item) => {
    //image path are different based if it is track or artist that we are fetching
    return isTrack ? item.album.images[0].url : item.images[0].url;
  };

  return (
    <div className="table-vis-container">
      <h2 className="table-title">Your {title}</h2>
      <table>
        <tbody>
          {Array.isArray(tableData?.items) ? (
            tableData.items.map((item, index) => (
              <tr key={item.id || `item-${index}`}>
                <td className="table-vis-cell table-vis-cell-image">
                  <img src={getImageUrl(item)} className="artist-image" />
                </td>
                <td className="table-vis-cell">
                  <div className="track-info">
                    <span className="track-name">{item.name}</span>
                    {isTrack && item.artists?.[0]?.name && (
                      <span className="artist-name" aria-label="Artist name">
                        {item.artists[0].name}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <a
                    href={item.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotify-link"
                    aria-label="View item on Spotify"
                  >
                    <img src={spotifyIcon} className="spotify-logo" />
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

TableVis.propTypes = {
  title: PropTypes.string.isRequired,
  isTrack: PropTypes.bool,
  tableData: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            height: PropTypes.number,
            width: PropTypes.number,
          })
        ),
      })
    ),
  }).isRequired,
};
