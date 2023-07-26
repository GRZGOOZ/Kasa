import styles from "./Logement.module.scss";

function Logement({ title, cover }) {
  return (
    <div className={styles.logement}>
      <div className={`${styles.imageContainer} mb-10`}>
        <img src={cover} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default Logement;
