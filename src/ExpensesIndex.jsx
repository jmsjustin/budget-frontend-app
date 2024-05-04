/* eslint-disable react/prop-types */
export function ExpensesIndex(props) {
  return (
    <div>
      <h1>All Expenses</h1>
      {props.expenses.map((expense) => (
        <div key={expense.id}>
          <h2>{expense.name}</h2>
          <p>Amount: {expense.amount}</p>
        </div>
      ))}
    </div>
  );
}
