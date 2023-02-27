/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "en",
  locales: ["en", "fr"],
  routes: {
    fr: {
      about: "a-propos",
      "contact-us": "contactez-nous",
    },
  },
};
