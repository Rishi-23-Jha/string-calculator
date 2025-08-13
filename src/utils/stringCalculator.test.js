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
