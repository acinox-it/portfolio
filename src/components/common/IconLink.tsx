type Props = {
    href: string;
    label: string;
    children: React.ReactNode;
};

const IconLink = ({ href, label, children }: Props) => {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
        >
            {children}
        </a>
    );
};

export default IconLink;
