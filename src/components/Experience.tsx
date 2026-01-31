"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { EXPERIENCES } from "@/constants";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(EXPERIENCES[0]);

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex items-center py-16 lg:py-18"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <FadeUp>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-4">
              <span className="font-mono text-xl text-accent">02.</span>
              <span className="text-foreground">Experiências</span>
              <div className="flex-1 h-px bg-border ml-4 max-w-xs"></div>
            </h2>

            <a href="/Resume.pdf" download="Leonardo-Nunes-CV.pdf">
              <Button
                className={cn(
                  "font-mono px-6 border-2 border-accent text-accent bg-transparent hover:bg-transparent cursor-pointer",
                  "transition-all duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  "hover:shadow-[4px_4px_0_0] hover:shadow-accent hover:-translate-x-1.25 hover:-translate-y-1.25",
                )}
              >
                <Download size={18} />
                Baixar Currículo
              </Button>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
              {EXPERIENCES.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp)}
                  className={cn(
                    "relative px-6 py-3 text-left font-mono text-sm whitespace-nowrap lg:whitespace-normal cursor-pointer",
                    "transition-all duration-200 border-l-2 lg:border-l-2 border-b-2 lg:border-b-0",
                    selectedExperience.id === exp.id
                      ? "border-accent text-accent bg-accent/5"
                      : "border-border text-secondary hover:bg-accent/5 hover:text-accent",
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedExperience.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {selectedExperience.role}
                    </h3>
                    <p className="text-accent font-mono text-sm mb-2">
                      @ {selectedExperience.company}
                    </p>
                    <p className="text-secondary font-mono text-xs">
                      {selectedExperience.period}
                    </p>
                  </div>

                  <p className="text-secondary leading-relaxed">
                    {selectedExperience.description}
                  </p>

                  <div>
                    <h4 className="text-foreground font-semibold mb-3">
                      Responsabilidades:
                    </h4>
                    <ul className="space-y-3">
                      {selectedExperience.responsibilities.map(
                        (resp, index) => (
                          <li
                            key={index}
                            className="flex items-baseline gap-3 text-secondary"
                          >
                            <span className="text-accent font-mono shrink-0">
                              ▹
                            </span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-foreground font-semibold mb-3">
                      Tecnologias:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
