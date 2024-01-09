const StudentCard = ({
  name = "No Name",
  age = "No Age",
  location = "No Location",
  isLocationVisible = true,
  isAgeVisible = true,
  quizScore,
}) => {
  return (
    <article>
      <h3>{name}</h3>
      {isAgeVisible && <p>{age}</p>}
      {isLocationVisible && <p>{location}</p>}
      {quizScore ? <p>Quiz Score: {quizScore}</p> : ""}
    </article>
  );
};

export default StudentCard;
