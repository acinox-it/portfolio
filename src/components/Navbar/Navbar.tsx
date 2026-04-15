import { useState, useCallback } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollY } from "../../hooks/useScroll";
import { personalInfo, navSections } from "../../data/config";

const Navbar = () => {
  const activeId = useActiveSection(navSections.map((s) => s.id));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollY();

  const isScrolled = scrollY > 50;

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "auto" });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navigation principale"
      >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollTo("hero")}
            className="text-accent font-display font-bold text-xl hover:opacity-80 transition"
            aria-label="Retour à l'accueil"
          >
            {personalInfo.nickname}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex gap-8 text-sm">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  aria-current={activeId === s.id ? "true" : undefined}
                  className={`transition-colors ${
                    activeId === s.id
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 py-4">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  aria-current={activeId === s.id ? "true" : undefined}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    activeId === s.id
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                  }`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;