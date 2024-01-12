import styles from "./Card.module.scss";

const Card = ({name, email, phone, city}) => {
  return (
    <div className={styles.cont}>
      <p className={styles.p}>Name: {name}</p>
      <p className={styles.p}>Email: {email}</p>
      <p className={styles.p}>Phone: {phone}</p>
      <p className={styles.p}>City: {city}</p>
    </div>
  );
};

export default Card;
