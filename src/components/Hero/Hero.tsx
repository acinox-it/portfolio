import { motion } from "framer-motion";
import Button from "../common/Button";
import IconLink from "../common/IconLink";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <section id = "hero" className="relative min-h-[100vh] grid md:grid-cols-2">
            <div className="split-left p-8 md:p-12 flex flex-col items-center justify-center">
                <motion.img
                    src="/profile.png"
                    alt="Aed Sahraoui portrait"
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
                    Aed Sahraoui
                </motion.h1>
            </div>

            <div className="split-right p-8 md:p-12 flex flex-col justify-center">
                <motion.p
                    className="text-sm uppercase tracking-wide text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Full stack Developer
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold mt-2"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Abd eldjalil Sahraoui
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    Le code n’était pas parfait, mais ce n’était pas ça qui la fascinait. C’était le défi. Les énigmes du frontend comme du backend, qui promettaient apprentissage et découverte. Elle savait ce qui l’attendait et était prête à construire.
                </motion.p>

                <div className="mt-8 flex items-center gap-4">
                    <Button href="/cv.pdf" download variant="primary">Download CV</Button>
                    <div className="flex items-center gap-4">
                        <IconLink href="https://www.linkedin.com/in/abd-eldjalil-sahraoui/" label="LinkedIn">
                            <FaLinkedin size={22} />
                        </IconLink>
                        <IconLink href="https://github.com/acinox-it" label="GitHub">
                            <FaGithub size={22} />
                        </IconLink>
                        <IconLink href="https://twitter.com" label="Twitter">
                            <FaTwitter size={22} />
                        </IconLink>
                        <IconLink href="https://www.youtube.com/@AcinoxIT" label="YouTube">
                            <FaYoutube size={22} />
                        </IconLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
