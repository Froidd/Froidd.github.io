import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, Code, PopcornIcon } from 'lucide-react';
import { PALETTE, FONTS } from '../../styles/palette';
import SectionHeader from '../UI/SectionHeader';
import ProjectCard from '../UI/ProjectCard';
import { viewportOnce } from '../../styles/animations';
import screenshot from '../../assets/ScreenShot002.png';
import screenshot2 from '../../assets/screenshot2.jpg';

const PROJECTS = [
  {
    id: 1,
    title: 'Half Sword Quality Of Life',
    category: 'Modding',
    description:
      'Usé ingeniería inversa para crear un mod de Half Sword que mejora la experiencia con cámara lenta, spawner de ítems, presets de armas y mejoras gráficas. Se inyecta un DLL para acceder a las funciones internas tanto de Unreal Engine como las del propio juego.',
    image: screenshot,
    tech: ['Unreal Engine 5', 'C++', 'Ingeniería Inversa'],
    year: '2025',
    buttons: [
      { label: 'Ver Código', url: 'https://github.com/Froidd/Half-Sword-Quality-Of-Life-Mod', icon: Github,       style: 'ghost' },
      { label: 'Nexus Mods', url: 'https://www.nexusmods.com/halfsword/mods/18',               icon: ExternalLink, style: 'nexus' },
    ],
  },
  {
    id: 2,
    title: 'RANDOMLIFE REBORN',
    category: 'VIDEOJUEGO',
    description:
      'Fangame de terror psicológico dedicado a los youtubers MiguelilloRL, Matiasy., Zapatos27 y Fran Luceño. La Gang siempre pareció inofensiva… hasta que descubriste la verdad. Corre, escóndete y sobrevive mientras desvelan sus secretos más oscuros. Aventura de supervivencia en primera persona con estética PSX.',
    image: screenshot2,
    tech: ['Unreal Engine 5', 'Vulkan'],
    year: '2026',
    buttons: [
      { label: '! Ver Video !', url: 'https://www.youtube.com/watch?v=JwEtWKo_RZU', icon: PopcornIcon, style: 'youtube' },
      { label: '! Jugar !', url: 'https://rxfroi.itch.io/randomlife-reborn', icon: Play, style: 'itchio' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectsSection = () => (
  <section id="proyectos" style={{
    padding: '96px 40px', maxWidth: '1160px', margin: '0 auto',
    borderTop: `1px solid ${PALETTE.border}`,
  }}>
    <SectionHeader
      title="Proyectos Destacados"
      subtitle="Trabajos publicados y proyectos personales desarrollados con Unreal Engine 5."
    />

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '22px' }}
    >
      {PROJECTS.map((project) => (
        <motion.div key={project.id} variants={cardVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}

      {/* Placeholder */}
      <motion.div
        variants={cardVariants}
        style={{
          backgroundColor: PALETTE.surface,
          border: `2px dashed ${PALETTE.border}`,
          borderRadius: '13px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '48px 24px', gap: '11px', opacity: .45,
        }}
      >
        <Code size={26} color={PALETTE.textMuted} />
        <span style={{ fontSize: '13px', color: PALETTE.textMuted, fontFamily: FONTS.sans }}>
          Más proyectos en camino…
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default ProjectsSection;
