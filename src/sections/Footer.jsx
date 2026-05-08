import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-200/60 dark:border-gold-500/10 py-14 md:py-20">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          {/* Brand column */}
          <div className="md:col-span-6">
            <div className="font-display text-5xl md:text-7xl gold-text leading-none">
              {profile.name}
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
              {profile.credentials} · {profile.title}
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-600 dark:text-ink-300 italic font-display">
              "{profile.tagline}"
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-ink-500 dark:text-ink-400 mb-4">
              Connect
            </div>
            <div className="space-y-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 md:text-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 group text-sm text-ink-700 dark:text-ink-200 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest2">
                Back to Top
              </span>
              <span className="h-9 w-9 rounded-full border border-ink-200 dark:border-gold-500/20 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/5 transition-all">
                <ArrowUp size={13} />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-200/60 dark:border-gold-500/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-500 dark:text-ink-400">
          <div>© {year} {profile.name}. All rights reserved.</div>
          <div className="font-mono uppercase tracking-widest2 text-[10px]">
            Crafted in {profile.location} · Designed for the long view
          </div>
        </div>
      </div>
    </footer>
  );
}
