import IconLink from "../common/IconLink";
import { socialLinks } from "../../data/config";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  { href: socialLinks.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: socialLinks.github, label: "GitHub", icon: FaGithub },
  { href: socialLinks.twitter, label: "Twitter", icon: FaTwitter },
  { href: socialLinks.youtube, label: "YouTube", icon: FaYoutube },
] as const;

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <IconLink key={link.label} href={link.href} label={link.label}>
          <link.icon size={22} />
        </IconLink>
      ))}
    </div>
  );
};

export default SocialLinks;
