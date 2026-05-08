import { motion } from 'framer-motion';
import { Award, Building2, PieChart, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolio';

const iconMap = { Award, Building2, PieChart, Globe };

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="05 — Credentials"
          title={
            <>
              Selected designations and{' '}
              <span className="font-display italic gold-text">qualifications</span>.
            </>
          }
          description="A deliberate, compounding investment in technical mastery — financial modeling, valuation, real estate investment, and analytics."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const Icon = iconMap[cert.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="card-luxe group relative p-7 md:p-8 lg:min-h-[280px] flex flex-col"
    >
      {/* Gold corner ribbon */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-px -right-px w-px h-10 bg-gold-gradient" />
        <div className="absolute -top-px -right-px w-10 h-px bg-gold-gradient" />
      </div>

      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gold-gradient text-white shadow-gold-glow group-hover:scale-110 transition-transform duration-500">
          <Icon size={18} strokeWidth={1.5} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
              {cert.category}
            </span>
            <span className="font-mono text-[10px] text-ink-400 dark:text-ink-500">
              {cert.year}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-ink-900 dark:text-ink-50 leading-tight">
            {cert.name}
          </h3>
          <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
            {cert.fullName}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5 border-t border-ink-100 dark:border-gold-500/10">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
          {cert.issuer}
        </span>
      </div>
    </motion.div>
  );
}
