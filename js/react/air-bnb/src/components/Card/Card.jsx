import Rating from "../Rating/Rating.jsx";
import styles from "./Card.module.scss";

export const Card = ({title, location, dates, price}) => {
  return (
    <div className={styles.card_wrap}>
      <div className={styles.image_wrap}>
        <img src="https://placekitten.com/200/200" className={styles.image} />
      </div>
      <div className={styles.wrap_rating}>
        <div>
          <div className={styles.text_wrap}>
            <h3 className={styles.text}>{title}</h3>
            <p className={styles.text}>{location}</p>
            <p className={styles.text}>{dates}</p>
          </div>
          <div className={styles.cost_wrap}>
            <p className={styles.cost}>{price}</p>
            <p className={styles.cost_total}>total</p>
          </div>
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default Card;
