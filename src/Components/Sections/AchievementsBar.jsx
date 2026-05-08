import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Star, Gamepad2, BinaryIcon, Gavel } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import { viewportOnce } from '../../styles/animations';

const ACHIEVEMENTS = [
  { icon: Code,       title: '5+ Años',     subtitle: 'Experiencia con UE'    },
  { icon: Zap,        title: 'Optimización', subtitle: 'Experto en rendimiento' },
  { icon: BinaryIcon, title: 'Modding',      subtitle: 'Ingeniería inversa'     },
  { icon: Star,       title: 'Innovación',   subtitle: 'Soluciones creativas'   },
  { icon: Gavel,      title: 'Física',       subtitle: 'Simulación realista'    },
  { icon: Gamepad2,   title: 'Multijugador', subtitle: 'Experiencia en red'     },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const AchievementsBar = () => (
  <motion.div
    className="ach-grid"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    style={{
      borderTop: `1px solid ${PALETTE.border}`,
      borderBottom: `1px solid ${PALETTE.border}`,
      backgroundColor: PALETTE.surface,
      padding: '0 40px',
      display: 'flex', justifyContent: 'center',
      flexWrap: 'wrap', overflowX: 'auto',
    }}
  >
    {ACHIEVEMENTS.map((a, i) => {
      const Icon = a.icon;
      return (
        <motion.div
          key={i}
          className="ach-item"
          variants={itemVariants}
          whileHover={{ backgroundColor: PALETTE.surfaceHover, transition: { duration: 0.15 } }}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '18px 28px', cursor: 'default',
            borderRight: i < ACHIEVEMENTS.length - 1 ? `1px solid ${PALETTE.border}` : 'none',
            minWidth: '150px',
          }}
        >
          <div style={{
            width: '32px', height: '32px',
            backgroundColor: `${PALETTE.accent}16`,
            border: `1px solid ${PALETTE.accent}28`,
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={15} color={PALETTE.accent} />
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: PALETTE.textPrimary, fontFamily: FONTS.sans }}>{a.title}</div>
            <div style={{ fontSize: '11px', color: PALETTE.textMuted, fontFamily: FONTS.sans }}>{a.subtitle}</div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);

export default AchievementsBar;
