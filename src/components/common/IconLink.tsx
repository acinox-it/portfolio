import React from "react";

type Props = {
    href: string;
    label: string;
    children: React.ReactNode;
};

const IconLink: React.FC<Props> = ({ href, label, children }) => {
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
