import { calculator } from "./calcualtor.js";

test("adds two numbers correctly", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("divides two numbers correctly", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("multiplies two numbers correctly", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
