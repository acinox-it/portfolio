import { motion } from "framer-motion";
import Section from "../common/Section";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../../data/education"; // <-- ton fichier education.ts

const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Éducation"
      subtitle="Parcours académique"
      className="text-white"
    >
      <div className="relative border-l-2 border-brand-orange/50 ml-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-black">
              <FaGraduationCap size={12} />
            </span>
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm text-white/70">
              {edu.school} • {edu.period}
            </p>
            <p className="mt-2 text-white/80">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
