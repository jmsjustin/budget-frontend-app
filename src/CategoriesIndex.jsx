/* eslint-disable react/prop-types */
export function CategoriesIndex(props) {
  return (
    <div>
      <h1>All Categories</h1>
      {props.photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.name}</h2>
          <img src={photo.url} />
          <p>Width: {photo.width}</p>
          <p>Height: {photo.height}</p>
        </div>
      ))}
    </div>
  );
}
