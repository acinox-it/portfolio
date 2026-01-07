import type { IconType } from "react-icons";
import {
  SiLinux,
  SiCisco,
  SiWireshark,
  SiPfsense,
  SiProxmox,
  SiDocker,
  SiNginx,
  SiNginxproxymanager,
  SiGit,
  SiGithubactions,
  SiLogstash,
  SiPython,
  SiRust,
  SiTypescript,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiAmazon,
  SiGo,
  SiGnubash
} from "react-icons/si";
import {GiNetworkBars } from "react-icons/gi";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Systèmes & Réseaux",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Networking", icon: GiNetworkBars },
      { name: "Cisco", icon: SiCisco },
      { name: "Wireshark", icon: SiWireshark },
      { name: "pfSense", icon: SiPfsense },
      { name: "Proxmox", icon: SiProxmox }
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
      { name: "Nginx Proxy Manager", icon: SiNginxproxymanager },
      { name: "Git", icon: SiGit },
      
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Logstash", icon: SiLogstash },
      { name: "Bash", icon: SiGnubash }
    ],
  },
  {
    category: "Langages (bases)",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Rust", icon: SiRust },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Apprentissage 2026 (en cours)",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "AWS", icon: SiAmazon },
      { name: "Go", icon: SiGo },
    ],
  },
];
