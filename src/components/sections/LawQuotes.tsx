import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { lawQuotes } from "../../data/content";

export function LawQuotes() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % lawQuotes.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + lawQuotes.length) % lawQuotes.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="भारतीय कानून के उद्धरण"
          subtitle="संविधान और न्याय के सिद्धांत जो हमारी कानूनी यात्रा को प्रेरित करते हैं"
        />

        <div className="relative">
          {/* Main quote card */}
          <div className="relative min-h-[260px] sm:min-h-[240px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-6 sm:p-8 md:p-12 shadow-2xl shadow-navy-900/20"
              >
                <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-gold-500/20" />

                <div className="relative flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
                    “{lawQuotes[current].text}”
                  </p>
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                  <p className="mt-4 text-gold-400 font-medium">
                    — {lawQuotes[current].source}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-gold-500/20 text-navy-900 hover:bg-navy-900 hover:text-gold-400 hover:border-gold-500 transition-colors shadow-md"
              aria-label="पिछला उद्धरण"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {lawQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-gradient-to-r from-gold-500 to-gold-600"
                      : "w-2.5 bg-navy-900/20 hover:bg-navy-900/40"
                  }`}
                  aria-label={`उद्धरण ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-gold-500/20 text-navy-900 hover:bg-navy-900 hover:text-gold-400 hover:border-gold-500 transition-colors shadow-md"
              aria-label="अगला उद्धरण"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
