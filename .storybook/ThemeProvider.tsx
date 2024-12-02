import React from "react";
import "@/index.css"; // Import your shadcn global styles

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="light">{children}</div>; // or "dark" if you're using dark theme
};
