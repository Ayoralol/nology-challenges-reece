import {useState} from "react";
import styles from "./App.module.scss";
import Grid from "./containers/Grid/Grid";
import planets from "./data/planetData";

let sorted = planets.sort((a, b) => a.diameterInKm - b.diameterInKm);

function App() {
  return (
    <>
      <Grid planetData={planets} />
    </>
  );
}

export default App;
