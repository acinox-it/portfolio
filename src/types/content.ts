import type { IconType } from "react-icons";

export type Skill = {
    name: string;
    level?: "Beginner" | "Intermediate" | "Advanced";
    icon: IconType; // référence au composant d’icône
};

export type Project = {
    title: string;
    description: string;
    badge?: string;
    link?: string;
    demo?: string;
    image?: string;
};

export type ExperienceItem = {
    period: string;
    role: string;
    company: string;
};

export type EducationItem = {
    period: string;
    degree: string;
    school: string;
};
