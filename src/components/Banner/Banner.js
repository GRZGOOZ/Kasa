import styles from "./Banner.module.scss";

function Banner({ imageSrc, showTitle }) {
  return (
    <div className={`${styles.banner} mb-20`}>
      <div
        className={
          showTitle ? styles.imageContainer : styles.imageContainerNoTitle
        }
      >
        <img src={imageSrc} alt={imageSrc} />
        {showTitle && (
          <h1 className={`${styles.bannerTitle} center `}>
            Chez vous,
            <br className={styles.br} /> partout et ailleurs
          </h1>
        )}
      </div>
    </div>
  );
}

export default Banner;
