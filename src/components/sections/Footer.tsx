import { motion } from "framer-motion";
import { Scale, Phone, Mail, MapPin } from "lucide-react";
import { lawyerInfo, footerLinks, disclaimer } from "../../data/content";

interface SocialLink {
  icon: React.FC<{ className?: string }>;
  href: string;
  label: string;
}

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: FacebookIcon, href: "#", label: "फेसबुक" },
    { icon: TwitterIcon, href: "#", label: "ट्विटर" },
    { icon: LinkedinIcon, href: "#", label: "लिंक्डइन" },
    { icon: InstagramIcon, href: "#", label: "इंस्टाग्राम" },
  ];

  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950" />
      <div className="absolute inset-0 law-pattern opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600">
                <Scale className="h-6 w-6 text-navy-900" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  {lawyerInfo.shortName}
                </p>
                <p className="text-xs text-gold-400">अधिवक्ता</p>
              </div>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              लालगंज तहसील न्यायालय एवं मिर्जापुर जिला न्यायालय में अनुभवी अधिवक्ता।
              न्याय और आपके अधिकारों की रक्षा के लिए समर्पित।
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-gold-500 hover:text-navy-900 transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-5">
              महत्वपूर्ण <span className="text-gold-400">लिंक</span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-5">
              कानूनी <span className="text-gold-400">सेवाएं</span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-5">
              संपर्क <span className="text-gold-400">करें</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${lawyerInfo.phone.replace(/\s/g, "")}`}
                  className="text-white/80 hover:text-gold-400 transition-colors text-sm"
                >
                  {lawyerInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${lawyerInfo.email}`}
                  className="text-white/80 hover:text-gold-400 transition-colors text-sm"
                >
                  {lawyerInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  {lawyerInfo.address}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 section-divider" />

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl bg-white/8 border border-white/10 p-5 mb-8"
        >
          <p className="text-xs text-white/70 text-center leading-relaxed">
            <span className="font-semibold text-gold-400">अस्वीकरण:</span>{" "}
            {disclaimer}
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>
            © {currentYear} {lawyerInfo.name}. सर्वाधिकार सुरक्षित।
          </p>
          <p>
            न्याय, सत्य और निष्पक्षता के साथ
          </p>
        </div>
      </div>
    </footer>
  );
}
