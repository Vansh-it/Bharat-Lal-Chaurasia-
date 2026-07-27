import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { testimonials } from "../../data/content";

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 law-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="मुवक्किलों की राय"
          subtitle="हमारी सेवाओं से प्रभावित मुवक्किलों के शब्द"
          light
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-6 md:p-8 shadow-xl shadow-black/20 hover:border-gold-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                “{testimonial.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600">
                  <User className="h-6 w-6 text-navy-900" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gold-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
