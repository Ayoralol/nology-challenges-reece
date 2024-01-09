import "./Rating.scss";

export const Rating = () => {
  let randomRating = Math.floor(Math.random() * 501) / 100;
  console.log(randomRating);
  return (
    <div>
      <p>★</p>
      <p>{randomRating}</p>
    </div>
  );
};

export default Rating;
