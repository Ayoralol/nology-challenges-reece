function moonOrbits(days) {
  return days / 27;
}
console.log(moonOrbits(365));

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

console.log(circleArea(10));
console.log(circlePerimeter(10));

function ageInDays(years) {
  return years * 365;
}

function ageInSeconds(years) {
  return years * 365 * 24 * 60 * 60;
}

console.log(ageInDays(32));
console.log(ageInSeconds(32));

function remainder(i, j) {
  return i % j;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

function basketballScore(twos, threes) {
  return twos * 2 + threes * 3;
}

console.log(basketballScore(20, 11));

function lessThan100(i, j) {
  if (i + j < 100) {
    return true;
  } else return false;
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));
