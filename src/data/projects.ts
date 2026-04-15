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
    title: "Chatbot IA",
    description: "Chatbot intelligent alimenté par l'IA, capable de répondre aux questions et d'interagir avec les utilisateurs de manière contextuelle.",
    badge: "IA & Python",
    demo: "https://github.com/djalil45800/chatbot",
    image: "/chatbot.svg",
  },
  {
    title: "Book Wiki",
    description: "Application web pour cataloguer et gérer une collection de livres, avec fonctionnalités de recherche avancée.",
    badge: "React + Express",
    demo: "https://bookwiki.acinox.ovh/", // lien à venir
    image: "/bookwiki.png",
  },
];
