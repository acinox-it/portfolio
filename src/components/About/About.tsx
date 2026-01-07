import Section from "../common/Section";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <Section id="about" title="Profil" subtitle="Alternance DevOps / Cloud / Sys-Réseau">
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h3 className="text-xl font-semibold text-brand-orange mb-2">Alternance à partir de septembre 2026</h3>
                    <p className="text-justify text-gray-200">
                        Alternant en <strong>Systèmes, Réseaux & Cloud Computing</strong>, je recherche une alternance (rythme <strong>3 semaines entreprise / 1 semaine formation</strong>) orientée <strong>DevOps</strong>, <strong>Cloud</strong>, <strong>Administration Sys/Réseau</strong> et <strong>sécurité opérationnelle</strong>. Je suis <strong>habilitable Défense</strong>.
                    </p>

                                  </motion.div>
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                        <h4 className="text-lg font-semibold text-white">Mes atouts</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
                            <li><strong>Fiabilité & reproductibilité</strong> : lab propre, configs documentées, environnements répétables.</li>
                            <li><strong>Culture Ops</strong> : Linux, DNS, connectivité, diagnostic (logs/traffic) pour aller vite au root cause.</li>
                            <li><strong>Automatisation (junior)</strong> : scripts/CI/deploys Docker/Nginx pour réduire le bruit et sécuriser les routines.</li>
                            <li><strong>Rigueur d’exécution</strong> : petites PR, Git propre, messages clairs, suivi de bout en bout.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
