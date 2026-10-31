export function analyzeArray(arr) {
  if (arr.length === 0) return null;

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
