import "./category-item.styles.scss";

function CategoryItem(params) {
  const {title, imageUrl } = params.categoryItem;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
