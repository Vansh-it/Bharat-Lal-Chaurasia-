import { motion } from "framer-motion";
import { MapPin, Building2, Landmark, CircleDot } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { workingAreas, lawyerInfo } from "../../data/content";

export function WorkingArea() {
  return (
    <section id="working-area" className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="कार्यक्षेत्र"
          subtitle="लालगंज तहसील न्यायालय और मिर्जापुर जिला न्यायालय में सक्रिय कानूनी सेवाएं"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Cards */}
          <div className="space-y-6">
            {workingAreas.map((area, index) => {
              const IconComponent =
                index === 0 ? Building2 : index === 1 ? Landmark : MapPin;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex gap-5 rounded-2xl bg-white border border-gold-500/10 p-6 shadow-lg shadow-navy-900/5 hover:shadow-xl hover:border-gold-500/30 transition-all"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 text-gold-400 shadow-lg">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-navy-700 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-6 text-white shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gold-400 mb-1">
                    कार्यालय पता
                  </h4>
                  <p className="text-white/80">{lawyerInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 border border-gold-500/20">
              <div className="aspect-square max-h-[400px] sm:max-h-none bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 p-4 sm:p-8 flex items-center justify-center">
                {/* Stylized map representation */}
                <div className="relative w-full h-full max-w-md mx-auto">
                  {/* Outer border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/20" />

                  {/* Concentric circles - responsive sizing */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-full border border-gold-500/30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full border border-gold-500/40" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-full bg-gold-500/20 animate-pulse" />

                  {/* Location markers - spread apart on mobile */}
                  <div className="absolute top-[15%] sm:top-1/4 left-[15%] sm:left-1/4 flex flex-col items-center">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold-500 shadow-lg shadow-gold-500/30">
                      <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-navy-900" />
                    </div>
                    <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs whitespace-nowrap font-bold text-white bg-navy-900/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      लालगंज तहसील
                    </span>
                  </div>

                  <div className="absolute bottom-[15%] sm:bottom-1/4 right-[15%] sm:right-1/4 flex flex-col items-center">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold-500 shadow-lg shadow-gold-500/30">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-navy-900" />
                    </div>
                    <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs whitespace-nowrap font-bold text-white bg-navy-900/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      <span className="sm:hidden">मिर्जापुर</span>
                      <span className="hidden sm:inline">मिर्जापुर जिला न्यायालय</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-3 sm:bottom-8 sm:left-8 flex items-center gap-1.5 sm:gap-2 text-white/70 text-[10px] sm:text-sm">
                    <CircleDot className="h-3 w-3 sm:h-4 sm:w-4 text-gold-400" />
                    <span>उत्तर प्रदेश</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
