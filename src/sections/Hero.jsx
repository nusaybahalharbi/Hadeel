import { motion } from 'framer-motion';
import { ArrowDown, Download, Linkedin, MapPin } from 'lucide-react';
import { profile, heroStats } from '../data/portfolio';
import Counter from '../components/Counter';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16"
    >
      <div className="container-luxe">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-gold-gradient" />
          <span className="eyebrow">Personal Portfolio · 2025</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
            <MapPin size={11} />
            {profile.location}
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
            }}
            className="h-display text-[14vw] sm:text-[10vw] lg:text-[7.2rem] xl:text-[8.5rem] leading-[0.95] text-ink-900 dark:text-ink-50"
          >
            {['Hadeel', 'Alharbi'].map((word, i) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { y: 80, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="block"
              >
                {word}
                {i === 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="font-display italic font-normal text-3xl md:text-4xl align-top ml-3 gold-text"
                  >
                    , {profile.credentials}
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle / role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-4xl"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300 mb-3">
                Currently
              </div>
              <div className="font-display text-2xl md:text-3xl text-ink-800 dark:text-ink-100 leading-tight">
                {profile.title} <span className="text-ink-400 dark:text-ink-500">at</span>{' '}
                <span className="italic">{profile.company}</span>
              </div>
              <div className="mt-2 text-base text-ink-600 dark:text-ink-300">
                {profile.subtitle}
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="mt-12 max-w-2xl font-display italic text-xl md:text-2xl text-ink-700 dark:text-ink-200 leading-relaxed text-balance"
          >
            "{profile.tagline}"
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Start a Conversation
              <ArrowDown size={14} className="rotate-[-45deg]" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="btn-ghost"
            >
              <Download size={14} /> Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 pt-10 border-t border-ink-200/60 dark:border-gold-500/10"
        >
          {heroStats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-500 dark:text-ink-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
