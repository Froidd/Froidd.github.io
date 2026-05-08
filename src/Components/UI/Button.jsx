import React from 'react';
import { motion } from 'framer-motion';
import { PALETTE, FONTS } from '../../styles/palette';

const STYLES = {
  primary:   { bg: PALETTE.accent,     hover: PALETTE.accentDark,    text: '#fff', border: PALETTE.accent     },
  secondary: { bg: PALETTE.secondary,  hover: PALETTE.secondaryDark, text: '#fff', border: PALETTE.secondary  },
  ghost:     { bg: 'transparent',      hover: PALETTE.surfaceHover,  text: PALETTE.textSecondary, border: PALETTE.border },
  nexus:     { bg: '#D97706',          hover: '#B45309',             text: '#fff', border: '#D97706'           },
  itchio:    { bg: '#ff3030',          hover: '#ff4444',             text: '#fff', border: '#ff0000'              },
  youtube:    { bg: '#ff0000',          hover: '#ff0000',             text: '#fff', border: '#ff0000'              },
};

/**
 * Generic animated button — renders as <a> if href, else <button>.
 */
const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  customBg,
  customHover,
  customText,
  size = 'md',
  fullWidth = false,
  target = '_blank',
  style: extraStyle,
}) => {
  const s = variant === 'custom'
    ? { bg: customBg, hover: customHover, text: customText, border: customBg }
    : (STYLES[variant] ?? STYLES.primary);

  const padding = size === 'sm' ? '9px 14px' : '11px 24px';
  const fontSize = size === 'sm' ? '12px' : '13px';

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '7px',
    padding,
    fontSize,
    fontWeight: 600,
    fontFamily: FONTS.sans,
    borderRadius: '7px',
    border: `1px solid ${s.border}`,
    color: s.text,
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    ...extraStyle,
  };

  const motionProps = {
    style: { ...baseStyle, backgroundColor: s.bg },
    whileHover: { backgroundColor: s.hover, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel="noopener noreferrer" {...motionProps}>
        {Icon && <Icon size={14} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {Icon && <Icon size={14} />}
      {children}
    </motion.button>
  );
};

export default Button;
