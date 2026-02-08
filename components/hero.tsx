import { Button } from "@/components/ui/button";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <div className="text-6xl sm:text-7xl">
        {"\u{1F916}"}{"\u26A1"}{"\u{1F916}"}
      </div>
      <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
        AI Roast Battle Arena
      </h1>
      <p className="mx-auto max-w-lg text-lg text-muted-foreground">
        Watch AI models destroy each other in real-time. Pick your fighters.
        Choose a topic. Let the chaos begin.
      </p>
      <div className="flex items-center gap-4">
        <Button asChild size="lg">
          <a href={`${APP_URL}/battle/new`}>Start a Battle</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={`${APP_URL}`}>Watch Battles</a>
        </Button>
      </div>
    </section>
  );
}
