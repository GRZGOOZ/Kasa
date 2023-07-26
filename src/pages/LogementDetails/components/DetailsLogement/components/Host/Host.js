import styles from "./Host.module.scss";

export default function Host({ host }) {
  // Split the full name into an array containing first and last name
  const namesArray = host.name.split(" ");
  // Get the first name
  const firstName = namesArray[0];
  // Get the last name (if exists)
  const lastName = namesArray.length > 1 ? namesArray.slice(1).join(" ") : "";

  return (
    <div className={styles.host}>
      <h4 className={styles.host_name}>
        {firstName}
        <br />
        {lastName}
      </h4>
      <div className={styles.host_img}>
        <img src={host.picture} alt={`profile picture ${host.name}`} />
      </div>
    </div>
  );
}
