/* eslint-disable react/prop-types */
export function ExpensesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateExpense(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div className="mb-3">
          Amount: <input className="form-control" name="amount" type="text" />
        </div>
        <button className="btn btn-success mb-3" type="submit">
          Create Expense
        </button>
      </form>
    </div>
  );
}
