import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export const Container: React.FC<Props> = ({ children, className = "", id }) => {
    return (
        <section id={id} className={`mx-auto max-w-6xl px-6 md:px-8 ${className}`}>
            {children}
        </section>
    );
};
export default Container;
