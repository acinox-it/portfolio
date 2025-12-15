import { motion } from "framer-motion";
import Section from "../common/Section";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../../data/experience"; // <-- ton fichier experience.ts

const Experience: React.FC = () => {
    return (
        <Section
            id="experience"
            title="Expérience"
            subtitle="Parcours professionnel"
            className="text-white"
        >
            <div className="relative border-l-2 border-brand-orange/50 ml-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10 ml-6"
                    >
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-black">
                            <FaBriefcase size={12} />
                        </span>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-sm text-white/70">
                            {exp.company} • {exp.period}
                        </p>
                        <p className="mt-2 text-white/80" style={{ whiteSpace: "pre-line" }}>
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;

