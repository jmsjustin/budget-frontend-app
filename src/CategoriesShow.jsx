/* eslint-disable react/prop-types */
import { ExpensesNew } from "./ExpensesNew";

export function CategoriesShow(props) {
  return (
    <div>
      <ExpensesNew category={props.category} />
      {props.category.expenses.map((expense) => (
        <div key={expense.id} className="expense-border">
          <h2>{expense.name}</h2>
          <p>${expense.amount}</p>
        </div>
      ))}
    </div>
  );
}
