import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // Correct way to import path

export default defineConfig({
  plugins: [react()], // Removed tailwindcss() since it's not needed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
