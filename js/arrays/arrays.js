let hobbies = ["golf", "gaming", "reading"];

console.log(hobbies[0]);

let hobbyOne = hobbies[0];
let firstItem = hobbies.shift();
let newLength = hobbies.length;
hobbies.push("walking");
console.log(hobbies[hobbies.length - 1]);

// bonus

hobbies = hobbies.join(", ");
console.log(`My hobbies are ${hobbies}`);

let groceryArray = ["bread", "milk", "pies", "corn", "wraps"];

console.log(groceryArray.join("|"));
