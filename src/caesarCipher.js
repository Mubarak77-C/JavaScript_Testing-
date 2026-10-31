export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Handle lowercase letters (a-z: 97-122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(
          ((((code - 97 + shift) % 26) + 26) % 26) + 97,
        );
      }

      // Handle uppercase letters (A-Z: 65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          ((((code - 65 + shift) % 26) + 26) % 26) + 65,
        );
      }

      // Return non-alphabetical characters unchanged
      return char;
    })
    .join("");
}
