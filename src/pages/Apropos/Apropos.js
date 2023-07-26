import Banner from "../../components/Banner/Banner";
import Accordions from "../../components/Accordions/Accordions";
import banner2 from "../../assets/images/banner2.png";

export default function Apropos() {
  return (
    <div className="flex-fill container mvh p-20 ">
      <Banner imageSrc={banner2} showTitle={false} />
      <div className={`p-20`}>
        <Accordions />
      </div>
    </div>
  );
}
