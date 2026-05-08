import React from 'react';
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import SectionHeader from '../UI/SectionHeader';
import Button from '../UI/Button';
import SectionReveal from '../UI/SectionReveal';

const ContactSection = () => (
  <section id="contacto" style={{
    padding: '96px 40px',
    borderTop: `1px solid ${PALETTE.border}`,
    maxWidth: '760px', margin: '0 auto',
  }}>
    <SectionHeader title="Trabajemos Juntos" />

    <SectionReveal variant="fadeUp" delay={0.1}>
      <p style={{
        color: PALETTE.textSecondary, fontSize: '14px',
        fontFamily: FONTS.sans, marginBottom: '40px',
        lineHeight: 1.75, maxWidth: '420px',
      }}>
        Abierto a colaboraciones y proyectos de desarrollo de juegos.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary" href="mailto:fazeares6567@gmail.com" icon={Mail} target="_self">
          Enviar Email
        </Button>
        <Button variant="ghost" href="https://github.com/Froidd" icon={Github}>
          GitHub
        </Button>
      </div>
    </SectionReveal>
  </section>
);

export default ContactSection;
