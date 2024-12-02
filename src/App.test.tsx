import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders home page by default", () => {
    render(<App />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it("renders 404 page for invalid routes", () => {
    window.history.pushState({}, "", "/invalid-route");
    render(<App />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
