import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  FileText,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { lawyerInfo } from "../../data/content";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "फोन नंबर",
      value: lawyerInfo.phone,
      href: `tel:${lawyerInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "ईमेल",
      value: lawyerInfo.email,
      href: `mailto:${lawyerInfo.email}`,
    },
    {
      icon: MapPin,
      label: "पता",
      value: lawyerInfo.address,
      href: "#working-area",
    },
    {
      icon: Clock,
      label: "कार्यालय समय",
      value: lawyerInfo.officeHours,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="संपर्क करें"
          subtitle="किसी भी कानूनी सहायता के लिए आज ही संपर्क करें"
          light
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                संपर्क <span className="text-gold-400">जानकारी</span>
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gold-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base text-white/90 hover:text-gold-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base text-white/90">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${lawyerInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp पर संदेश भेजें
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/20"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                संदेश भेजें
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    आपका नाम
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="अपना पूरा नाम दर्ज करें"
                      className="w-full rounded-xl border border-navy-900/10 bg-cream-50 pl-12 pr-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    फोन नंबर
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="अपना फोन नंबर दर्ज करें"
                      className="w-full rounded-xl border border-navy-900/10 bg-cream-50 pl-12 pr-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    विषय
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-navy-900/10 bg-cream-50 pl-12 pr-4 py-3 text-navy-900 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all appearance-none"
                    >
                      <option value="">विषय चुनें</option>
                      <option value="land">भूमि विवाद</option>
                      <option value="family">पारिवारिक मामला</option>
                      <option value="criminal">आपराधिक मामला</option>
                      <option value="civil">दीवानी मामला</option>
                      <option value="fraud">धोखाधड़ी / आर्थिक अपराध</option>
                      <option value="cheque">चेक बाउंस</option>
                      <option value="consumer">उपभोक्ता संरक्षण</option>
                      <option value="other">अन्य</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-navy-800"
                  >
                    संदेश
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="अपना संदेश यहाँ लिखें..."
                    className="w-full rounded-xl border border-navy-900/10 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-4 text-base font-bold text-navy-900 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.02] transition-all"
                >
                  {submitted ? (
                    "संदेश भेजा गया"
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      संदेश भेजें
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
