import { capitalise } from "./capitalise.js";

test("takes a string and returns it with the first character capitalized", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("works with already capitalized strings", () => {
  expect(capitalise("World")).toBe("World");
});
