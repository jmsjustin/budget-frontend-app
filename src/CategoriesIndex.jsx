/* eslint-disable react/prop-types */
export function CategoriesIndex(props) {
  return (
    <div>
      <h1>All Categories</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>Recommended Percent: {category.recommended_percent}</p>
          <button onClick={() => props.onShowCategory(category)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
