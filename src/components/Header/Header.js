import styles from "./Header.module.scss";
import kasa from "./../../assets/images/kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      className={`${styles.header} d-flex flex-fill p-20 container align-items-center`}
    >
      <div className={`${styles.imgContainer} flex-fill`}>
        <img src={kasa} alt="logo kasa" />
      </div>
      <ul className={`${styles.nav}`}>
        <NavLink to="/Kasa" className={`${styles.nav1} mr-30 `}>
          Accueil
        </NavLink>
        <NavLink to="Apropos">A Propos</NavLink>
      </ul>
    </header>
  );
}

export default Header;
