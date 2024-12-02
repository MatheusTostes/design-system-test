import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders logo and navigation", () => {
    render(<Header />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders search bar", () => {
    render(<Header />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("applies correct styles", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass(
      "flex",
      "items-center",
      "justify-between",
      "p-4",
      "border-b"
    );
  });
});
