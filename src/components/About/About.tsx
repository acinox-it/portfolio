import { motion } from "framer-motion";
import Section from "../common/Section";

const softSkills = [
  "Geek dans l'âme, toujours sur un écran",
  "Home lab personnel (Proxmox, Docker, VPN)",
  "Passionné par les objets connectés & la robotique",
  "L'informatique, c'est ma vie",
];

const About = () => {
  return (
    <Section id="about" title="À propos" subtitle="Alternant Systèmes, Réseaux & Cloud">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-bg-card rounded-xl p-6 border border-zinc-800"
        >
          <h3 className="text-xl font-display font-semibold text-accent mb-4">Mon profil</h3>
          <p className="text-text-secondary leading-relaxed">
            Jeune motivé en <span className="text-text-primary font-medium">3e année de Bachelor Systèmes, Réseaux & Cloud</span> à l'ESGI, je recherche une alternance (rythme <span className="text-text-primary font-medium">3 sem. / 1 sem.</span>) pour 2026/2027.
          </p>
          <p className="text-text-secondary leading-relaxed mt-4">
            Passionné par l'automatisation et la sécurisation des infrastructures, je souhaite mettre ma rigueur et ma curiosité au service de la performance de vos systèmes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-bg-card rounded-xl p-6 border border-zinc-800"
        >
          <h3 className="text-xl font-display font-semibold text-accent mb-4">En quelques mots</h3>
          <ul className="space-y-3">
            {softSkills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="w-2 h-2 bg-accent rounded-full" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
