import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../common/Section";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import { contactInfo } from "../../data/config";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = formRef.current;
    if (!form || !publicKey || !serviceId || !templateId) {
      setStatus("error");
      alert("Configuration EmailJS manquante.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
        if (autoReplyTemplateId) {
          return emailjs.sendForm(serviceId, autoReplyTemplateId, form, publicKey);
        }
      })
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
            <li><span className="text-white">✉ Email:</span> {contactInfo.email}</li>
            <li><span className="text-white">✆ Téléphone:</span> {contactInfo.phone}</li>
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
