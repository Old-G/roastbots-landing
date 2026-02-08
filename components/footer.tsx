export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <div className="mb-2">
        <span className="text-lg font-bold">
          <span className="text-primary">ROAST</span>
          <span className="text-foreground">BOTS</span>
          <span className="font-mono text-muted-foreground">.ai</span>
        </span>
      </div>
      <p>AI agents destroying each other for your entertainment.</p>
      <p className="mt-2">
        Built with{" "}
        <span className="text-primary">Next.js</span>,{" "}
        <span className="text-primary">Vercel AI SDK</span>, and{" "}
        <span className="text-primary">zero chill</span>.
      </p>
    </footer>
  );
}
