import { analyzeArray } from "./analyzeArray.js";

test("analyzes an array of numbers correctly", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles a single number array", () => {
  const object = analyzeArray([5]);

  expect(object).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});
