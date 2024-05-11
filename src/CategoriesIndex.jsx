/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export function CategoriesIndex(props) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const state = {
    series: props.categories.map((c) => c.recommended_percent),
    options: {
      labels: props.categories.map((c) => c.name),
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Your Big Picture Budget",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="pie-chart">
        <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
      </div>
      <h1>Planned Budget</h1>
      {props.categories.map((category) => (
        <div
          key={category.id}
          className={`category-border ${hoveredCategory === category ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
          onClick={() => props.onShowCategory(category)}
        >
          <h2>{category.name}</h2>
          <p>Recommended Percent: {category.recommended_percent}</p>
          <p>{props.expense}</p>
          <div
            className="progress mb-4"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: category.progress }}></div>
          </div>
          {/* <button className="btn btn-info mb-3" onClick={() => props.onShowCategory(category)}>
            More Info
          </button> */}
        </div>
      ))}
    </div>
  );
}
