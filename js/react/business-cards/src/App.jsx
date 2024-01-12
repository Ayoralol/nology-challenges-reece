import {useState} from "react";
import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import CardContainer from "./containers/CardContainer/CardContainer";

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => [...prevFormData, data]);
    console.log(formData);
  };

  return (
    <>
      <div className={styles.cont}>
        <Form onFormSubmit={handleFormSubmit} />
        <CardContainer formData={formData} />
      </div>
    </>
  );
}

export default App;
