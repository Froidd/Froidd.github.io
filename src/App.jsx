import React, { useState, useEffect } from 'react';
import { PALETTE, FONTS } from './styles/palette';

import Navbar from './Components/UI/Navbar';
import HeroSection from './Components/Sections/HeroSection';
import AchievementsBar from './Components/Sections/AchievementsBar';
import AboutSection from './Components/Sections/AboutSection';
import ProjectsSection from './Components/Sections/ProjectsSection';
import ContactSection from './Components/Sections/ContactSection';
import Footer from './Components/Sections/Footer';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: PALETTE.bg,
      color: PALETTE.textPrimary,
      overflowX: 'hidden',
      fontFamily: FONTS.sans,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: ${PALETTE.bg}; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${PALETTE.bg}; }
        ::-webkit-scrollbar-thumb { background: ${PALETTE.border}; border-radius: 3px; }

        a { color: inherit; }

        .nav-links { display: flex !important; }
        .nav-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .hero-title { font-size: 56px !important; }
          .ach-grid { flex-direction: column; align-items: stretch; }
          .ach-item { border-right: none !important; border-bottom: 1px solid ${PALETTE.border}; }
        }
      `}</style>

      <Navbar scrollY={scrollY} />
      <HeroSection />
      <AchievementsBar />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
