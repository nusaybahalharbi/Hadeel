import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="03 — Selected Work"
          title={
            <>
              Models, analyses, and{' '}
              <span className="font-display italic gold-text">decisions</span> that move capital.
            </>
          }
          description="A representative sample of the analytical work behind investment, real estate, and corporate finance mandates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group card-luxe p-7 md:p-8 flex flex-col h-full cursor-default"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                  {p.category}
                </div>
                <div className="h-9 w-9 rounded-full border border-ink-200 dark:border-gold-500/20 flex items-center justify-center text-ink-500 dark:text-ink-400 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <h3 className="font-display text-2xl text-ink-900 dark:text-ink-50 leading-tight mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed flex-1">
                {p.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-ink-100 dark:border-gold-500/10 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full text-ink-500 dark:text-ink-400 bg-ink-100/60 dark:bg-navy-900/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
