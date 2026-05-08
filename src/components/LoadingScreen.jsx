import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated HA mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loadGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e0bf6a" />
                <stop offset="100%" stopColor="#875722" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#loadGrad)"
              strokeWidth="1"
              strokeDasharray="289"
              initial={{ strokeDashoffset: 289 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            <motion.text
              x="50"
              y="58"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="34"
              fontWeight="500"
              fill="url(#loadGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              HA
            </motion.text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-gold-300"
        >
          Hadeel Alharbi · FMVA®
        </motion.div>
      </div>
    </motion.div>
  );
}
