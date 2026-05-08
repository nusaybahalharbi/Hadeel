import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(200,146,48,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,146,48,0.18) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      {/* Floating gold orb */}
      <motion.div
        className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(224,191,106,0.18) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navy orb (right) */}
      <motion.div
        className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(15,23,41,0.25) 0%, transparent 70%)',
        }}
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom soft glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[380px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse, rgba(200,146,48,0.10) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay dark:opacity-[0.05] bg-noise" />
    </div>
  );
}
