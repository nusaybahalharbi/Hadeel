import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold-gradient" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="h-display text-4xl md:text-5xl lg:text-6xl text-ink-900 dark:text-ink-50 text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base md:text-lg text-ink-600 dark:text-ink-300 leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
