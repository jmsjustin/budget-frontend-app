/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";
import { ExpensesNew } from "./ExpensesNew";

export function CategoriesShow(props) {
  const state = {
    series: [
      {
        name: "Spending",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Spending History",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
  };

  return (
    <div>
      <h3>{props.category.name}</h3>
      <p>{props.category.description}</p>
      <div className="expenses">
        {props.category.expenses.map((expense) => (
          <div key={expense.id} className="expense-border">
            <h2>{expense.name}</h2>
            <p>${expense.amount}</p>
          </div>
        ))}
        <ReactApexChart options={state.options} series={state.series} type="line" height={250} />
        <ExpensesNew category={props.category} onCreateExpense={props.onCreateExpense} />
      </div>
    </div>
  );
}
