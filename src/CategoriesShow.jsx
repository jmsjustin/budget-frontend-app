/* eslint-disable react/prop-types */
export function CategoriesShow(props) {
  return (
    <div>
      <h1>Category Info</h1>
      <p>Name: {props.category.name}</p>
      <p>Recommended Percent: {props.category.recommended_percent}</p>
    </div>
  );
}
