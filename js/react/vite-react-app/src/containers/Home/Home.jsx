import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Basic React concepts</h2>
      <Card></Card>
      <Card></Card>
    </main>
  );
};

export default Home;
