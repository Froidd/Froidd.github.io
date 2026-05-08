import React from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../../styles/animations';

/**
 * Wraps any section content in a scroll-triggered reveal animation.
 * variant: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
 */
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

const SectionReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  ease = [0.16, 1, 0.3, 1],
  style,
  className,
}) => (
  <motion.div
    className={className}
    style={style}
    variants={variants[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    transition={{ duration, ease, delay }}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
