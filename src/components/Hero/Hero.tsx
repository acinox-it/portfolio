import { motion } from "framer-motion";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import { personalInfo } from "../../data/config";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-[100vh] grid md:grid-cols-2">
            <div className="split-left p-8 md:p-12 flex flex-col items-center justify-center">
                <motion.img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} portrait`}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white/20 shadow-glow"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.h1
                    className="mt-6 text-5xl font-medium font-cursive text-black"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {personalInfo.nickname}
                </motion.h1>
            </div>

            <div className="split-right p-8 md:p-12 flex flex-col justify-center">
                <motion.p
                    className="text-sm uppercase tracking-wide text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {personalInfo.title}
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold mt-2"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {personalInfo.name}
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    {personalInfo.tagline}
                </motion.p>

                <div className="mt-8 flex items-center gap-4">
                    <Button href={personalInfo.cvPath} download variant="primary" ariaLabel="Télécharger le CV">Download CV</Button>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default Hero;
