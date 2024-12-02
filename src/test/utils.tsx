import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (ui: ReactNode) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};
