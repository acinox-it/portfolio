import React, { useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";

const sections = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "experience", label: "Expérience" },
    { id: "education", label: "Éducation" },
    { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
    const activeId = useActiveSection(sections.map((s) => s.id));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            id="navbar"
            role="navigation"
            aria-label="Navigation principale"
            className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo / Nom */}
                    <div className="text-brand-orange font-bold text-xl cursor-pointer" onClick={() => scrollTo("hero")}>
                        Aed Sahraoui
                    </div>

                    {/* Menu burger (mobile) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange rounded p-2"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Liens desktop */}
                    <ul className="hidden md:flex gap-6 text-sm text-white/80">
                        {sections.map((s) => (
                            <li
                                key={s.id}
                                aria-current={activeId === s.id ? "true" : undefined}
                                className={`cursor-pointer transition ${activeId === s.id
                                    ? "text-brand-orange font-semibold"
                                    : "hover:text-white"
                                    }`}
                                onClick={() => scrollTo(s.id)}
                            >
                                {s.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu mobile dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col gap-4 py-4 text-white/80">
                        {sections.map((s) => (
                            <li
                                key={s.id}
                                aria-current={activeId === s.id ? "true" : undefined}
                                className={`cursor-pointer transition py-2 px-4 rounded-lg ${activeId === s.id
                                    ? "text-brand-orange font-semibold bg-brand-orange/10"
                                    : "hover:text-white hover:bg-white/5"
                                    }`}
                                onClick={() => scrollTo(s.id)}
                            >
                                {s.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
