export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@phosphor-icons/vue"],
    },
    ssr: {
      noExternal: ["@phosphor-icons/vue"],
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
  },
  app: {
    head: {
      title: "Rita & Pedro — O Nosso Casamento",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      meta: [
        {
          name: "description",
          content:
            "Rita & Pedro vão casar a 29 de abril de 2028. Descobre todos os detalhes do nosso dia.",
        },
        { property: "og:title", content: "Rita & Pedro — Casamento 2028" },
        {
          property: "og:description",
          content:
            "Rita & Pedro vão casar a 29 de abril de 2028. Descobre todos os detalhes do nosso dia.",
        },
        { property: "og:image", content: "/logo-casamento.png" },
        { property: "og:type", content: "website" },
        
      ],
    },
  },
});
