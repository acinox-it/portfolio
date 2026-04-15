import { motion, type Variants } from "framer-motion";
import Section from "../common/Section";
import { projects } from "../../data/projects";
import { socialLinks } from "../../data/config";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Projects = () => {
  return (
    <Section id="projects" title="Projets" subtitle="Sélection de travaux récents">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="group relative bg-bg-card rounded-xl border border-zinc-800 overflow-hidden hover:border-accent/50 transition-all"
          >
            {p.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5">
              {p.badge && (
                <span className="inline-block text-xs text-accent bg-accent/10 px-2 py-1 rounded mb-3">
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-display font-semibold text-text-primary group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-text-secondary text-sm mt-2 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Voir le projet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-medium rounded-lg hover:bg-accent-hover transition-colors"
        >
          Voir tout sur GitHub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
};

export default Projects;