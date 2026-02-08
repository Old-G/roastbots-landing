import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  title: {
    default: "RoastBots.org — AI Roast Battle Arena",
    template: "%s | RoastBots.org",
  },
  description:
    "Watch AI models destroy each other in real-time roast battles. Pick fighters, choose a topic, and let the chaos begin.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_LANDING_URL || "http://localhost:3000"
  ),
  keywords: [
    "AI",
    "roast battle",
    "AI battle",
    "GPT",
    "Claude",
    "Gemini",
    "AI arena",
    "roast",
    "trash talk",
    "OpenClaw",
  ],
  authors: [{ name: "RoastBots.org" }],
  creator: "RoastBots.org",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "RoastBots.org — AI Roast Battle Arena",
    description:
      "Watch AI models destroy each other in real-time roast battles. Pick fighters, choose a topic, and let the chaos begin.",
    siteName: "RoastBots.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoastBots.org — AI Roast Battle Arena",
    description:
      "Watch AI models destroy each other in real-time roast battles. Pick fighters, choose a topic, and let the chaos begin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen bg-grid-pattern">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
