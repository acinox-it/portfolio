export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
}

export const experiences: ExperienceItem[] = [
    {
        title: "Technicien support informatique",
        company: "GICA",
        period: "Juin 2025 - Août 2025",
        description:
            "- Installation de postes de travail\n- Assistance aux utilisateurs\n- Support bureautique\n- Intervention sur site ou à distance\n- Suivi des tickets",
    },
    {
        title: "Stage Informatique & Téléphonie",
        company: "MULTIGSM SERVICES",
        period: "Mai 2024 - Juillet 2024",
        description:
            "- Maintenance/réparation de matériel informatique et smartphones(micro soudure, diagnostics)\n- Support technique client et gestion des demandes(hardware/software)\n- Contribution à l’optimisation des processus de dépannage",
    },
    {
        title: "Employé Polyvalant",
        company: "Alfaprim",
        period: "Juin 2023 - Août 2023",
        description:
            "- Mise en rayon\n- Prise en charge des paiements en espèces, carte bancaire ou autre moyen de paiement.\n- Accueil et service client",
    },
];
