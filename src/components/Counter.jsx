import { useCountUp } from '../hooks';

export default function Counter({ value, suffix = '', label }) {
  const [count, ref] = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-5xl md:text-6xl font-medium text-ink-900 dark:text-ink-50">
        {count}
        <span className="gold-text">{suffix}</span>
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-500 dark:text-ink-400">
        {label}
      </div>
    </div>
  );
}
