import React from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../../styles/animations';

const containerVariants = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Wraps a list of items with staggered scroll-triggered entry animation.
 * Each direct child gets the item variant automatically.
 */
export const StaggerList = ({ children, stagger = 0.08, delayChildren = 0.1, style, className }) => (
  <motion.div
    className={className}
    style={style}
    variants={containerVariants(stagger, delayChildren)}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, style, className }) => (
  <motion.div
    className={className}
    style={style}
    variants={itemVariants}
  >
    {children}
  </motion.div>
);
