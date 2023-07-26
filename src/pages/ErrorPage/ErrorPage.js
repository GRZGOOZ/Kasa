import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Header />

      <div className={styles.error}>
        <h2 className={styles.errorStatus}>404</h2>
        <h3 className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <Link to="/Kasa">Retourner sur la page d'acceuil</Link>
      </div>

      <Footer />
    </>
  );
}
