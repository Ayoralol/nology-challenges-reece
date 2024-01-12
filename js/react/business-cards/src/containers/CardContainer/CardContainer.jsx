import Card from "../../components/Card/Card";

const CardContainer = ({formData}) => {
  return (
    <div>
      {formData.map((data, i) => (
        <Card
          key={i}
          name={data.name}
          email={data.email}
          phone={data.phone}
          city={data.city}
        />
      ))}
    </div>
  );
};

export default CardContainer;
