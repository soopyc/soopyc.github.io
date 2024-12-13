// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare(),
    integrations: [icon()],
});
