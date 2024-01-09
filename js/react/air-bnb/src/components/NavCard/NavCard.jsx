import styles from "./NavCard.module.scss";

export const NavCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>picture</div>
      <p>Beachfront</p>
    </div>
  );
};
export default NavCard;
