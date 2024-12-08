import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartVis({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides the grid lines on the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Popularity Score",
        },
      },
    },
  };

  const backgroundColours = [
    "#81CFFA",
    "#EB4B62",
    "#67CE67",
    "#B25FEA",
    "#F1A33B",
  ];

  const data = {
    labels: chartData.items.map((item) => item.name),
    datasets: [
      {
        label: "Popularity",
        data: chartData.items.map((item) => item.popularity),
        backgroundColor: backgroundColours,
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}

ChartVis.propTypes = {
  chartData: PropTypes.shape({
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
