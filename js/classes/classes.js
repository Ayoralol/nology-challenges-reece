class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.walksTaken = [];
  }

  walk(distance) {
    this.walksTaken.push(distance);
    console.log(`${this.name} just went for a ${distance} meter walk!`);
  }
  totalWalkDistance() {
    return `${this.name} has walked ${this.walksTaken.reduce(
      (acc, curr) => acc + curr
    )} meters total`;
  }
  averageWalkDistance() {
    let average =
      this.walksTaken.reduce((acc, curr) => acc + curr) /
      this.walksTaken.length;
    return `${this.name} walks ${average} meters on average`;
  }
  walkSummary() {
    let summaryArray = [`${this.name} summary:`];
    for (let i = 0; i < this.walksTaken.length; i++) {
      summaryArray.push(` Walk ${i + 1}: ${this.walksTaken[i]} meters`);
    }
    return summaryArray.join("");
  }
}

const dogJoe = new Dog("joe", "Golden");
const dogMartin = new Dog("Martin", "Sausage");

console.log(dogJoe);
console.log(dogMartin);

dogJoe.walk(100);
dogJoe.walk(200);
dogJoe.walk(300);
dogMartin.walk(500);
dogMartin.walk(800);
dogMartin.walk(2500);

console.log(dogJoe.totalWalkDistance());
console.log(dogMartin.totalWalkDistance());
console.log(dogJoe.averageWalkDistance());
console.log(dogMartin.averageWalkDistance());
console.log(dogJoe.walkSummary());
console.log(dogMartin.walkSummary());
