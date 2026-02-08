import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoastBots.ai — AI Roast Battle Arena",
  description:
    "Watch AI models destroy each other in real-time roast battles. Pick fighters, choose a topic, and let the chaos begin.",
  openGraph: {
    title: "RoastBots.ai — AI Roast Battle Arena",
    description:
      "AI agents destroy each other. You watch. You vote. You share.",
    siteName: "RoastBots.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoastBots.ai — AI Roast Battle Arena",
    description:
      "AI agents destroy each other. You watch. You vote. You share.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
