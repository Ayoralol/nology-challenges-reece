function sum(n) {
  let increment = 0;
  for (let i = 1; i <= n; i++) {
    increment += i;
  }
  return increment;
}

console.log(sum(10));

let n = 10;

console.log((n * (n + 1)) / 2);

// another loops

const pets = ["pixie", "claude", "sebastian", "bug"];
// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
pets.push(pets.shift());
console.log(pets);

// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
pets.reverse();
console.log(pets);

// -> 3. ['bug', 'sebastian', 'pixie']
pets.pop();
pets.push(pets.shift());
console.log(pets);
// -> 4. ['Bug', 'Sebastian', 'Pixie]

for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i][0].toUpperCase() + pets[i].slice(1);
}
console.log(pets);
// -> 5. ['Bug', 'Seb', 'Pix']

for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i].substring(0, 3);
}
console.log(pets);
