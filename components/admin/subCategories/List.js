import ListItem from "./ListItem";
import styles from "./styles.module.scss";

const List = ({ categories, subCategories, setSubCategories })=> {
  return (
    <ul className={styles.list}>
      {subCategories.map((sub) => (
        <ListItem
          subCategory={sub}
          key={sub._id}
          setSubCategories={setSubCategories}
          categories={categories}
        />
      ))}
    </ul>
  );
}

export default List;
