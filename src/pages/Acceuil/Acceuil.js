import styles from "./Acceuil.module.scss";
import Banner from "../../components/Banner/Banner";
import Logement from "./components/Logement/Logement";
import { data } from "../../data/logements";
import { Link } from "react-router-dom";
import bannerAcceuil from "../../assets/images/IMG.jpg";

function Acceuil() {
  const logements = data;
  return (
    <div className="flex-fill container p-20">
      <Banner imageSrc={bannerAcceuil} showTitle={true} />
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {logements.map((logement) => (
            <Link to={`logement/${logement.id}`} key={logement.id}>
              <Logement title={logement.title} cover={logement.cover} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
