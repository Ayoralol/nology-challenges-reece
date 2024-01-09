const suits = ["hearts", "spades", "clubs", "diamonds"];

const drawCards = (n = 10) => {
  const cards = [];
  while (cards.length < n) {
    let card = Math.floor(Math.random() * 13) + 1;
    card += suits[Math.floor(Math.random() * 4)];
    if (cards.includes(card)) continue;
    cards.push(card);
  }
  return cards;
};

console.log(drawCards(5));
console.log(drawCards(55));
console.log(drawCards(21));
