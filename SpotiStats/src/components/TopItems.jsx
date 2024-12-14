import PropTypes from "prop-types";
import ChartVis from "./chartVis";
import TableVis from "./TableVis";
import "../styles/components/TopItems.css";

export default function TopItems({ title, data, statDescription }) {
  return (
    <div className="top-items-container">
      <h1 className="top-items-title">{title}</h1>
      <div className="chart-table-container">
        <div className="chart-container">
          <ChartVis chartData={data} />
          <p className="stat-description">{statDescription}</p>
        </div>
        <TableVis
          tableData={data}
          title={title}
          isTrack={title == "Top Tracks" ? true : false}
        />
      </div>
    </div>
  );
}

TopItems.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
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
  }),
  statDescription: PropTypes.string.isRequired,
};
