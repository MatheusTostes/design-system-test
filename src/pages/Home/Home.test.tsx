import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("renders welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<Home />);
    expect(
      screen.getByText(/This is an example of Atomic Design/i)
    ).toBeInTheDocument();
  });

  it("renders get started button", () => {
    render(<Home />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });
});
