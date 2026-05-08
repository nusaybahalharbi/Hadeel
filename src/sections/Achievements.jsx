import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap, Star, Medal, BookOpen } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/portfolio';

const iconMap = { Award, Trophy, GraduationCap, Star, Medal, BookOpen };

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="07 — Recognition"
          title={
            <>
              Milestones along the way to{' '}
              <span className="font-display italic gold-text">mastery</span>.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-luxe p-7 md:p-8 group relative overflow-hidden"
              >
                {/* Subtle gold sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center text-white shadow-gold-glow group-hover:scale-110 transition-transform duration-500">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] text-ink-400 dark:text-ink-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-ink-900 dark:text-ink-50 leading-tight mb-3">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {a.description}
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
