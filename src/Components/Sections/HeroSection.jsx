import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import Tag from '../UI/Tag';
import Button from '../UI/Button';

const HERO_TAGS = ['Blueprint Systems', 'C++', 'UE 5.4+', 'VR', 'Modding'];

const HeroSection = () => {
  const scrollToProjects = () =>
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '90px 32px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(${PALETTE.border}30 1px,transparent 1px),linear-gradient(90deg,${PALETTE.border}30 1px,transparent 1px)`,
        backgroundSize: '48px 48px', opacity: .5,
      }} />

      {/* Decorative circles */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        style={{
          position: 'absolute', top: '16%', right: '10%',
          width: '260px', height: '260px', borderRadius: '50%',
          backgroundColor: `${PALETTE.accent}06`,
          border: `1px solid ${PALETTE.accent}12`, pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        style={{
          position: 'absolute', bottom: '18%', left: '6%',
          width: '140px', height: '140px', borderRadius: '50%',
          backgroundColor: `${PALETTE.secondary}07`,
          border: `1px solid ${PALETTE.secondary}14`, pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '720px' }}>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: PALETTE.surface, border: `1px solid ${PALETTE.border}`,
            borderRadius: '20px', padding: '5px 14px', marginBottom: '36px',
            fontSize: '12px', color: PALETTE.textSecondary, fontFamily: FONTS.sans,
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: PALETTE.success, display: 'inline-block' }}
          />
          Disponible para proyectos — 2026
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            fontSize: '88px', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.0,
            color: PALETTE.textPrimary, marginBottom: '14px',
            fontFamily: FONTS.display,
          }}
        >
          Froid
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}
        >
          <span style={{ color: PALETTE.accent, fontSize: '17px', fontWeight: 500, fontFamily: FONTS.sans }}>
            Desarrollador Unreal Engine
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
            style={{ color: PALETTE.accent, fontSize: '20px', lineHeight: 1 }}
          >_</motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          style={{
            color: PALETTE.textSecondary, fontSize: '15px', lineHeight: 1.75,
            maxWidth: '500px', margin: '0 auto 40px', fontFamily: FONTS.sans,
          }}
        >
          Especializado en Blueprints, optimización de rendimiento y modding con ingeniería inversa.
          Aprendiendo C++, más de 5 años construyendo en Unreal Engine.
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}
        >
          {HERO_TAGS.map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
            >
              <Tag>{tag}</Tag>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Button variant="primary" onClick={scrollToProjects}>Ver Proyectos</Button>
          <Button variant="ghost" href="mailto:fazeares6567@gmail.com" icon={Mail} target="_self">
            Contactar
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
        >
          <span style={{ fontSize: '10px', color: PALETTE.textMuted, letterSpacing: '.1em', fontFamily: FONTS.mono }}>SCROLL</span>
          <ChevronDown size={15} color={PALETTE.textMuted} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
