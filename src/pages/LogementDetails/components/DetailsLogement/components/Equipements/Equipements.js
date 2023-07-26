export default function Equipements({ equipements }) {
  return (
    <ul className="d-flex flex-column">
      {equipements.map((equipement, index) => {
        return <li key={index}>{equipement}</li>;
      })}
    </ul>
  );
}
