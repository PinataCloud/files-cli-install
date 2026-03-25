import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        // @ts-expect-error - Vite version mismatch between @tailwindcss/vite and astro
        plugins: [tailwindcss()],
    },
});