import type { IconType } from "react-icons";
import {
  SiReact,SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiExpress, SiAdonisjs, SiNestjs,
  SiMysql, SiPostgresql, SiMongodb,
  SiQemu, SiDocker, SiKubernetes,
  SiC, SiEspressif,
  SiNginx, SiNginxproxymanager, SiOpenvpn, SiGnubash, SiProxmox,
  SiGit, SiGithub, SiJsonwebtokens,SiPostman, SiN8N, SiGithubactions
} from "react-icons/si";
import { GiElectric, GiNetworkBars } from "react-icons/gi";

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
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Html", icon: SiHtml5 },
      { name: "Css", icon: SiCss3 },
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Express" , icon: SiExpress},
      { name: "Adonis" , icon: SiAdonisjs},
      { name: "Nest" , icon: SiNestjs},

    ],
  },
  {
  category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Virtualisation",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes (K8s)", icon: SiKubernetes },
      { name: "KVM / QEMU", icon: SiQemu },
    ],
  },
  {
    category: "Développement embarqué",
    skills: [
      { name: "ESP32", icon: SiEspressif },
      { name: "C", icon: SiC },
      { name: "Électronique", icon: GiElectric },
      
    ],
  },
  {
    category: "Système & Réseaux",
    skills: [
      { name: "Networking", icon: GiNetworkBars },
      { name: "Proxmox", icon: SiProxmox },
      { name: "Nginx", icon: SiNginx },
      { name: "Nginx Proxy Manager", icon: SiNginxproxymanager },
      { name: "OpenVpn", icon: SiOpenvpn },
      { name: "Bash", icon: SiGnubash },  
    ],
  },
  {
    category: "Outils",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jwt", icon: SiJsonwebtokens },
      { name: "N8n", icon: SiN8N },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
