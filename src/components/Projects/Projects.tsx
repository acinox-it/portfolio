import { motion, type Variants } from "framer-motion";
import Section from "../common/Section";
import { projects } from "../../data/projects";
import Button from "../common/Button";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects" subtitle="Sélection de travaux récents" className="text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.title}
                        className="relative group flex flex-col justify-between p-5 rounded-lg bg-brand-orange text-black shadow-lg cursor-pointer transition-all"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                    >
                        {p.image && (
                            <motion.img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-32 object-cover rounded mb-3"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        <div>
                            <div className="font-semibold text-lg">{p.title}</div>
                            <div className="text-sm mt-1">{p.description}</div>
                        </div>
                        {p.badge && (
                            <span className="mt-2 inline-block text-xs bg-black text-white px-2 py-1 rounded self-start">
                                {p.badge}
                            </span>
                        )}
                        <div className="mt-4">
                            <Button href={p.demo || "#"} variant="ghost" className="!text-black !border-black">
                                View Demo
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Button href="https://github.com/acinox-it?tab=repositories" variant="primary">
                    View All
                </Button>
            </motion.div>
        </Section>
    );
};

export default Projects;
