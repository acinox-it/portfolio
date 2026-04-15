import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative min-h-[100vh] px-6 py-20 ${className || ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">{title}</h2>
          {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;