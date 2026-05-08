import SectionTitle from "@/components/ui-fx/SectionTitle";
import { Reveal } from "@/components/ui-fx/Reveal";
import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react";

const CONTACTS = {
  email: "prajapatija7in@gmail.com",
  phone: "+91 90987 77505",
  phoneRaw: "+919098777505",
  linkedin: "https://www.linkedin.com/in/ja7in/",
  instagram: "https://www.instagram.com/withja7in/",
  github: "https://github.com/JA7IN",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:py-32 max-w-5xl mx-auto"
      data-testid="contact-section"
    >
      <SectionTitle title="Get in Touch" />

      <Reveal variant="up">
        <div className="flex flex-col items-center gap-8">
          {/* Social icon row (matches UI KIT) */}
          <div className="flex justify-center gap-4">
            {[
              {
                href: CONTACTS.instagram,
                Icon: Instagram,
                label: "Instagram",
                test: "contact-instagram",
              },
              {
                href: CONTACTS.github,
                Icon: Github,
                label: "GitHub",
                test: "contact-github",
              },
              {
                href: CONTACTS.linkedin,
                Icon: Linkedin,
                label: "LinkedIn",
                test: "contact-linkedin",
              },
            ].map(({ href, Icon, label, test }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-12 w-12 rounded-full border border-white/15 bg-white/[0.04] grid place-items-center text-white/75 hover:text-white hover:bg-white/10 hover:border-white/30 transition lift"
                data-testid={test}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Email & Phone row — UI KIT style */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-2">
            <a
              href={`mailto:${CONTACTS.email}`}
              className="flex items-center gap-3 text-white/85 hover:text-white transition link-underline"
              data-testid="contact-email-link"
            >
              <Mail className="h-4 w-4 text-white/55" />
              <span className="text-sm md:text-base tracking-wide">
                {CONTACTS.email}
              </span>
            </a>
            <a
              href={`tel:${CONTACTS.phoneRaw}`}
              className="flex items-center gap-3 text-white/85 hover:text-white transition link-underline"
              data-testid="contact-phone-link"
            >
              <Phone className="h-4 w-4 text-white/55" />
              <span className="text-sm md:text-base tracking-wide">
                {CONTACTS.phone}
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
