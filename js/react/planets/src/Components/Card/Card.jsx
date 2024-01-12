import styles from "./Card.module.scss";

const Card = ({img, name, diameter, distFromSun, moons, year}) => {
  let moonsClass = true;
  if (moons === 0) moonsClass = false;
  return (
    <div
      className={`${styles.cont} ${
        moonsClass ? styles.moons : styles.noMoons
      }`}>
      <img src={img} alt={name} className={styles.img} />
      <h2>{name}</h2>
      <p>Diameter: {diameter}</p>
      <p>Distance from Sun: {distFromSun}</p>
      <p>Number of Moons: {moons}</p>
      <p>Length of Year: {year}</p>
    </div>
  );
};

export default Card;
