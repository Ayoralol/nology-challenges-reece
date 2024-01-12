import Card from "../../Components/Card/Card";

const Grid = ({planetData}) => {
  return (
    <div>
      {planetData.map((planet, i) => {
        return (
          <Card
            key={i}
            img={planet.image}
            name={planet.planetName}
            diameter={planet.diameterInKm}
            distFromSun={planet.distanceFromSun}
            moons={planet.numberOfMoons}
            year={planet.lengthOfYear}
          />
        );
      })}
    </div>
  );
};

export default Grid;
