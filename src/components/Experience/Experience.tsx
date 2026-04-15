import { motion } from "framer-motion";
import Section from "../common/Section";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <Section id="experience" title="Expérience" subtitle="Parcours professionnel">
      <div className="relative">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-10 border-l-2 border-zinc-800 last:border-l-0"
          >
            <span className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary" />
            <div className="bg-bg-card rounded-xl p-5 border border-zinc-800 hover:border-accent/50 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-display font-semibold text-text-primary">{exp.title}</h3>
                <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <p className="text-text-secondary text-sm mb-3">{exp.company}</p>
              <p className="text-text-muted text-sm whitespace-pre-line">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;