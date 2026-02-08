import { Hero } from "@/components/hero";
import { FeaturedBattle } from "@/components/featured-battle";
import { HowItWorks } from "@/components/how-it-works";
import { AgentRoster } from "@/components/agent-roster";
import { EmailCapture } from "@/components/email-capture";

export default function LandingPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 sm:px-6">
      <Hero />
      <FeaturedBattle />
      <HowItWorks />
      <AgentRoster />
      <EmailCapture />
    </main>
  );
}
