import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';

const NAV_LINKS = [
  { label: 'Inicio',    target: 'hero'      },
  { label: 'Sobre Mí',  target: 'about'     },
  { label: 'Proyectos', target: 'proyectos' },
  { label: 'Contacto',  target: 'contacto'  },
];

const scrollTo = (target) =>
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });

const NavLink = ({ label, target }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={() => scrollTo(target)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none', border: 'none',
        fontFamily: FONTS.sans, fontSize: '13px',
        fontWeight: 500, cursor: 'pointer',
        padding: '4px 0', position: 'relative',
        color: hovered ? PALETTE.textPrimary : PALETTE.textSecondary,
        transition: 'color 0.2s',
      }}
    >
      {label}
      <motion.span
        style={{
          position: 'absolute', bottom: -2, left: 0,
          height: '1px', backgroundColor: PALETTE.accent,
          display: 'block',
        }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? '100%' : 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
    </button>
  );
};

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 40;

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: scrolled ? PALETTE.surface : 'transparent',
          borderBottom: scrolled ? `1px solid ${PALETTE.border}` : '1px solid transparent',
          transition: 'background-color .3s, border-color .3s',
          padding: '0 40px', height: '54px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <span style={{
          fontWeight: 700, color: PALETTE.accent,
          fontSize: '22px', letterSpacing: '.03em',
          fontFamily: FONTS.mono,
        }}>
          {'<Froid/>'}
        </span>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '28px' }}>
          {NAV_LINKS.map(({ label, target }) => (
            <NavLink key={target} label={label} target={target} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: `1px solid ${PALETTE.border}`,
            borderRadius: '6px', padding: '6px', cursor: 'pointer',
            color: PALETTE.textSecondary, display: 'none',
          }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: '54px', left: 0, right: 0, zIndex: 99,
              backgroundColor: PALETTE.surface,
              borderBottom: `1px solid ${PALETTE.border}`,
              padding: '16px 24px',
              display: 'flex', flexDirection: 'column', gap: '12px',
            }}
          >
            {NAV_LINKS.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => { scrollTo(target); setMenuOpen(false); }}
                style={{
                  background: 'none', border: 'none',
                  fontFamily: FONTS.sans, fontSize: '15px', fontWeight: 500,
                  cursor: 'pointer', padding: '10px 0', textAlign: 'left',
                  color: PALETTE.textSecondary,
                  borderBottom: `1px solid ${PALETTE.border}`,
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
