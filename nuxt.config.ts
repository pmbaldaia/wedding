export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Rita & Pedro — O Nosso Casamento",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
})
