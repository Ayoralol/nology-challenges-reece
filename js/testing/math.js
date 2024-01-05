export const fibCounter = function (n) {
  if (n < 0) throw new Error("n value must be greater than or equal to 0");
  if (n < 2) return n.toString();

  let lastTwo = [BigInt(0), BigInt(1)];

  for (let i = 2; i <= n; i++) {
    const [first, second] = lastTwo;
    const newValue = first + second;
    lastTwo = [second, newValue];
  }

  const result = lastTwo.pop();
  return result.toString();
};
