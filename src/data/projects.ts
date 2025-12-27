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
    title: "CandyDex",
    description: "Application web pour cataloguer et gérer une collection de pokemons, avec fonctionnalités de recherche et filtres.",
    badge: "React + AdonisJS",
    demo: "https://candydex.acinox.ovh/", // mets ton vrai lien GitHub
    image: "/candydex.jpg",
  },
  {
    title: "Book Wiki",
    description: "Application web pour cataloguer et gérer une collection de livres, avec fonctionnalités de recherche avancée.",
    badge: "React + Express",
    demo: "https://bookwiki.acinox.ovh/", // lien à venir
    image: "/bookwiki.png",
  },
];
