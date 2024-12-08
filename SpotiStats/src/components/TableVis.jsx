import PropTypes from "prop-types";

export default function TableVis({ title, tableData }) {
  return (
    <div className="table-vis-container">
      <h2>{title}</h2>
      <table>
        <tbody>
          {Array.isArray(tableData?.items) ? (
            tableData.items.map((item, index) => (
              <tr key={item.id || `item-${index}`}>
                <td className="table-vis-cell table-vis-cell-image">
                  <img src={item.images[0].url} className="artist-image" />
                </td>
                <td className="table-vis-cell">{item.name}</td>
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
