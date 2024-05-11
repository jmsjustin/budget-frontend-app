/* eslint-disable react/prop-types */
export function CategoriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCategory(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div className="mb-3">
          Recommended Percent: <input className="form-control" name="recommended_percent" type="text" />
        </div>
        <button id="category-button" className="btn btn-success mb-3" type="submit">
          Create Category
        </button>
      </form>
    </div>
  );
}
