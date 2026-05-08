import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import Tag from '../UI/Tag';
import Button from '../UI/Button';

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -6, borderColor: PALETTE.borderAccent }}
    transition={{ duration: 0.22, ease: 'easeOut' }}
    style={{
      backgroundColor: PALETTE.surface,
      border: `1px solid ${PALETTE.border}`,
      borderRadius: '13px', overflow: 'hidden',
    }}
  >
    {/* Image */}
    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
      {project.image ? (
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{
          width: '100%', height: '100%',
          backgroundColor: PALETTE.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Gamepad2 size={36} color={PALETTE.textMuted} />
        </div>
      )}
      <div style={{
        position: 'absolute', top: '10px', right: '10px',
        backgroundColor: `${PALETTE.bg}cc`,
        border: `1px solid ${PALETTE.border}`,
        borderRadius: '5px', padding: '3px 9px',
        fontSize: '11px', color: PALETTE.textSecondary,
        backdropFilter: 'blur(8px)',
        fontFamily: FONTS.mono,
      }}>
        {project.year}
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '8px' }}>
        <span style={{
          fontSize: '11px', color: PALETTE.secondary,
          textTransform: 'uppercase', letterSpacing: '.08em',
          fontWeight: 600, fontFamily: FONTS.sans,
        }}>
          {project.category}
        </span>
      </div>

      <h3 style={{
        fontSize: '17px', fontWeight: 700, color: PALETTE.textPrimary,
        marginBottom: '10px', fontFamily: FONTS.display, lineHeight: 1.3,
      }}>
        {project.title}
      </h3>

      <p style={{
        fontSize: '13px', color: PALETTE.textSecondary, lineHeight: 1.7,
        marginBottom: '16px', fontFamily: FONTS.sans,
      }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {/* Buttons */}
      {project.buttons?.length > 0 && (
        <div style={{
          display: 'flex', gap: '9px',
          borderTop: `1px solid ${PALETTE.border}`, paddingTop: '16px',
        }}>
          {project.buttons.map((btn, i) => (
            <Button
              key={i}
              variant={btn.style}
              href={btn.url}
              icon={btn.icon}
              size="sm"
              customBg={btn.customBg}
              customHover={btn.customHover}
              customText={btn.customText}
              style={{ flex: 1 }}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
