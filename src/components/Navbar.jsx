import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sun, Moon, Menu, X, Linkedin } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useScrollPosition, useActiveSection } from '../hooks';

export default function Navbar({ theme, toggleTheme }) {
  const scrolled = useScrollPosition();
  const active = useActiveSection(navLinks.map((l) => l.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-gold-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxe flex h-16 md:h-20 items-center justify-between">
          {/* Monogram */}
          <button
            onClick={() => handleNav('hero')}
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border border-gold-500/40 transition-all group-hover:border-gold-400" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-medium gold-text">
                HA
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-medium tracking-tight text-ink-900 dark:text-ink-100">
                {profile.name}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                {profile.credentials}
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-ink-600 dark:text-ink-300 transition-colors hover:text-ink-900 dark:hover:text-ink-50"
              >
                {link.label}
                {active === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-x-3 bottom-0 h-px bg-gold-gradient"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 dark:border-gold-500/20 text-ink-700 dark:text-ink-200 transition-all hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <button
              onClick={toggleTheme}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-200 dark:border-gold-500/20 text-ink-700 dark:text-ink-200 transition-all hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-200 dark:border-gold-500/20 text-ink-700 dark:text-ink-200"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-navy-950 border-l border-gold-500/10 p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="font-display text-xl gold-text">HA</div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-200 dark:border-gold-500/20"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    onClick={() => handleNav(link.id)}
                    className="block w-full text-left py-4 font-display text-3xl text-ink-800 dark:text-ink-100 border-b border-ink-100 dark:border-gold-500/10 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300 mr-3">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-10">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost w-full justify-center"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
