// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://www.vojtamares.cz",

    i18n: {
        locales: ["cs", "en"],
        defaultLocale: "cs",
        routing: {
            prefixDefaultLocale: false,
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "National Park",
                cssVariable: "--font-national-park",
            },
        ],
    },

    adapter: cloudflare(),
});
