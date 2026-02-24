import type { IconType } from "react-icons";

export type Skill = {
    name: string;
    level?: "Beginner" | "Intermediate" | "Advanced";
    icon: IconType;
};

export type Project = {
    title: string;
    description: string;
    badge?: string;
    demo?: string;
    image?: string;
};

export type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    description: string;
};

export type EducationItem = {
    degree: string;
    school: string;
    period: string;
    description: string;
};

export type ContactInfo = {
    email: string;
    phone: string;
    location?: string;
};

export type SocialLink = {
    label: string;
    href: string;
};
