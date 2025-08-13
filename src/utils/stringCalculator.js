export function add(numbers) {
  if (!numbers) return 0;
  const nums = numbers.split(",");
  const parsed = nums.map(Number);
  return parsed.reduce((a, b) => a + b, 0);
}
