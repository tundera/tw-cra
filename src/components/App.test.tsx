import React from "react";
import { render, screen } from "@testing-library/react";
import App from "@components/App";

test("renders heading correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Twin Macro Demo/i);
  expect(linkElement).toBeInTheDocument();
});
