import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../common/Section";
import Button from "../common/Button";
import IconLink from "../common/IconLink";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = formRef.current;
    if (!form) return;

    emailjs
      .sendForm("service_contact", "template_contact", form, "q3drcsBGRqnBuJv3w")
      .then(() =>
        emailjs.sendForm("service_autoreply", "template_autoreply", form, "q3drcsBGRqnBuJv3w")
      )
      .then(() => setStatus("sent"))
      .catch(() => {
        setStatus("error");
        alert("Une erreur est survenue lors de l'envoi du message.");
      });
  };

  return (
    <Section id="contact" title="Contact" subtitle="Parlons de votre projet">
      <div className="grid md:grid-cols-2 gap-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 p-6 rounded-lg border border-white/10 bg-white/5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">Nom</label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded bg-black/30 border border-white/10 p-3 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded bg-black/30 border border-white/10 p-3 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded bg-black/30 border border-white/10 p-3 text-white"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            loading={status === "loading"}
          >
            {status === "sent" ? "Message envoyé ✅" : "Envoyer"}
          </Button>
        </form>

        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
          <ul className="space-y-2 text-gray-300">
            <li><span className="text-white">✉ Email:</span> sahraoui.abdeldjalil@outlook.com</li>
            <li><span className="text-white">✆ Téléphone:</span> +33 7 53 02 88 12</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <IconLink href="https://www.linkedin.com/in/abd-eldjalil-sahraoui/" label="LinkedIn">
              <FaLinkedin size={22} />
            </IconLink>
            <IconLink href="https://github.com/acinox-it" label="GitHub">
              <FaGithub size={22} />
            </IconLink>
            <IconLink href="https://twitter.com" label="Twitter">
              <FaTwitter size={22} />
            </IconLink>
            <IconLink href="https://www.youtube.com/@AcinoxIT" label="YouTube">
              <FaYoutube size={22} />
            </IconLink>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
