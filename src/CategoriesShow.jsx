/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";
import { ExpensesNew } from "./ExpensesNew";
import { useState } from "react";
import axios from "axios";

export function CategoriesShow(props) {
  const [updateExpenseId, setUpdateExpenseId] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const handleUpdateExpense = (id, params, successCallback) => {
    console.log("handleUpdateAmount", params);
    axios.patch(`http://localhost:3000/expenses/${id}.json`, params).then((response) => {
      console.log(response);
      successCallback();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // props.onUpdateExpense(props.expense.id, params, () => event.target.reset());
    handleUpdateExpense(updateExpenseId, params, () => (window.location.href = "/"));
  };

  const handleDestroyExpense = (id) => {
    console.log("handleDestroyExpense", id);
    axios.delete(`http://localhost:3000/expenses/${id}.json`).then((response) => {
      // setExpenses(expenses.filter((expense) => expense.id !== id));
      // handleClose();
      window.location.href = "/";
    });
  };

  const handleCLick = () => {
    props.onDestroyExpense(props.expense.id);
  };

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
          <div
            key={expense.id}
            className={`category-border ${hoveredCategory === expense ? "hovered-expense" : ""}`}
            onMouseEnter={() => handleMouseEnter(expense)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setUpdateExpenseId(expense.id)}
          >
            <h2>{expense.name}</h2>
            {expense.id === updateExpenseId ? (
              <div>
                <div>
                  <form>
                    <div className="mb-3">
                      Amount:{" "}
                      <input className="form-control" defaultValue={expense.amount} name="amount" type="number"></input>
                    </div>

                    <button onClick={() => handleUpdateExpense} className="btn btn-light mb-3" type="submit">
                      Update!
                    </button>
                    <button
                      onClick={() => handleDestroyExpense(expense.id)}
                      id="expense-delete"
                      className="btn btn-danger mb-3"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div>
                <p>${expense.amount}</p>
              </div>
            )}
          </div>
        ))}

        <ReactApexChart options={state.options} series={state.series} type="line" height={250} />
        <ExpensesNew category={props.category} onCreateExpense={props.onCreateExpense} />
      </div>
    </div>
  );
}
