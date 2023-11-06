const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("comma is placed in the correct position - 5124", () => {
    let result = addCommas(5124);
    expect("5,124").toEqual(result);
  });

  test("comma is placed in the correct position - 12545", () => {
    let result = addCommas(12545);
    expect("12,545").toEqual(result);
  });

  test("comma is placed in the correct position for negative number - -540000", () => {
    let result = addCommas(-540000);
    expect("-540,000").toEqual(result);
  });

  test("no comma - four digit number", () => {
    let result = addCommas(120);
    expect("120").toEqual(result);
  });
});
