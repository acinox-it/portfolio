import Section from "../common/Section";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <Section id="about" title="Profil" subtitle="">
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h3 className="text-xl font-semibold text-brand-orange mb-2">Alternance 2026/2027 – Développement Web & Desktop</h3>
                    <p className="text-justify text-gray-200">
                        Je suis un jeune développeur full stack passionné, à la recherche d’une alternance pour l’année 2026/2027 (rythme 3 semaines en entreprise / 1 semaine en formation) ou d’un stage non rémunéré. J’aime concevoir et développer des applications web et desktop, apprendre de nouvelles technologies et relever des défis techniques. Curieux, motivé et rigoureux, je souhaite évoluer dans un environnement dynamique où je pourrai progresser et contribuer activement aux projets.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                        <p className="text-justify text-sm text-gray-300">
                            Ce portfolio met en avant une mise en page moderne en sections partagées, une typographie épurée et des couleurs d’accent audacieuses pour refléter mon style et mes compétences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
