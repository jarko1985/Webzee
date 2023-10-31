import ListItem from "./ListItem";
import styles from "./styles.module.scss";

const List = ({ categories, setCategories })=> {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <ListItem
          category={category}
          key={category._id}
          setCategories={setCategories}
        />
      ))}
    </ul>
  );
}

export default List;