import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block"
      >
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
          <span className="text-gold-500">।</span>
        </h2>
        <div className={`mt-3 h-1 w-24 rounded-full ${centered ? "mx-auto" : ""} bg-gradient-to-r from-gold-500 to-gold-400`} />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 max-w-2xl text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-navy-700"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
