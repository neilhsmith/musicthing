import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app text", () => {
  render(<App />);
  const linkElement = screen.getByText(/the app/i);
  expect(linkElement).toBeInTheDocument();
});
