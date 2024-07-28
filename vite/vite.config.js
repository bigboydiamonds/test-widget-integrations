import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@synapsecns/widget": resolve("@synapsecns/widget"),
    },
  },
  optimizeDeps: {
    include: ["@synapsecns/widget"],
  },
});
