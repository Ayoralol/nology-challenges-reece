import * as challenge from "./js11";

const {greet, sumTwoNumbers, checkLarger, filterByLength, reduceNumbers} =
  challenge;

describe("greet()", () => {
  it("Should be defined", () => {
    expect(greet()).toBeDefined();
  });
  it("Should return a string", () => {
    expect(greet()).toBe("Hello, nice to meet you");
  });
});

describe("sumTwoNumbers()", () => {
  it("Should return correct sum", () => {
    expect(sumTwoNumbers(1, 2)).toBe(3);
    expect(sumTwoNumbers(5, 7)).toBe(12);
    expect(sumTwoNumbers(157, 2952)).toBe(3109);
  });
});

describe("checkLarger()", () => {
  it("Should return correct string if both are equal", () => {
    expect(checkLarger(1, 1)).toBe("Both numbers are equal");
    expect(checkLarger(127, 127)).toBe("Both numbers are equal");
  });
  it("Should return correct string if a is larger than b", () => {
    expect(checkLarger(5, 4)).toBe("5 is bigger than 4");
    expect(checkLarger(1358, 21)).toBe("1358 is bigger than 21");
  });
  it("Should return correct string if b is larger than a", () => {
    expect(checkLarger(4, 5)).toBe("5 is bigger than 4");
    expect(checkLarger(21, 1358)).toBe("1358 is bigger than 21");
  });
});

describe("filterByLength()", () => {
  it("Should return correct array of names", () => {
    expect(filterByLength(["John"])).toStrictEqual(["John"]);
    expect(filterByLength(["Johnathan", "Joe"])).toStrictEqual(["Joe"]);
  });
  it("Should return correct string if no valid names supplied", () => {
    expect(filterByLength(["Johnathan"])).toBe(
      "Sorry, no valid names supplied"
    );
  });
});

describe("reduceNumbers()", () => {
  it("Should return correct array of numbers", () => {
    expect(reduceNumbers([1, 2, 3], 1)).toStrictEqual([0, 1, 2]);
    expect(reduceNumbers([255, 255, 255], 1)).toStrictEqual([254, 254, 254]);
    expect(reduceNumbers([255, 255, 255], 100)).toStrictEqual([155, 155, 155]);
  });
  it("Should return correct array when above 255 or below 0", () => {
    expect(reduceNumbers([0, 255, 400], 100)).toStrictEqual([0, 155, 255]);
  });
});
