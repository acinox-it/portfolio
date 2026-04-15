import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const About = lazy(() => import("../components/About/About"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const Education = lazy(() => import("../components/Education/Education"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));

const LoadingFallback = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
);

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
};

export default Home;
