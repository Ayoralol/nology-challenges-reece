console.log(
  typeof 15, // Prediction: number
  typeof 5.5, // Prediction: number
  typeof NaN, // Prediction: NaN - actual number
  typeof "hello", // Prediction: string
  typeof true, // Prediction: boolean
  typeof (1 != 2), // Prediction: boolean
  "hamburger" + "s", // Prediction: "hamburgers"
  "hamburgers" - "s", // Prediction: "hamburger" - actual NaN
  "1" + "3", // Prediction: "13"
  "1" - "3", // Prediction: "-2"
  "johnny" + 5, // Prediction: "johnny5"
  "johnny" - 5, // Prediction: ??? - actual NaN
  99 * "luftbaloons" // Prediction: ??? - actual NaN
);

let firstName = "Reece";
let lastName = "Smith";
let age = 28;

// using template literal
console.log(
  `Hi, my name is ${firstName} ${lastName} and I am ${age} years old`
);

// using quotation marks
console.log(
  "Hi, my name is " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old"
);
