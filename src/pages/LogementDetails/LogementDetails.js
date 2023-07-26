import { useParams, Link } from "react-router-dom";
import { data } from "../../data/logements";
import Carousel from "./components/Carousel/Carousels";
import Accordion from "../../components/Accordions/components/Accordion/Accordion";
import Detailslogement from "./components/DetailsLogement/DetailsLogement";
import Equipements from "./components/DetailsLogement/components/Equipements/Equipements";
import styles from "./LogementDetails.module.scss";
import styless from "../ErrorPage/ErrorPage.module.scss";

function LogementDetails() {
  const { id } = useParams();
  const logementDetail = data.find(
    (logementDetail) => logementDetail.id === id
  );
  if (!logementDetail) {
    return (
      <div className={styless.error}>
        <h2 className={styless.errorStatus}>404</h2>
        <h3 className={styless.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <Link to="/Kasa">Retourner sur la page d'acceuil</Link>
      </div>
    );
  }
  return (
    <div className={"container  mvh p-20"}>
      <Carousel pictures={logementDetail.pictures} />
      <Detailslogement
        title={logementDetail.title}
        location={logementDetail.location}
        host={logementDetail.host}
        tags={logementDetail.tags}
        rating={logementDetail.rating}
      />
      <div className={`${styles.accordions}`}>
        <Accordion title={"Description"} content={logementDetail.description} />
        <Accordion
          title={"Equipements"}
          content={
            <Equipements
              key="equipements"
              equipements={logementDetail.equipments}
            />
          }
        />
      </div>
    </div>
  );
}

export default LogementDetails;
