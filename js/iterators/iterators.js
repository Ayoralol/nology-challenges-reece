// iterators
// passing functions into functions
// why do we use iterators
// whats the difference between a loop and an iterator
// how to use array iterators

// functions into functions
function calculate(number, func) {
  return func(number);
}

const x = 123;
const squared = (number) => number ** 2;

console.log(squared(123));

console.log(calculate(x, squared));

// iterators
const pets = ["pixie", "claude", "sebastion"];

// standard capitalize
const capitalizedPets = [];
for (let i = 0; i < pets.length; i++) {
  const name = pets[i].charAt(0).toLocaleUpperCase() + pets[i].slice(1);
  capitalizedPets.push(name);
}

console.log(capitalizedPets);

// standard slicing
const slicedPets = [];
for (let i = 0; i < pets.length; i++) {
  slicedPets.push(pets[i].slice(0, 3));
}

console.log(slicedPets);

// .map() passes a function over each item of an array and applies it to each thing, returning the same length of array
// .filter() passes a function that filters out items in an array and returns an array shorter than it
