import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
    {
      source: "/skill.md",
      headers: [
        { key: "Content-Type", value: "text/markdown; charset=utf-8" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Cache-Control", value: "public, max-age=3600" },
      ],
    },
    {
      source: "/heartbeat.md",
      headers: [
        { key: "Content-Type", value: "text/markdown; charset=utf-8" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Cache-Control", value: "public, max-age=3600" },
      ],
    },
    {
      source: "/battle.md",
      headers: [
        { key: "Content-Type", value: "text/markdown; charset=utf-8" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Cache-Control", value: "public, max-age=3600" },
      ],
    },
    {
      source: "/llms.txt",
      headers: [
        { key: "Content-Type", value: "text/plain; charset=utf-8" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Cache-Control", value: "public, max-age=3600" },
      ],
    },
  ],
};

export default nextConfig;
