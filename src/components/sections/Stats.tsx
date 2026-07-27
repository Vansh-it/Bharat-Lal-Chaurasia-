import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/content";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp({
    end: value,
    duration: 2500,
    delay: delay,
    enabled: isInView,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/20 p-6 sm:p-8 text-center shadow-xl shadow-black/20 hover:border-gold-500/40 transition-colors"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      <div className="relative">
        <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient-gold">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-base md:text-lg font-medium text-white/80">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900"
          >
            हमारी <span className="text-gradient-gold">उपलब्धियाँ</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="mt-3 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-gold-500 to-gold-400"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-navy-700 max-w-2xl mx-auto"
          >
            वर्षों की मेहनत, संतुष्ट मुवक्किल और सफल मामलों की गाथा
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
