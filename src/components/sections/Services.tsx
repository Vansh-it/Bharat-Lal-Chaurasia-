import { motion } from "framer-motion";
import {
  LandPlot,
  HeartHandshake,
  ShieldAlert,
  Scale,
  FileText,
  Users,
  Banknote,
  Building2,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { services } from "../../data/content";

const iconMap: Record<string, React.ElementType> = {
  LandPlot,
  HeartHandshake,
  ShieldAlert,
  Scale,
  FileText,
  Users,
  Banknote,
  Building2,
};

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="हमारी सेवाएं"
          subtitle="हर कानूनी चुनौती का समाधान - विशेषज्ञता, अनुभव और समर्पण के साथ"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Scale;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-6 shadow-xl shadow-black/20 hover:border-gold-500/30 transition-colors"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-7 w-7 text-navy-900" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
