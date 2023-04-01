import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), astroI18next(), alpinejs()],
	output: "server",
adapter: netlify(),
});
