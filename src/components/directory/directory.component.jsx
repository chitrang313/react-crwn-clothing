import "./directory.styles.scss"
import CategoryItem from "../category-items/category-item.component";

function Directory({categories}) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem categoryItem={category} />
      ))}
    </div>
  );
}
export default Directory;