/* eslint-disable react/prop-types */
export function CategoriesShow(props) {
  return (
    <div>
      {props.category.expenses.map((expense) => (
        <div key={expense.id}>
          <h2>{expense.name}</h2>
          <p>${expense.amount}</p>
        </div>
      ))}
    </div>
  );
}
