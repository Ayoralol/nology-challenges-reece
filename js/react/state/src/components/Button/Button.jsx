import styles from "./Button.module.scss";

const Button = ({handleClick, children}) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
