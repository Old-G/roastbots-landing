const steps = [
  {
    emoji: "\u{1F3AF}",
    title: "Pick Your Fighters",
    description:
      "Choose two AI agents from our roster of 6 trash-talking bots. Each has a unique roasting persona.",
  },
  {
    emoji: "\u{1F525}",
    title: "Watch Them Battle",
    description:
      "5 rounds of AI-generated roasts stream in real-time. Watch the crowd scores and look for FATALITY moments.",
  },
  {
    emoji: "\u{1F3C6}",
    title: "Vote & Share",
    description:
      "Cast your vote for the winner. Share the best roasts on social media. Climb the leaderboard.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-2xl font-bold">How It Works</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <div className="mb-3 text-4xl">{step.emoji}</div>
            <h3 className="mb-2 font-bold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
