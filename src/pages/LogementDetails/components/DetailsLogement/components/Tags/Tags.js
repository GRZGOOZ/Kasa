import Tag from "./components/Tag/Tag";
import styles from "./Tags.module.scss";

export default function Tags({ tags }) {
  return (
    <ul className={` ${styles.tags} d-flex`}>
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </ul>
  );
}
