import { accordions } from "../../data/accordions";
import Accordion from "./components/Accordion/Accordion";

function Accordions() {
  return (
    <div className="container">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion._id}
          title={accordion.title}
          content={accordion.content}
        />
      ))}
    </div>
  );
}

export default Accordions;
