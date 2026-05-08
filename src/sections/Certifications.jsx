import { motion } from 'framer-motion';
import {
  Award,
  TrendingUp,
  Compass,
  BarChart3,
  Building2,
  Calculator,
  LineChart,
  FileSpreadsheet,
  CheckCircle2,
  PieChart,
  Globe,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolio';

const iconMap = {
  Award,
  TrendingUp,
  Compass,
  BarChart3,
  Building2,
  Calculator,
  LineChart,
  FileSpreadsheet,
  CheckCircle2,
  PieChart,
  Globe,
};

export default function Certifications() {
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="05 — Credentials"
          title={
            <>
              Eleven certifications.{' '}
              <span className="font-display italic gold-text">One discipline.</span>
            </>
          }
          description="A deliberate, compounding investment in technical mastery — financial modeling, valuation, real estate, strategy, and analytics."
        />

        {/* Featured row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {featured.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} featured />
          ))}
        </div>

        {/* Standard cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {others.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index, featured = false }) {
  const Icon = iconMap[cert.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`card-luxe group relative ${
        featured
          ? 'p-7 md:p-8 lg:min-h-[260px]'
          : 'p-5 md:p-6 min-h-[160px]'
      } flex flex-col`}
    >
      {/* Premium gold corner ribbon for featured */}
      {featured && (
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
          <div className="absolute -top-px -right-px w-px h-10 bg-gold-gradient" />
          <div className="absolute -top-px -right-px w-10 h-px bg-gold-gradient" />
        </div>
      )}

      <div className={`flex ${featured ? 'flex-col items-start gap-5' : 'items-start gap-3'}`}>
        <div
          className={`flex items-center justify-center rounded-xl ${
            featured
              ? 'h-12 w-12 bg-gold-gradient text-white shadow-gold-glow'
              : 'h-9 w-9 border border-gold-500/30 text-gold-600 dark:text-gold-300 group-hover:border-gold-400'
          } transition-all duration-500`}
        >
          <Icon size={featured ? 18 : 14} strokeWidth={1.5} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300 mb-1.5">
            {cert.category}
          </div>
          <h3
            className={`font-display ${
              featured ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'
            } text-ink-900 dark:text-ink-50 leading-tight`}
          >
            {cert.name}
          </h3>
          {featured && (
            <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
              {cert.fullName}
            </p>
          )}
          {!featured && (
            <p className="mt-1 text-xs text-ink-500 dark:text-ink-400 line-clamp-2">
              {cert.fullName}
            </p>
          )}
        </div>
      </div>

      <div
        className={`${
          featured ? 'mt-auto pt-5' : 'mt-3 pt-3'
        } border-t border-ink-100 dark:border-gold-500/10`}
      >
        <span className="font-mono text-[10px] text-ink-500 dark:text-ink-400">
          {cert.issuer}
        </span>
      </div>
    </motion.div>
  );
}
