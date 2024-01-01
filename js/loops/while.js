// while loops challenge

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomTen() {
  let newArray = [];
  while (newArray.length <= 10) {
    let rand = randomNumber(1, 16);
    if (!newArray.includes(rand)) {
      newArray.push(rand);
    }
  }
  return newArray;
}

console.log(generateRandomTen());

function generateNumbers(n, r, isUnique) {
  if ((isUnique == true && n > r) || n <= 0 || r <= 0) {
    return "Invalid Input";
  }
  let newArray = [];
  if (isUnique == true) {
    while (newArray.length < n) {
      let rand = randomNumber(1, r + 1);
      if (!newArray.includes(rand)) {
        newArray.push(rand);
      }
    }
  } else {
    while (newArray.length < n) {
      let rand = randomNumber(1, r + 1);
      newArray.push(rand);
    }
  }
  return newArray;
}

console.log(generateNumbers(10, 10, false));
console.log(generateNumbers(10, 10, true));
