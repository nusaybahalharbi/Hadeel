import { motion } from 'framer-motion';
import { Sparkles, Compass, BookOpen, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { aboutSummary } from '../data/portfolio';

const valueIcons = {
  'Analytical Rigor': Sparkles,
  'Strategic Vision': Compass,
  'Continuous Mastery': BookOpen,
  'Executive Communication': MessageSquare,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="01 — About"
          title={
            <>
              A finance professional shaping{' '}
              <span className="font-display italic gold-text">capital decisions</span> in the Kingdom.
            </>
          }
        />

        {/* Editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: pull-quote + initial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative card-luxe p-10 md:p-12 h-full">
              <div className="absolute top-6 right-8 font-display text-[160px] leading-none text-gold-500/10 dark:text-gold-400/10 select-none">
                "
              </div>
              <div className="relative">
                <div className="font-display text-7xl md:text-8xl gold-text leading-none mb-6">
                  H.
                </div>
                <p className="font-display italic text-xl md:text-2xl text-ink-800 dark:text-ink-100 leading-relaxed text-balance">
                  {aboutSummary.intro}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold-gradient" />
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                    Personal Brand Statement
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: prose */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutSummary.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-ink-600 dark:text-ink-300 leading-relaxed text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-gold-gradient" />
            <span className="eyebrow">Core Values</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutSummary.values.map((v, i) => {
              const Icon = valueIcons[v.title] || Sparkles;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-luxe p-7 group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-11 w-11 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-300 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] text-ink-400 dark:text-ink-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
