import { motion } from "framer-motion";
import { Scale, Award, BookOpen, Users } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { aboutContent } from "../../data/content";

const highlights = [
  {
    icon: Award,
    title: "अनुभव",
    description: "6+ वर्षों का कानूनी अनुभव",
  },
  {
    icon: Scale,
    title: "विशेषज्ञता",
    description: "भारतीय कानून में गहरी समझ",
  },
  {
    icon: BookOpen,
    title: "ज्ञान",
    description: "तहसील और जिला न्यायालय में विशेष पहचान",
  },
  {
    icon: Users,
    title: "सेवा",
    description: "संतुष्ट मुवक्किल",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full law-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="परिचय"
          subtitle={aboutContent.subheading}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-12 shadow-2xl shadow-navy-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon-700/10 rounded-full blur-3xl" />

              <div className="relative text-center">
                <div className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center">
                    <Scale className="h-16 w-16 text-gold-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  अधिवक्ता भरत लाल चौरसिया
                </h3>
                <p className="text-gold-400 font-medium mb-6">
                  अनुभवी अधिवक्ता एवं कानूनी सलाहकार
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "अनुभव", value: "6+ वर्ष" },
                    { label: "मामले", value: "50+" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-white/5 border border-white/10 p-4"
                    >
                      <p className="text-2xl font-bold text-gold-400">{item.value}</p>
                      <p className="text-sm text-white/70">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-base md:text-lg text-navy-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gold-500/10 shadow-sm hover:shadow-md hover:border-gold-500/30 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">{item.title}</h4>
                    <p className="text-sm text-navy-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
