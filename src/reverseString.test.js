import { reverseString } from "./reverseString.js";
test("reverses a single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a sentence with multiple words", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("works with punctuation and numbers", () => {
  expect(reverseString("123!")).toBe("!321");
});
