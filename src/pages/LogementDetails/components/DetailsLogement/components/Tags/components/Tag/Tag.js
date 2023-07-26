import styles from "./Tag.module.scss";

export default function Tag({ name }) {
  return <li className={styles.tag}>{name}</li>;
}
