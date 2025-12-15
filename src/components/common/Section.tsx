type SectionProps = {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className }) => {
    return (
        <section
            id={id}
            className={`relative min-h-[100vh] px-6 py-12 scroll-mt-[80px] ${className || ""}`}
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-orange">{title}</h2>
                {subtitle && <p className="text-white/70">{subtitle}</p>}
            </div>
            {children}
        </section>
    );
};

export default Section;

