import { add } from "./stringCalculator";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for single number", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("handles new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});
test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
