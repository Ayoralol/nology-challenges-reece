import Button from "../Button/Button";
import styles from "./DarkMode.module.scss";
import {useState} from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      document.body.classList.toggle("dark_mode", !darkMode);
      return !darkMode;
    });
  };

  // console.log(darkMode);
  return (
    <Button handleClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default DarkMode;
