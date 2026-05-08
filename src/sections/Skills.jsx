import { motion } from 'framer-motion';
import { TrendingUp, Building2, BarChart3 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillGroups } from '../data/portfolio';

const iconMap = { TrendingUp, Building2, BarChart3 };

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 bg-ink-50/40 dark:bg-navy-950/40"
    >
      <div className="container-luxe">
        <SectionHeader
          eyebrow="04 — Capabilities"
          title={
            <>
              The disciplines behind every{' '}
              <span className="font-display italic gold-text">deliverable</span>.
            </>
          }
          description="An honest map of where my time and depth concentrate — finance first, with the analytical and strategic toolkit to support it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] || TrendingUp;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="card-luxe p-8"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-ink-100 dark:border-gold-500/10">
                  <div className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center text-white shadow-gold-glow">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
                      Group 0{gi + 1}
                    </div>
                    <h3 className="font-display text-xl text-ink-900 dark:text-ink-50">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {group.skills.map((s, i) => (
                    <SkillBar key={s.name} skill={s} delay={i * 0.05 + gi * 0.05} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium text-ink-800 dark:text-ink-100">
          {skill.name}
        </span>
        <span className="font-mono text-[10px] text-gold-600 dark:text-gold-300">
          {skill.level}%
        </span>
      </div>
      <div className="h-[3px] bg-ink-100 dark:bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gold-gradient rounded-full"
        />
      </div>
    </div>
  );
}
