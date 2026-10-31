import { caesarCipher } from "./caesarCipher.js";

test("shifts characters by a specified factor", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case sensitivity", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("preserves punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
