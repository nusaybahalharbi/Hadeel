import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, ArrowUpRight, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a mailto with the user's content (works without backend)
    const body = `From: ${form.name} <${form.email}>%0D%0A%0D%0A${encodeURIComponent(
      form.message
    )}`;
    window.location.href = `mailto:${profile.email}?subject=Portfolio%20Inquiry&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-ink-50/40 dark:bg-navy-950/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="08 — Let's Talk"
          title={
            <>
              Open to{' '}
              <span className="font-display italic gold-text">conversations</span> that move ideas forward.
            </>
          }
          description="Investment opportunities, collaborative projects, mentorship — if you have a thoughtful proposition, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="/in/hadeelalraddadi"
              href={profile.linkedin}
              external
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={profile.location}
            />

            <div className="card-luxe p-7 md:p-8 mt-8">
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300 mb-3">
                Currently Open To
              </div>
              <ul className="space-y-2.5 text-sm text-ink-700 dark:text-ink-200">
                {[
                  'Investment & corporate finance opportunities',
                  'Real estate development advisory',
                  'Strategic finance and modeling collaborations',
                  'Speaking, mentorship, and knowledge-sharing',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 card-luxe p-7 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              required
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-xs text-ink-500 dark:text-ink-400 max-w-xs">
                Your message will open in your default email client — keeping things direct and
                private.
              </p>
              <button type="submit" className="btn-primary group">
                {sent ? (
                  <>
                    <Check size={14} /> Message Drafted
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const Tag = href ? 'a' : 'div';
  const props = href
    ? {
        href,
        ...(external && { target: '_blank', rel: 'noreferrer noopener' }),
      }
    : {};

  return (
    <Tag
      {...props}
      className="card-luxe group p-5 flex items-center gap-4 cursor-pointer"
    >
      <div className="h-11 w-11 flex-shrink-0 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-300 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-500">
        <Icon size={15} strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-500 dark:text-ink-400 mb-0.5">
          {label}
        </div>
        <div className="text-sm text-ink-900 dark:text-ink-50 truncate group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight
          size={14}
          className="text-ink-400 dark:text-ink-500 group-hover:text-gold-600 dark:group-hover:text-gold-300 group-hover:rotate-45 transition-all duration-500 flex-shrink-0"
        />
      )}
    </Tag>
  );
}

function Field({ label, value, onChange, type = 'text', textarea, required }) {
  const Comp = textarea ? 'textarea' : 'input';
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300 mb-2">
        {label} {required && <span className="text-gold-500">*</span>}
      </span>
      <Comp
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 5 : undefined}
        className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-navy-950/60 border border-ink-200/80 dark:border-gold-500/15 text-ink-900 dark:text-ink-50 placeholder:text-ink-400 focus:outline-none focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15 transition-all resize-none"
      />
    </label>
  );
}
