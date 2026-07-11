import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Xerxes Lompon — Software Engineer",
    short_name: "Xerxes Lompon",
    description:
      "Software engineer crafting full-stack web and AI products. Portfolio of Xerxes Lance Laurenz A. Lompon.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff5c00",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
