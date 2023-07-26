import { useState } from "react";
import styles from "./Accordion.module.scss";

export default function Accordion({ title, content }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
        className={styles.accordion_button}
      >
        <span className={styles.accordion_button_title}>{title}</span>
        <span
          className={`${styles.arrow} ${isExpanded ? styles.arrow_up : ""}`}
        ></span>
      </button>
      <div
        aria-hidden={!isExpanded}
        style={{ display: isExpanded ? "block" : "none" }}
        className={styles.accordion_content}
      >
        {content}
      </div>
    </div>
  );
}
