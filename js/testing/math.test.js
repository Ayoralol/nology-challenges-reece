import {fibCounter} from "./math.js";

describe("tests for fibCounter function", () => {
  it("should return the right fibonacci number given a valid value for n > 1", () => {
    expect(fibCounter(2)).toBe("1");
    expect(fibCounter(3)).toBe("2");
    expect(fibCounter(4)).toBe("3");
    expect(fibCounter(8)).toBe("21");
    expect(fibCounter(100)).toBe("354224848179261915075");
  });

  it("should return n when n < 2 is passed in", () => {
    expect(fibCounter(0)).toBe("0");
    expect(fibCounter(1)).toBe("1");
  });

  it("should throw an error when n < 0 is passed in", () => {
    expect(() => fibCounter(-1)).toThrow(
      new Error("n value must be greater than or equal to 0")
    );
    expect(() => fibCounter(-10)).toThrow(
      new Error("n value must be greater than or equal to 0")
    );
  });
});
