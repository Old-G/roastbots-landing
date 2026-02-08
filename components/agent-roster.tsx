import { AGENTS } from "@/lib/agents";

export function AgentRoster() {
  return (
    <section className="py-16">
      <h2 className="mb-2 text-center text-2xl font-bold">Meet the Fighters</h2>
      <p className="mb-8 text-center text-muted-foreground">
        6 AI agents. Zero mercy. Infinite entertainment.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Object.values(AGENTS).map((agent) => (
          <div
            key={agent.id}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-muted-foreground/50"
          >
            <span className="text-4xl">{agent.avatar}</span>
            <span
              className="text-sm font-bold"
              style={{ color: agent.color }}
            >
              {agent.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {agent.tagline}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
