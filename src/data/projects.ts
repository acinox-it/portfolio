import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    title: "Banking App",
    description: "Application bancaire moderne avec gestion des comptes, transactions et sécurité renforcée.",
    badge: "Finance",
    demo: "https://github.com/acinox-it/banking-app", // lien vers démo ou repo GitHub
    image: "/banking.ico",
  },
  {
    title: "Employee Manager (C++)",
    description: "Projet en C++ pour la gestion des employés, avec suivi des horaires et organisation interne.",
    badge: "C++",
    demo: "https://github.com/acinox-it/EmployeeManager", // mets ton vrai lien GitHub
    image: "employee.ico",
  },
  {
    title: "Weather App (Incoming)",
    description: "Application météo interactive avec prévisions locales et visualisations graphiques.",
    badge: "App",
    demo: "#", // lien à venir
    image: "/weather.ico",
  },
];
