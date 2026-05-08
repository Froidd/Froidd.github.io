import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Gem, Eye, Settings } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import SectionReveal from '../UI/SectionReveal';
import SectionHeader from '../UI/SectionHeader';
import { viewportOnce } from '../../styles/animations';

const SKILLS = [
  'Unreal Engine 5',
  'Scripting Visual con Blueprints',
  'Iluminación y Renderizado',
  'Creación de Materiales',
  'Optimización de Juegos',
  'Realidad Virtual',
];

const FEATURES = [
  { icon: Cpu, label: 'Lumen GI', desc: 'Iluminación global dinámica', color: PALETTE.accent    },
  { icon: Gem, label: 'Nanite',   desc: 'Geometría virtualizada',      color: PALETTE.secondary },
  { icon: Eye, label: 'Físicas',  desc: 'Efectos físicos avanzados',   color: PALETTE.success   },
];

const NIVELES = ['Principiante', 'Básico', 'Intermedio', 'Intermedio-Avanzado', 'Avanzado', 'Experto'];
const NIVEL_ACTUAL = 'Intermedio-Avanzado';
const PROGRESO = ((NIVELES.indexOf(NIVEL_ACTUAL) + 1) / NIVELES.length) * 100;

const SkillRow = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        borderColor: hovered ? `${PALETTE.accent}50` : PALETTE.border,
        color: hovered ? PALETTE.textPrimary : PALETTE.textSecondary,
      }}
      transition={{ duration: 0.18 }}
      style={{
        backgroundColor: PALETTE.bg,
        border: `1px solid ${PALETTE.border}`,
        borderRadius: '7px', padding: '9px 13px',
        fontSize: '13px', fontFamily: FONTS.sans,
        display: 'flex', alignItems: 'center', gap: '9px',
        cursor: 'default',
      }}
    >
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: PALETTE.accent, opacity: .6, flexShrink: 0 }} />
      {skill}
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, label, desc, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ borderColor: hovered ? `${color}50` : PALETTE.border }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: PALETTE.surface,
        border: `1px solid ${PALETTE.border}`,
        borderRadius: '9px', padding: '14px', cursor: 'default',
      }}
    >
      <Icon size={17} color={color} style={{ marginBottom: '7px' }} />
      <div style={{ fontSize: '12px', fontWeight: 600, color: PALETTE.textPrimary, marginBottom: '2px', fontFamily: FONTS.sans }}>{label}</div>
      <div style={{ fontSize: '11px', color: PALETTE.textMuted, fontFamily: FONTS.sans }}>{desc}</div>
    </motion.div>
  );
};

const AboutSection = () => (
  <section id="about" style={{ padding: '96px 40px', maxWidth: '1160px', margin: '0 auto' }}>
    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

      {/* Left column */}
      <div>
        <SectionHeader title="Sobre Mí" />

        <SectionReveal variant="fadeUp" delay={0.1}>
          <p style={{ color: PALETTE.textSecondary, fontSize: '14px', lineHeight: 1.8, marginBottom: '18px', fontFamily: FONTS.sans }}>
            Desde <strong style={{ color: PALETTE.textPrimary }}>2021</strong> he estado construyendo dentro de{' '}
            <strong style={{ color: PALETTE.accent }}>Unreal Engine</strong>, acumulando más de{' '}
            <strong style={{ color: PALETTE.textPrimary }}>5 años</strong> de experiencia en el desarrollo de experiencias interactivas y entornos virtuales.
          </p>
          <p style={{ color: PALETTE.textSecondary, fontSize: '14px', lineHeight: 1.8, marginBottom: '32px', fontFamily: FONTS.sans }}>
            Me especializo en <strong style={{ color: PALETTE.accent }}>Blueprints</strong>,{' '}
            <strong style={{ color: PALETTE.secondary }}>animaciones</strong> y{' '}
            <strong style={{ color: PALETTE.success }}>optimización de rendimiento</strong>, con experiencia adicional en modding mediante ingeniería inversa.
          </p>
        </SectionReveal>

        {/* Feature cards */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.label}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </motion.div>

        <SectionReveal variant="scaleIn" delay={0.25}>
          <div style={{
            display: 'inline-flex', flexDirection: 'column',
            backgroundColor: PALETTE.surface, border: `1px solid ${PALETTE.border}`,
            borderRadius: '9px', padding: '16px 24px',
          }}>
            <span style={{ fontSize: '30px', fontWeight: 700, color: PALETTE.accent, lineHeight: 1, fontFamily: FONTS.display }}>1.000+</span>
            <span style={{ fontSize: '11px', color: PALETTE.textMuted, marginTop: '4px', fontFamily: FONTS.sans }}>Horas de desarrollo activo</span>
          </div>
        </SectionReveal>
      </div>

      {/* Right column — Skills Panel */}
      <SectionReveal variant="slideRight" delay={0.15}>
        <div style={{ backgroundColor: PALETTE.surface, border: `1px solid ${PALETTE.border}`, borderRadius: '13px', overflow: 'hidden' }}>
          {/* Panel header */}
          <div style={{
            backgroundColor: PALETTE.bg, borderBottom: `1px solid ${PALETTE.border}`,
            padding: '9px 14px', display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', color: PALETTE.textMuted, fontFamily: FONTS.mono,
          }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
              <Settings size={12} color={PALETTE.accent} />
            </motion.div>
            <span style={{ color: PALETTE.accent }}>ST_SkillsTree</span>
            <span style={{ marginLeft: 'auto', color: PALETTE.success, fontSize: '11px' }}>● compiled</span>
          </div>

          <div style={{ padding: '22px' }}>
            <h3 style={{
              fontSize: '13px', fontWeight: 600, color: PALETTE.textPrimary,
              marginBottom: '16px', letterSpacing: '.05em', textTransform: 'uppercase',
              fontFamily: FONTS.sans,
            }}>Habilidades Técnicas</h3>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '26px' }}
            >
              {SKILLS.map((s) => (
                <motion.div
                  key={s}
                  variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  <SkillRow skill={s} />
                </motion.div>
              ))}
            </motion.div>

            {/* Progress bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '7px', color: PALETTE.textMuted, letterSpacing: '.06em', fontFamily: FONTS.mono }}>
                <span>NIVEL ACTUAL</span>
                <span style={{ color: PALETTE.accent }}>{NIVEL_ACTUAL}</span>
              </div>
              <div style={{ width: '100%', height: '5px', backgroundColor: PALETTE.bg, borderRadius: '3px', overflow: 'hidden', border: `1px solid ${PALETTE.border}` }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${PROGRESO}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  style={{ height: '100%', backgroundColor: PALETTE.accent, borderRadius: '3px' }}
                />
              </div>
              <div style={{ textAlign: 'right', fontSize: '10px', color: PALETTE.textMuted, marginTop: '5px', fontFamily: FONTS.mono }}>{Math.round(PROGRESO)}%</div>
            </div>
          </div>
        </div>
      </SectionReveal>

    </div>
  </section>
);

export default AboutSection;
