import React from 'react';
import { PALETTE, FONTS } from '../../styles/palette';
import SectionReveal from './SectionReveal';

const SectionHeader = ({ title, subtitle }) => (
  <SectionReveal variant="fadeUp" style={{ marginBottom: '52px' }}>
    <div style={{
      width: '36px', height: '3px',
      backgroundColor: PALETTE.accent,
      borderRadius: '2px', marginBottom: '22px',
    }} />
    <h2 style={{
      fontSize: '34px', fontWeight: 700,
      color: PALETTE.textPrimary,
      fontFamily: FONTS.sans,
      letterSpacing: '-.02em',
      marginBottom: subtitle ? '10px' : 0,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        color: PALETTE.textSecondary,
        fontSize: '14px',
        fontFamily: FONTS.sans,
        maxWidth: '440px',
        lineHeight: 1.7,
      }}>
        {subtitle}
      </p>
    )}
  </SectionReveal>
);

export default SectionHeader;
