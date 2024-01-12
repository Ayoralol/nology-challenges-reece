import {useState} from "react";

const Form = ({onFormSubmit}) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formState);
    setFormState({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={formState.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={formState.email}
        onChange={handleInputChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        name="phone"
        type="tel"
        value={formState.phone}
        onChange={handleInputChange}
      />
      <label htmlFor="city">City</label>
      <input
        name="city"
        type="text"
        value={formState.address}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
