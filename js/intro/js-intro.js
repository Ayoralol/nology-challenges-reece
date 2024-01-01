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

console.log(
  2 == "2", // true
  2 === 2, // true
  2 === "2", // false
  "2" + 3 == 23, // true
  "2" + 3 === 5, // false
  10 % 3, // 1
  10 % 3 === 1, // true
  (100 % 7) % 5, // 2
  (100 % 7) % 5 !== 0, // true
  (100 % 7) % 9 == 2, // true
  !(10 % 2), // true
  !!!!((10 % 7) % 3), // false
  10 % 3 === -1 % 2, // false
  (892783 != "89278" + 3) == 0, // false ----- true - realise the answer
  true && false, // false
  false || true, // true
  true || false, // true
  true || false, // true
  true || false + true, // true
  true * false && false + true, // NaN ----- 0 - realise the answer
  10 && 123 && -1 && 3, // 3
  10 && 123 && 0 && 3, // 0
  (10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1, // -1 ------ 0 - realise the answer, math error by me
  3 && "Calum" && ("" || 26), // 26
  3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")) // "CatDog"
);
