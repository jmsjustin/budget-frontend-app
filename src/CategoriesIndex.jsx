/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

export function CategoriesIndex(props) {
  const state = {
    series: [76, 67, 61, 90],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="radialBar" height={390} />

      <h1>All Categories</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>Recommended Percent: {category.recommended_percent}</p>
          <p>{props.expense}</p>
          <div
            className="progress mb-3"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: category.recommended_percent }}></div>
          </div>

          <button className="btn btn-info mb-3" onClick={() => props.onShowCategory(category)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
