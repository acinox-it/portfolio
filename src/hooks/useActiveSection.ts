import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: readonly string[]) => {
    const [activeId, setActiveId] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
                
                if (visibleSections[0]?.target.id) {
                    setActiveId(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
};