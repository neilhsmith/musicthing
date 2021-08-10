import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Component: App", () => {
  it("renders correctly", () => {
    render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
