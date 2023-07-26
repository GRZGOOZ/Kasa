import styles from "./DetailsLogement.module.scss";
import Host from "./components/Host/Host";
import Tags from "./components/Tags/Tags";
import Rating from "./components/Rating/Rating";

function DetailsLogement({ title, location, host, tags, rating }) {
  return (
    <div className={`${styles.logementDetail} container`}>
      <div className={styles.logementDetail_left}>
        <div className={styles.location_left_titles}>
          <h3 className={styles.logementDetail_left_titles_title}>{title}</h3>
          <h4 className={styles.logementDetail_left_titles_location}>
            {location}
          </h4>
        </div>
        <Tags tags={tags} />
      </div>
      <div className={styles.logementDetail_right}>
        <Host host={host} />
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default DetailsLogement;
