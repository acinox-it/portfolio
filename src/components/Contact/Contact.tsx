import Section from "../common/Section";
import SocialLinks from "../common/SocialLinks";
import { contactInfo } from "../../data/config";

const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Parlons de votre projet">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold text-brand-orange mb-4">Me contacter</h3>
          <p className="text-gray-300 mb-6">
            N'hésitez pas à me contacter pour toute question ou proposition.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Contact depuis le portfolio`}
            className="inline-flex items-center gap-2 text-brand-orange hover:underline"
          >
            ✉ {contactInfo.email}
          </a>
          <div className="mt-4 text-gray-300">
            ✆ {contactInfo.phone}
          </div>
        </div>

        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold text-brand-orange mb-4">Suivez-moi</h3>
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
};

export default Contact;