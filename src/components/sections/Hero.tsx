import { motion } from "framer-motion";
import { Phone, ChevronDown, Scale, Gavel, BookOpen, Shield } from "lucide-react";
import { lawyerInfo } from "../../data/content";

export function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-pattern overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 law-pattern opacity-50" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-maroon-700/10 rounded-full blur-3xl" />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] text-gold-400/20 hidden lg:block"
      >
        <Scale className="h-24 w-24" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[10%] text-gold-400/15 hidden lg:block"
      >
        <Gavel className="h-20 w-20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[8%] text-white/10 hidden xl:block"
      >
        <BookOpen className="h-16 w-16" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-2 mb-6"
            >
              <Shield className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium text-gold-400">
                लालगंज तहसील एवं मिर्जापुर जिला न्यायालय
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            >
              {lawyerInfo.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient-gold">
                {lawyerInfo.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xl md:text-2xl font-semibold text-gold-400"
            >
              {lawyerInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0"
            >
              {lawyerInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={`tel:${lawyerInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-bold text-navy-900 shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 transition-all pulse-gold"
              >
                <Phone className="h-5 w-5" />
                संपर्क करें
              </a>
              <button
                onClick={() => handleScrollTo("#about")}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all"
              >
                अधिक जानें
                <ChevronDown className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {[
                "6+ वर्ष अनुभव",
                "50+ सफल मामले",
                "500+ संतुष्ट मुवक्किल",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-none">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-600/20 blur-2xl scale-110" />

              {/* Avatar circle */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-1 shadow-2xl shadow-gold-500/20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center overflow-hidden border-4 border-navy-900">
                  <div className="text-center">
                    <Scale className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 text-gold-400 mx-auto mb-3 sm:mb-4" />
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">न्याय</p>
                    <p className="text-xs sm:text-sm text-gold-400 mt-1">सत्यमेव जयते</p>
                  </div>
                </div>
              </div>

              {/* Decorative badges - hidden on very small screens, repositioned on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-2 sm:-right-4 top-1/4 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              >
                <p className="text-lg sm:text-2xl font-bold text-gold-400">6+</p>
                <p className="text-[10px] sm:text-xs text-white/80">वर्षों का अनुभव</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -left-2 sm:-left-4 bottom-1/4 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              >
                <p className="text-lg sm:text-2xl font-bold text-gold-400">50+</p>
                <p className="text-[10px] sm:text-xs text-white/80">सफल मामले</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
