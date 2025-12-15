import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../common/Section";
import { skillGroups } from "../../data/skills";

const Skills: React.FC = () => {
    const [active, setActive] = useState<string | null>(null);

    const toggle = (category: string) => {
        setActive((prev) => (prev === category ? null : category));
    };

    return (
        <Section id="skills" title="Skills" subtitle="Technologies et outils">
            <div className="relative min-h-[100vh] space-y-5">
                {skillGroups.map((group) => {
                    const isOpen = active === group.category;

                    return (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="border border-white/10 rounded-lg bg-black/30"
                        >
                            {/* Bouton de catégorie */}
                            <button
                                onClick={() => toggle(group.category)}
                                className="w-full text-left px-5 py-4 flex justify-between items-center text-brand-orange font-semibold"
                            >
                                {group.category}
                                <span className="text-white">{isOpen ? "−" : "+"}</span>
                            </button>

                            {/* Contenu animé */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {group.skills.map((s) => {
                                                const Icon = s.icon;
                                                return (
                                                    <motion.div
                                                        key={s.name}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="flex items-center gap-2 p-3 rounded bg-black/50 border border-white/10 hover:bg-black/70 transition"
                                                    >
                                                        <Icon size={20} className="text-brand-orange" />
                                                        <span className="text-white">{s.name}</span>
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
