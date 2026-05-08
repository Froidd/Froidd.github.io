import React from 'react';
import { PALETTE, FONTS } from '../../styles/palette';

const Tag = ({ children, color }) => (
  <span style={{
    backgroundColor: color ? `${color}18` : PALETTE.tagBg,
    color: color ?? PALETTE.tagText,
    border: `1px solid ${color ? `${color}30` : PALETTE.tagBorder}`,
    borderRadius: '5px',
    padding: '4px 11px',
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '.04em',
    fontFamily: FONTS.mono,
    whiteSpace: 'nowrap',
  }}>
    {children}
  </span>
);

export default Tag;
