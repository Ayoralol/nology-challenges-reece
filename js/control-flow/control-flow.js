// Random Number Generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // check odd even

// let n = getRandomInt(0, 1000);

// if (n % 2 === 0) {
//   console.log(`${n} is even`);
// } else console.log(`${n} is odd`);

// // if greater/less/equal to

// let x = getRandomInt(0, 1000);
// let y = getRandomInt(0, 1000);

// if (x > y) {
//   console.log(`${x} is greater than ${y}`);
// } else if (x < y) {
//   console.log(`${x} is smaller than ${y}`);
// } else {
//   console.log(`${x} is equal to ${y}`);
// }

// // return string, number^2, or invalidinput

// let userInput = getRandomInt(0, 1000);

// if (userInput < 500 && typeof userInput != "boolean") {
//   userInput = userInput.toString();
// }

// if (typeof userInput == "string") {
//   console.log(`${userInput} but it's a string`);
// } else if (typeof userInput == "number" && !isNaN(userInput)) {
//   console.log(`${userInput}^2 = ${userInput ** 2}`);
// } else console.log("invalid input");

// // switch case

// let day = getRandomInt(1, 10);
// console.log(`day is ${day}`);

// switch (day) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("I dont know what day that is");
// }

let rnd1 = getRandomInt(1, 3);
let rnd2 = getRandomInt(1, 3);
let parent1 = null;
let parent2 = null;
let childchance = getRandomInt(1, 10000);
let childEyes = null;

switch (rnd1) {
  case 1:
    parent1 = "Brown";
    break;
  case 2:
    parent1 = "Green";
    break;
  case 3:
    parent1 = "Blue";
    break;
}
switch (rnd2) {
  case 1:
    parent2 = "Brown";
    break;
  case 2:
    parent2 = "Green";
    break;
  case 3:
    parent2 = "Blue";
    break;
}

let parents = parent1 + parent2;
console.log(parents);

switch (parents) {
  case "BrownBrown":
    console.log(
      "Your eye colours are Brown and Brown, the chances of your child having Blue eyes is 6.25%, brown is 75%, and green is 18.75%"
    );
    switch (childchance) {
      case childchance < 626:
        childEyes = "Blue";
        break;
      case childchance < 7500 + 626:
        childEyes = "Brown";
        break;
      default:
        childEyes = "Green";
        break;
    }
    break;
  case "BrownGreen":
  case "GreenBrown":
    console.log(
      "Your eye colours are Brown and Green, the chances of your child having Blue eyes is 12.5%, brown is 50%, and green is 37.5%"
    );
    switch (childchance) {
      case childchance < 1251:
        childEyes = "Blue";
        break;
      case childchance < 5000 + 1251:
        childEyes = "Brown";
        break;
      default:
        childEyes = "Green";
        break;
    }
    break;
  case "BrownBlue":
  case "BlueBrown":
    console.log(
      "Your eye colours are Brown and Blue, the chances of your child having Blue eyes is 50%, brown is 50%, and green is 0%"
    );
    switch (childchance) {
      case childchance < 5001:
        childEyes = "Blue";
        break;
      default:
        childEyes = "Brown";
        break;
    }
    break;
  case "GreenGreen":
    console.log(
      "Your eye colours are Green and Green, the chances of your child having Blue eyes is 25%, brown is <1%, and green is 75%"
    );
    switch (childchance) {
      case childchance < 2501:
        childEyes = "Blue";
        break;
      case childchance < 2511:
        childEyes = "Brown";
        break;
      default:
        childEyes = "Green";
        break;
    }
    break;
  case "BlueGreen":
  case "GreenBlue":
    console.log(
      "Your eye colours are Green and Blue, the chances of your child having Blue eyes is 50%, brown is 0%, and green is 50%"
    );
    switch (childchance) {
      case childchance < 5001:
        childEyes = "Blue";
        break;
      default:
        childEyes = "Green";
        break;
    }
    break;
  case "BlueBlue":
    console.log(
      "Your eye colours are Blue and Blue, the chances of your child having Blue eyes is 99%, brown is 0%, and green is 1%"
    );
    switch (childchance) {
      case childchance < 9900:
        childEyes = "Blue";
        break;
      default:
        childEyes = "Green";
        break;
    }
    break;
}

switch (childEyes) {
  case "Brown":
    console.log("The childs eye color is Brown, this is my least favourite");
    break;
  case "Green":
    console.log("The childs eye color is Green, this is my Favourite");
    break;
  default:
    console.log("The childs eye color is Blue, this is my middle favourite");
}
