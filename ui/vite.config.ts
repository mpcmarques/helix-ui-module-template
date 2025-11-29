import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        outDir: "../web",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@store": path.resolve(__dirname, "./src/store"),
        },
    },
});
