import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 bg-ink-50/40 dark:bg-navy-950/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="02 — Experience"
          title={
            <>
              A trajectory <span className="font-display italic gold-text">forged in finance</span>.
            </>
          }
          description="Four chapters across investment, healthcare administration, and corporate finance — each one deepening a discipline of analysis, ownership, and strategic delivery."
        />

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-20">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="relative h-3 w-3">
                      <div className="absolute inset-0 rounded-full bg-gold-gradient" />
                      <div className="absolute -inset-2 rounded-full border border-gold-500/30 animate-pulse" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? 'md:pr-[calc(50%+2.5rem)]' : 'md:pl-[calc(50%+2.5rem)]'
                    } w-full`}
                  >
                    <div className="card-luxe p-7 md:p-9 group">
                      {/* Period badge */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                          {exp.period}
                        </span>
                        <span className="font-mono text-[10px] text-ink-400 dark:text-ink-500">
                          0{i + 1} / 0{experience.length}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl text-ink-900 dark:text-ink-50 leading-tight">
                        {exp.role}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-600 dark:text-ink-300">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} className="text-gold-500" />
                          <span className="font-medium">{exp.company}</span>
                        </span>
                        <span className="text-ink-300 dark:text-ink-600">·</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-gold-500" />
                          {exp.location}
                        </span>
                      </div>

                      <div className="mt-3 inline-block px-3 py-1 rounded-full bg-gold-500/8 dark:bg-gold-500/10 text-[11px] font-mono uppercase tracking-wider text-gold-700 dark:text-gold-300 border border-gold-500/15">
                        {exp.type}
                      </div>

                      <ul className="mt-6 space-y-3">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                            <ArrowUpRight
                              size={14}
                              className="mt-0.5 flex-shrink-0 text-gold-500"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
