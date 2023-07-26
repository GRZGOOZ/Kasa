import styles from "./Footer.module.scss";
import kasaFooter from "./../../assets/images/kasafooter.png";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-column align-items-center `}
    >
      <div>
        <img src={kasaFooter} alt="logo kasa" />
      </div>
      <p className="d-flex">
        <i className="far fa-copyright mr-5"></i>
        <span>2020 Kasa. All rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;
