import NavCard from "../../components/NavCard/NavCard";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <div className={styles.container}>
      <NavCard />
      <NavCard />
      <NavCard />
      <NavCard />
    </div>
  );
};
export default Nav;
