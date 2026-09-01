import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sites } from "./build/sites-vite-plugin";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), sites()],
  server: { host: "0.0.0.0", allowedHosts: ["terminal.local"] },
});
