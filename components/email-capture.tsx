"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    try {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";
      const res = await fetch(`${appUrl}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2 text-2xl font-bold">Stay in the Ring</h2>
        <p className="mb-6 text-muted-foreground">
          Get notified about new features, tournaments, and epic battles.
        </p>

        {status === "success" ? (
          <p className="text-primary font-semibold">
            You're in! Watch your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "..." : "Subscribe"}
            </Button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-destructive">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  );
}
