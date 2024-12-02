import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("renders search input and button", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Search...");
    await userEvent.type(input, "test search");
    expect(input).toHaveValue("test search");
  });
});
