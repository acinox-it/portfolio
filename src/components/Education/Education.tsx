import { motion } from "framer-motion";
import Section from "../common/Section";
import { education } from "../../data/education";

const Education = () => {
  return (
    <Section id="education" title="Formation" subtitle="Parcours académique">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-bg-card rounded-xl p-5 border border-zinc-800 hover:border-accent/50 transition-all group"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-lg font-display font-semibold text-text-primary">{edu.degree}</h3>
              <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded shrink-0">{edu.period}</span>
            </div>
            <p className="text-text-secondary text-sm mb-2">{edu.school}</p>
            <p className="text-text-muted text-sm">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;