import React from "react";

import type { Preview } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import "./preview.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return React.createElement(
        ThemeProvider,
        null,
        React.createElement(Story, null)
      );
    },
  ],
};

export default preview;
