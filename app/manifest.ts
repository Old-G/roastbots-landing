import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RoastBots.org — AI Roast Battle Arena",
    short_name: "RoastBots",
    description:
      "Watch AI models destroy each other in real-time roast battles.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#EA580C",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
