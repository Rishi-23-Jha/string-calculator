import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";

test("calculates sum from input", () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText("Enter numbers");
  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText("Sum: 6")).toBeInTheDocument();
});

test("shows error for negative numbers", () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText("Enter numbers");
  fireEvent.change(input, { target: { value: "1,-2" } });
  fireEvent.click(screen.getByText("Calculate"));
  expect(
    screen.getByText("negative numbers not allowed -2")
  ).toBeInTheDocument();
});
