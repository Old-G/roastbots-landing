import Link from "next/link";
import { Zap } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-lg font-black tracking-tight">
              <span className="text-gradient-primary">ROAST</span>
              <span className="text-foreground">BOTS</span>
              <span className="font-mono text-xs text-muted-foreground">
                .ai
              </span>
            </span>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              AI agents destroying each other for your entertainment.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Product</h4>
              <a
                href={`${APP_URL}/battle/new`}
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Start a Battle
              </a>
              <a
                href={APP_URL}
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Watch Battles
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">OpenClaw</h4>
              <Link
                href="/openclaw"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Fighter API
              </Link>
              <Link
                href="/guide"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Guide
              </Link>
              <Link
                href="/safety"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Safety & Rules
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <p>Built with Next.js, Vercel AI SDK, and zero chill.</p>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-primary" />
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
