import React from 'react';
import { PALETTE, FONTS } from '../../styles/palette';

const DOT_COLORS = [PALETTE.accent, PALETTE.secondary, PALETTE.success, PALETTE.warning];

const Footer = () => (
  <footer style={{
    borderTop: `1px solid ${PALETTE.border}`,
    padding: '28px 40px',
    maxWidth: '1160px', margin: '0 auto',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '14px',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <span style={{ fontSize: '13px', fontWeight: 700, color: PALETTE.accent, fontFamily: FONTS.mono }}>
        {'<Froid/>'}
      </span>
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          backgroundColor: PALETTE.success, display: 'inline-block',
        }} />
        <span style={{ fontSize: '11px', color: PALETTE.textMuted, fontFamily: FONTS.sans }}>
          Build: 2026.1.0 · UE 5.4+
        </span>
      </div>
    </div>

    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      {DOT_COLORS.map((c, i) => (
        <div key={i} style={{
          width: '6px', height: '6px', borderRadius: '50%',
          backgroundColor: c, opacity: .45,
        }} />
      ))}
    </div>

    <span style={{ fontSize: '12px', color: PALETTE.textMuted, fontFamily: FONTS.sans }}>
      © 2026 Froid
    </span>
  </footer>
);

export default Footer;
