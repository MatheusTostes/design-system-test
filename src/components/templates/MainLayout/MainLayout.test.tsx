import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";

describe("MainLayout", () => {
  it("renders children content", () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("includes header component", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("applies correct layout classes", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );
    expect(screen.getByRole("main")).toHaveClass(
      "flex-1",
      "container",
      "mx-auto",
      "py-8"
    );
  });
});
