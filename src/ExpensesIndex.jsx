/* eslint-disable react/prop-types */
import { ExpensesNew } from "./ExpensesNew";
export function ExpensesIndex(props) {
  return (
    <div>
      <h1>All Expenses</h1>
      {props.expenses.map((expense) => (
        <div key={expense.id}>
          <h2>{expense.name}</h2>
          {expense.category_id}
          <p>Amount: {expense.amount}</p>
          <button onClick={() => props.onShowExpense(expense)}>More info</button>
        </div>
      ))}
      <ExpensesNew />
    </div>
  );
}
