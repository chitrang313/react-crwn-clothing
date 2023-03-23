import "./directory.styles.scss"
import CategoryItem from "../category-items/category-item.component";

function Directory({categories}) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} categoryItem={category} />
      ))}
    </div>
  );
}
export default Directory;