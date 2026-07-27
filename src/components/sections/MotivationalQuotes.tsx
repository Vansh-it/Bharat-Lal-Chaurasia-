import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { motivationalQuotes } from "../../data/content";

export function MotivationalQuotes() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy-800 via-navy-900 to-maroon-800 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="प्रेरणादायक विचार"
          subtitle="न्याय, सत्य और कानून की शक्ति पर आधारित विचार"
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motivationalQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass p-6 md:p-8 hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-4 right-4 text-gold-400/20 group-hover:text-gold-400/40 transition-colors">
                <Sparkles className="h-6 w-6" />
              </div>

              <Quote className="h-10 w-10 text-gold-400/30 mb-4" />

              <p className="text-lg font-medium text-white leading-relaxed mb-4">
                “{quote.text}”
              </p>

              {quote.author && (
                <p className="text-sm text-gold-400 font-medium">
                  — {quote.author}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
