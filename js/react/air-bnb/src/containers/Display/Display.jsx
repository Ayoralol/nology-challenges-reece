import Card from "../../components/Card/Card.jsx";
import styles from "./Display.module.scss";
import bnbs from "../../data/data.json";

export const Display = () => {
  return (
    <div className={styles.container}>
      {bnbs &&
        bnbs.map((bnb) => (
          <Card
            key={bnb.id}
            title={bnb.title}
            location={bnb.location}
            dates={bnb.dates}
            price={bnb.price}
          />
        ))}
      ;
    </div>
  );
};
export default Display;
