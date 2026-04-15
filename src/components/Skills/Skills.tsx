import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../common/Section";
import { skillGroups } from "../../data/skills";

const Skills = () => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(skillGroups[0]?.category ?? null);

  return (
    <Section id="skills" title="Compétences" subtitle="Technologies et outils que je maîtrise">
      <div className="space-y-3">
        {skillGroups.map((group, groupIndex) => {
          const isExpanded = expandedGroup === group.category;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-bg-card"
            >
              <button
                onClick={() => setExpandedGroup(isExpanded ? null : group.category)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-bg-secondary transition-colors"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {group.category}
                </h3>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-text-secondary"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-zinc-800"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4">
                      {group.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary border border-zinc-800 hover:border-accent/50 transition-all group"
                          >
                            <Icon size={20} className="text-accent group-hover:text-accent-hover transition-colors" />
                            <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;