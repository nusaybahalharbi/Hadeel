import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { education, languages } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-40 bg-ink-50/40 dark:bg-navy-950/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="06 — Education"
          title={
            <>
              Foundations,{' '}
              <span className="font-display italic gold-text">honors</span>, and languages.
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education timeline */}
          <div className="lg:col-span-8 space-y-5">
            {education.map((ed, i) => (
              <motion.div
                key={ed.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card-luxe p-8 md:p-10 group"
              >
                <div className="flex items-start gap-5">
                  <div className="hidden md:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-gradient text-white shadow-gold-glow">
                    <GraduationCap size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                        {ed.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                        <Award size={11} className="text-gold-500" />
                        {ed.distinction}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-ink-900 dark:text-ink-50 leading-tight">
                      {ed.degree}
                    </h3>
                    <div className="mt-1 text-base text-ink-700 dark:text-ink-200 italic">
                      {ed.institution}
                    </div>
                    <p className="mt-4 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                      {ed.notes}
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-gold-500/8 dark:bg-gold-500/10 text-[11px] font-mono uppercase tracking-wider text-gold-700 dark:text-gold-300 border border-gold-500/15">
                      {ed.activities}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="card-luxe p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-gold-gradient" />
                <span className="eyebrow">Languages</span>
              </div>

              <div className="space-y-7">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <div className="font-display text-xl text-ink-900 dark:text-ink-50">
                          {lang.name}
                        </div>
                        <div className="font-display italic text-sm text-gold-600 dark:text-gold-300">
                          {lang.native}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-ink-500 dark:text-ink-400 text-right max-w-[140px]">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-[3px] bg-ink-100 dark:bg-navy-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                        className="h-full bg-gold-gradient rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
