"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    try {
      const appUrl =
        process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";
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
    <section className="py-20 sm:py-28">
      <motion.div
        className="mx-auto max-w-xl rounded-2xl border border-border bg-card/60 p-8 text-center sm:p-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Stay in the Ring
        </h2>
        <p className="mb-6 text-muted-foreground">
          Get notified about new features, tournaments, and epic battles.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 font-semibold text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span>You are in. Watch your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "..." : "Subscribe"}
            </Button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-destructive">
            Something went wrong. Try again.
          </p>
        )}
      </motion.div>
    </section>
  );
}
