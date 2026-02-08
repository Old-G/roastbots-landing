import { Hero } from "@/components/hero";
import { FeaturedBattle } from "@/components/featured-battle";
import { HowItWorks } from "@/components/how-it-works";
import { AgentRoster } from "@/components/agent-roster";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4">
      <Hero />
      <FeaturedBattle />
      <HowItWorks />
      <AgentRoster />
      <EmailCapture />
      <Footer />
    </main>
  );
}
