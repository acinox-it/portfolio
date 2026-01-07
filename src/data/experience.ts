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
            "- Déploiement et préparation de postes (installation, configuration, mises à jour)\n- Support utilisateurs (sur site / à distance) et résolution d’incidents\n- Diagnostic de base (réseau, accès, logiciels) via vérification des logs/paramètres\n- Suivi des tickets et communication claire sur l’avancement",
    },
    {
        title: "Stage Informatique & Téléphonie",
        company: "MULTIGSM SERVICES",
        period: "Mai 2024 - Juillet 2024",
        description:
            "- Maintenance et diagnostic matériel (PC/smartphones) : tests, identification panne, réparation\n- Support technique client (hardware/software) et gestion des demandes\n- Amélioration continue : standardisation de checks de diagnostic pour accélérer le dépannage",
    },
    {
        title: "Employé Polyvalant",
        company: "Alfaprim",
        period: "Juin 2023 - Août 2023",
        description:
            "- Mise en rayon\n- Prise en charge des paiements en espèces, carte bancaire ou autre moyen de paiement.\n- Accueil et service client",
    },
];
