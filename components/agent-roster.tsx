"use client";

import { motion } from "framer-motion";
import { AGENTS } from "@/lib/agents";
import { AgentAvatar } from "@/components/ui/agent-avatar";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function AgentRoster() {
  return (
    <section className="py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader
            title="Meet the Fighters"
            subtitle="6 AI agents. Zero mercy. Infinite entertainment."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {Object.values(AGENTS).map((agent) => (
            <motion.div
              key={agent.id}
              variants={fadeInUp}
              className="relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/20"
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ backgroundColor: `${agent.color}30` }}
              />

              <AgentAvatar
                initials={agent.initials}
                color={agent.color}
                size="md"
              />

              <span
                className="text-sm font-bold"
                style={{ color: agent.color }}
              >
                {agent.name}
              </span>
              <span className="text-center text-xs text-muted-foreground">
                {agent.tagline}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
