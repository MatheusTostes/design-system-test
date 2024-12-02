import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      include: ["src/components", "src/lib"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
    }),
  ],
  build: {
    ...(process.env.BUILD_LIB
      ? {
          lib: {
            entry: path.resolve(__dirname, "src/components/index.ts"),
            name: "YourLibrary",
            formats: ["es", "umd"],
            fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
          },
          rollupOptions: {
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
            },
          },
        }
      : undefined),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
