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
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Recommended Percent: <input name="recommended_percent" type="text" />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
}
