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
