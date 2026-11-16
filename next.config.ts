import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Čisto statický web: build vygeneruje len HTML/CSS/JS a fotky (priečinok out/).
  // Na Verceli tak nebeží žiadna serverless funkcia, optimalizácia obrázkov ani databáza –
  // hosting nespotrebúva nič navyše.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
