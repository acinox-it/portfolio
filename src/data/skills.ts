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
  SiYaml,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGo,
  SiGnubash,
} from "react-icons/si";
import { FaAws, FaWindows, FaNetworkWired, FaServer, FaShieldAlt, FaLock } from "react-icons/fa";

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
    category: "Administration Systèmes",
    skills: [
      { name: "Windows Server", icon: FaWindows },
      { name: "Linux", icon: SiLinux },
      { name: "Windows 11/10", icon: FaWindows },
      { name: "Ubuntu/Debian", icon: SiLinux },
    ],
  },
  {
    category: "Réseaux & Sécurité",
    skills: [
      { name: "TCP/IP", icon: FaNetworkWired },
      { name: "VLAN", icon: FaNetworkWired },
      { name: "Routage", icon: FaNetworkWired },
      { name: "VPN", icon: FaLock },
      { name: "Pare-feu", icon: FaShieldAlt },
      { name: "Cisco", icon: SiCisco },
      { name: "Wireshark", icon: SiWireshark },
      { name: "pfSense", icon: SiPfsense },
    ],
  },
  {
    category: "Infrastructure & Virtualisation",
    skills: [
      { name: "Proxmox", icon: SiProxmox },
      { name: "Nginx", icon: SiNginx },
      { name: "Nginx Proxy Manager", icon: SiNginxproxymanager },
      { name: "Serveurs", icon: FaServer },
    ],
  },
  {
    category: "Automatisation & Scripting",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Bash", icon: SiGnubash },
      { name: "YAML", icon: SiYaml },
      { name: "Go", icon: SiGo },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "ELK", icon: SiLogstash },
      { name: "AWS", icon: FaAws },
      { name: "EC2", icon: FaAws },
      { name: "S3", icon: FaAws },
      { name: "IAM", icon: FaAws },
    ],
  },
  {
    category: "En apprentissage",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
    ],
  },
];