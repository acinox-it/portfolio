export interface EducationItem {
    degree: string;
    school: string;
    period: string;
    description: string;
}

export const education: EducationItem[] = [
    {
        degree: "BTS CIEL option IR",
        school: "Lycée durzy - Villemandeur",
        period: "2023 - 2025",
        description:
            "Spécialisation en cybersécurité, informatique et réseaux.",
    },
    {
        degree: "Baccalauréat général",
        school: "Lycée Jacques Monod - Saint-Jean-de-Braye",
        period: "2022 - 2023",
        description:
            "Mathématiques, Informatique",
    },
];
