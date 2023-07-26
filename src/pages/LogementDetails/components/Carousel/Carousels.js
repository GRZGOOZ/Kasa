import { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToFirstItem = () => {
    setCurrentIndex(0);
  };

  const goToLastItem = () => {
    setCurrentIndex(pictures.length - 1);
  };

  if (pictures.length === 1) {
    return (
      <div className={`${styles.carousel} container mb-20`}>
        <div className={styles.carousel_content}>
          <img src={pictures[0]} alt={` picture `} />
        </div>
      </div>
    );
  }

  const currentFraction = `${currentIndex + 1} / ${pictures.length}`;

  return (
    <div
      className={` ${styles.carousel} container d-flex justify-content-center mb-30`}
    >
      {currentIndex > 0 ? (
        <button className={styles.carousel_prev} onClick={goToPreviousItem}>
          <span className={styles.carousel_prev_arrow}></span>
        </button>
      ) : (
        <button className={styles.carousel_prev} onClick={goToLastItem}>
          <span className={styles.carousel_prev_arrow}></span>
        </button>
      )}
      <div className={styles.carousel_content}>
        <img src={pictures[currentIndex]} alt={`picture ${currentIndex + 1}`} />
      </div>
      {currentIndex < pictures.length - 1 ? (
        <button className={styles.carousel_next} onClick={goToNextItem}>
          <span className={styles.carousel_next_arrow}></span>
        </button>
      ) : (
        <button className={styles.carousel_next} onClick={goToFirstItem}>
          <span className={styles.carousel_next_arrow}></span>
        </button>
      )}
      <div className={styles.carousel_count}>{currentFraction}</div>
    </div>
  );
};

export default Carousel;
