import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Play, Code, Zap, Star, Gamepad2, Gem, Gavel, BinaryIcon, Layers, Settings, Cpu, Eye, ChevronDown } from 'lucide-react';
import screenshot from './assets/ScreenShot002.png';

// ═══════════════════════════════════════════════════════════
//  🎨 PALETA — Edita aquí para cambiar todos los colores
// ═══════════════════════════════════════════════════════════
const PALETTE = {
  accent:        '#4A8FE7',
  accentDark:    '#2563EB',
  secondary:     '#7C5CBF',
  secondaryDark: '#6D28D9',
  bg:            '#0F1117',
  surface:       '#1A1D27',
  surfaceHover:  '#22263A',
  border:        '#2A2D3E',
  borderAccent:  '#3A4A6A',
  textPrimary:   '#E8EAF0',
  textSecondary: '#8892A4',
  textMuted:     '#4E5668',
  success:       '#3DAA6E',
  warning:       '#E5A832',
  danger:        '#E05252',
  tagBg:         '#1E2235',
  tagText:       '#7EB3F5',
  tagBorder:     '#2E3A55',
};
// ═══════════════════════════════════════════════════════════

const UnrealEnginePortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const niveles = ["Principiante", "Básico", "Intermedio", "Intermedio-Avanzado", "Avanzado", "Experto"];
  const nivelActual = "Intermedio-Avanzado";
  const progreso = ((niveles.indexOf(nivelActual) + 1) / niveles.length) * 100;

  // ── Proyectos ────────────────────────────────────────────
  // Cómo añadir botones a una card:
  //   Agrega objetos al array "buttons" del proyecto.
  //   Cada botón: { label, url, icon (componente lucide), style }
  //   style: 'primary' | 'secondary' | 'ghost' | 'nexus' | 'custom'
  //   Para 'custom' añade también: customBg, customHover, customText
  const projects = [
    {
      id: 1,
      title: "Half Sword Quality Of Life",
      category: "Modding / Miscelánea",
      description: "Usé ingeniería inversa para crear un mod de Half Sword que mejora la experiencia con cámara lenta, spawner de ítems, presets de armas y mejoras gráficas. Se inyecta un DLL para acceder a las funciones internas de Unreal Engine.",
      image: screenshot,
      tech: ["Unreal Engine 5", "C++", "Ingeniería Inversa"],
      year: "2025",
      buttons: [
        { label: "Ver Código",  url: "https://github.com/Froidd/Half-Sword-Quality-Of-Life-Mod", icon: Github,      style: "ghost"   },
        { label: "Nexus Mods",  url: "https://www.nexusmods.com/halfsword/mods/18",               icon: ExternalLink, style: "nexus"   },
      ],
    },
    // ── AÑADE PROYECTOS AQUÍ ─────────────────────────────
    // {
    //   id: 2,
    //   title: "Nombre del Proyecto",
    //   category: "Categoría",
    //   description: "Descripción del proyecto...",
    //   image: null,
    //   tech: ["UE5", "C++"],
    //   year: "2026",
    //   buttons: [
    //     { label: "GitHub", url: "https://github.com/...", icon: Github, style: "ghost" },
    //     { label: "Demo",   url: "https://...",            icon: Play,   style: "primary" },
    //   ],
    // },
  ];

  const skills = [
    "Unreal Engine 5", "Scripting Visual con Blueprints", "Iluminación y Renderizado",
    "Creación de Materiales", "Optimización de Juegos", "Realidad Virtual",
  ];

  const achievements = [
    { icon: Code,       title: "5+ Años",      subtitle: "Experiencia con UE" },
    { icon: Zap,        title: "Optimización",  subtitle: "Experto en rendimiento" },
    { icon: BinaryIcon, title: "Modding",       subtitle: "Ingeniería inversa" },
    { icon: Star,       title: "Innovación",    subtitle: "Soluciones creativas" },
    { icon: Gavel,      title: "Física",        subtitle: "Simulación realista" },
    { icon: Gamepad2,   title: "Multijugador",  subtitle: "Experiencia en red" },
  ];

  const buttonStyles = {
    primary:   { bg: PALETTE.accent,     hover: PALETTE.accentDark,    text: '#fff', border: PALETTE.accent     },
    secondary: { bg: PALETTE.secondary,  hover: PALETTE.secondaryDark, text: '#fff', border: PALETTE.secondary  },
    ghost:     { bg: 'transparent',      hover: PALETTE.surfaceHover,  text: PALETTE.textSecondary, border: PALETTE.border },
    nexus:     { bg: '#D97706',          hover: '#B45309',             text: '#fff', border: '#D97706'           },
  };

  const CardButton = ({ btn }) => {
    const [hovered, setHovered] = useState(false);
    const s = btn.style === 'custom'
      ? { bg: btn.customBg, hover: btn.customHover, text: btn.customText, border: btn.customBg }
      : (buttonStyles[btn.style] || buttonStyles.primary);
    const Icon = btn.icon;
    return (
      <a href={btn.url} target="_blank" rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px', padding: '9px 14px', borderRadius: '7px',
          fontSize: '12px', fontWeight: 600, cursor: 'pointer',
          border: `1px solid ${s.border}`,
          backgroundColor: hovered ? s.hover : s.bg,
          color: s.text,
          transition: 'background-color 0.18s, transform 0.14s',
          transform: hovered ? 'translateY(-1px)' : 'none',
          textDecoration: 'none', whiteSpace: 'nowrap',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {Icon && <Icon size={13} />}
        {btn.label}
      </a>
    );
  };

  const NavBtn = ({ children, target }) => {
    const [h, setH] = useState(false);
    return (
      <button onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          background: 'none', border: 'none', fontFamily: 'inherit',
          fontSize: '13px', cursor: 'pointer', padding: '4px 0',
          color: h ? PALETTE.textPrimary : PALETTE.textSecondary,
          transition: 'color 0.2s',
        }}>
        {children}
      </button>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: PALETTE.bg, color: PALETTE.textPrimary, overflowX: 'hidden', fontFamily: "'IBM Plex Mono','Fira Code','Courier New',monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background-color:${PALETTE.bg};}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .fade-up{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) both;}
        .blink{animation:blink 1s step-end infinite;}
        .spin-slow{animation:spin 18s linear infinite;}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${PALETTE.bg}}
        ::-webkit-scrollbar-thumb{background:${PALETTE.border};border-radius:3px}
        .sdiv{width:36px;height:3px;background:${PALETTE.accent};border-radius:2px;margin-bottom:22px;}
        .card{background:${PALETTE.surface};border:1px solid ${PALETTE.border};border-radius:13px;overflow:hidden;transition:transform .22s,border-color .22s,background-color .22s;}
        .card:hover{transform:translateY(-4px);border-color:${PALETTE.borderAccent};background:${PALETTE.surfaceHover};}
        a{color:inherit;}
        @media(max-width:768px){
          .grid-2{grid-template-columns:1fr!important;}
          .nav-links{display:none!important;}
          .hero-title{font-size:56px!important;}
          .ach-grid{flex-direction:column;align-items:stretch;}
          .ach-item{border-right:none!important;border-bottom:1px solid ${PALETTE.border};}
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        backgroundColor: scrollY > 40 ? PALETTE.surface : 'transparent',
        borderBottom: scrollY > 40 ? `1px solid ${PALETTE.border}` : '1px solid transparent',
        transition:'background-color .3s,border-color .3s',
        padding:'0 40px',height:'54px',
        display:'flex',alignItems:'center',justifyContent:'space-between',
      }}>
        <span style={{fontWeight:700,color:PALETTE.accent,fontSize:'14px',letterSpacing:'.03em'}}>{'<Froid />'}</span>
        <div className="nav-links" style={{display:'flex',gap:'28px'}}>
          <NavBtn target="hero">Inicio</NavBtn>
          <NavBtn target="about">Sobre Mí</NavBtn>
          <NavBtn target="proyectos">Proyectos</NavBtn>
          <NavBtn target="contacto">Contacto</NavBtn>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        minHeight:'100vh',display:'flex',flexDirection:'column',
        alignItems:'center',justifyContent:'center',
        padding:'90px 32px 60px',position:'relative',overflow:'hidden',
      }}>
        <div style={{
          position:'absolute',inset:0,pointerEvents:'none',
          backgroundImage:`linear-gradient(${PALETTE.border}30 1px,transparent 1px),linear-gradient(90deg,${PALETTE.border}30 1px,transparent 1px)`,
          backgroundSize:'48px 48px',opacity:.5,
        }}/>
        <div style={{position:'absolute',top:'16%',right:'10%',width:'260px',height:'260px',borderRadius:'50%',backgroundColor:`${PALETTE.accent}06`,border:`1px solid ${PALETTE.accent}12`,pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:'18%',left:'6%',width:'140px',height:'140px',borderRadius:'50%',backgroundColor:`${PALETTE.secondary}07`,border:`1px solid ${PALETTE.secondary}14`,pointerEvents:'none'}}/>

        <div className="fade-up" style={{textAlign:'center',position:'relative',zIndex:2,maxWidth:'720px'}}>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:'8px',
            backgroundColor:PALETTE.surface,border:`1px solid ${PALETTE.border}`,
            borderRadius:'20px',padding:'5px 14px',marginBottom:'36px',
            fontSize:'12px',color:PALETTE.textSecondary,
          }}>
            <span style={{width:'7px',height:'7px',borderRadius:'50%',backgroundColor:PALETTE.success,display:'inline-block',animation:'pulse 2s infinite'}}/>
            Disponible para proyectos — 2026
          </div>

          <h1 className="hero-title" style={{
            fontSize:'88px',fontWeight:700,letterSpacing:'-.04em',lineHeight:1.0,
            color:PALETTE.textPrimary,marginBottom:'14px',
            fontFamily:"'IBM Plex Sans',sans-serif",
          }}>Froid</h1>

          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',marginBottom:'24px'}}>
            <span style={{color:PALETTE.accent,fontSize:'17px',fontWeight:500}}>Desarrollador Unreal Engine</span>
            <span className="blink" style={{color:PALETTE.accent,fontSize:'20px',lineHeight:1}}>_</span>
          </div>

          <p style={{color:PALETTE.textSecondary,fontSize:'15px',lineHeight:1.75,maxWidth:'500px',margin:'0 auto 40px',fontFamily:"'IBM Plex Sans',sans-serif"}}>
            Especializado en Blueprints, C++, optimización de rendimiento y modding con ingeniería inversa. Más de 5 años construyendo en Unreal Engine.
          </p>

          <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'8px',marginBottom:'40px'}}>
            {['Blueprint Systems','C++','UE 5.4+','VR','Modding'].map(tag=>(
              <span key={tag} style={{backgroundColor:PALETTE.tagBg,color:PALETTE.tagText,border:`1px solid ${PALETTE.tagBorder}`,borderRadius:'5px',padding:'4px 11px',fontSize:'11px',fontWeight:500,letterSpacing:'.04em'}}>{tag}</span>
            ))}
          </div>

          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            {[
              { label:'Ver Proyectos', action: ()=>document.getElementById('proyectos')?.scrollIntoView({behavior:'smooth'}), primary:true },
            ].map((b,i)=>{
              const [h,setH]=useState(false);
              return b.href
                ? <a key={i} href={b.href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',gap:'8px',backgroundColor:h?PALETTE.accentDark:PALETTE.accent,color:'#fff',border:`1px solid ${PALETTE.accent}`,borderRadius:'7px',padding:'11px 24px',fontSize:'13px',fontWeight:600,textDecoration:'none',fontFamily:'inherit',transition:'background-color .2s,transform .14s',transform:h?'translateY(-1px)':'none'}}>{b.label}</a>
                : <button key={i} onClick={b.action} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{backgroundColor:h?PALETTE.accentDark:PALETTE.accent,color:'#fff',border:`1px solid ${PALETTE.accent}`,borderRadius:'7px',padding:'11px 24px',fontSize:'13px',fontWeight:600,cursor:'pointer',fontFamily:'inherit',transition:'background-color .2s,transform .14s',transform:h?'translateY(-1px)':'none'}}>{b.label}</button>
            })}
            {(()=>{const [h,setH]=useState(false);return(
              <a href="mailto:fazeares6567@gmail.com" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',gap:'8px',backgroundColor:'transparent',color:PALETTE.textPrimary,border:`1px solid ${h?PALETTE.borderAccent:PALETTE.border}`,borderRadius:'7px',padding:'11px 24px',fontSize:'13px',fontWeight:600,textDecoration:'none',fontFamily:'inherit',transition:'border-color .2s,transform .14s',transform:h?'translateY(-1px)':'none'}}>
                Contactar
              </a>
            );})()}
          </div>
        </div>

        <div style={{position:'absolute',bottom:'28px',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'5px',opacity:.3,animation:'pulse 2.5s infinite'}}>
          <span style={{fontSize:'10px',color:PALETTE.textMuted,letterSpacing:'.1em'}}>SCROLL</span>
          <ChevronDown size={15} color={PALETTE.textMuted}/>
        </div>
      </section>

      {/* ACHIEVEMENTS BAR */}
      <div className="ach-grid" style={{borderTop:`1px solid ${PALETTE.border}`,borderBottom:`1px solid ${PALETTE.border}`,backgroundColor:PALETTE.surface,padding:'0 40px',display:'flex',justifyContent:'center',flexWrap:'wrap',overflowX:'auto'}}>
        {achievements.map((a,i)=>{
          const Icon=a.icon;
          return(
            <div key={i} className="ach-item" style={{display:'flex',alignItems:'center',gap:'12px',padding:'18px 28px',borderRight:i<achievements.length-1?`1px solid ${PALETTE.border}`:'none',minWidth:'150px'}}>
              <div style={{width:'32px',height:'32px',backgroundColor:`${PALETTE.accent}16`,border:`1px solid ${PALETTE.accent}28`,borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <Icon size={15} color={PALETTE.accent}/>
              </div>
              <div>
                <div style={{fontSize:'13px',fontWeight:700,color:PALETTE.textPrimary}}>{a.title}</div>
                <div style={{fontSize:'11px',color:PALETTE.textMuted,fontFamily:"'IBM Plex Sans',sans-serif"}}>{a.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ABOUT */}
      <section id="about" style={{padding:'96px 40px',maxWidth:'1160px',margin:'0 auto'}}>
        <div className="grid-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'72px',alignItems:'start'}}>
          <div>
            <div className="sdiv"/>
            <h2 style={{fontSize:'34px',fontWeight:700,marginBottom:'22px',color:PALETTE.textPrimary,fontFamily:"'IBM Plex Sans',sans-serif",letterSpacing:'-.02em'}}>Sobre Mí</h2>
            <p style={{color:PALETTE.textSecondary,fontSize:'14px',lineHeight:1.8,marginBottom:'18px',fontFamily:"'IBM Plex Sans',sans-serif"}}>
              Desde <strong style={{color:PALETTE.textPrimary}}>2021</strong> he estado construyendo dentro de <strong style={{color:PALETTE.accent}}>Unreal Engine</strong>, acumulando más de <strong style={{color:PALETTE.textPrimary}}>5 años</strong> de experiencia en el desarrollo de experiencias interactivas y entornos virtuales.
            </p>
            <p style={{color:PALETTE.textSecondary,fontSize:'14px',lineHeight:1.8,marginBottom:'32px',fontFamily:"'IBM Plex Sans',sans-serif"}}>
              Me especializo en <strong style={{color:PALETTE.accent}}>Blueprints</strong>, <strong style={{color:PALETTE.secondary}}>animaciones</strong> y <strong style={{color:PALETTE.success}}>optimización de rendimiento</strong>, con experiencia adicional en modding mediante ingeniería inversa.
            </p>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'32px'}}>
              {[
                {icon:Cpu,    label:'Lumen GI', desc:'Iluminación global dinámica', color:PALETTE.accent},
                {icon:Gem,    label:'Nanite',   desc:'Geometría virtualizada',      color:PALETTE.secondary},
                {icon:Eye,    label:'Chaos',    desc:'Física destructible',          color:PALETTE.success},
                {icon:Layers, label:'Niagara',  desc:'Partículas avanzadas',         color:PALETTE.warning},
              ].map(({icon:Icon,label,desc,color})=>{
                const [h,setH]=useState(false);
                return(
                  <div key={label} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
                    style={{backgroundColor:PALETTE.surface,border:`1px solid ${h?color+'50':PALETTE.border}`,borderRadius:'9px',padding:'14px',cursor:'default',transition:'border-color .2s'}}>
                    <Icon size={17} color={color} style={{marginBottom:'7px'}}/>
                    <div style={{fontSize:'12px',fontWeight:600,color:PALETTE.textPrimary,marginBottom:'2px'}}>{label}</div>
                    <div style={{fontSize:'11px',color:PALETTE.textMuted,fontFamily:"'IBM Plex Sans',sans-serif"}}>{desc}</div>
                  </div>
                );
              })}
            </div>

            <div style={{display:'inline-flex',flexDirection:'column',backgroundColor:PALETTE.surface,border:`1px solid ${PALETTE.border}`,borderRadius:'9px',padding:'16px 24px'}}>
              <span style={{fontSize:'30px',fontWeight:700,color:PALETTE.accent,lineHeight:1}}>1 000+</span>
              <span style={{fontSize:'11px',color:PALETTE.textMuted,marginTop:'4px',fontFamily:"'IBM Plex Sans',sans-serif"}}>Horas de desarrollo activo</span>
            </div>
          </div>

          {/* Skills panel */}
          <div style={{backgroundColor:PALETTE.surface,border:`1px solid ${PALETTE.border}`,borderRadius:'13px',overflow:'hidden'}}>
            <div style={{backgroundColor:PALETTE.bg,borderBottom:`1px solid ${PALETTE.border}`,padding:'9px 14px',display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:PALETTE.textMuted}}>
              <Settings size={12} color={PALETTE.accent} className="spin-slow"/>
              <span style={{color:PALETTE.accent}}>DT_SkillsTree</span>
              <span style={{marginLeft:'auto',color:PALETTE.success,fontSize:'11px'}}>● compiled</span>
            </div>
            <div style={{padding:'22px'}}>
              <h3 style={{fontSize:'13px',fontWeight:600,color:PALETTE.textPrimary,marginBottom:'16px',letterSpacing:'.05em',textTransform:'uppercase'}}>Habilidades Técnicas</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'7px',marginBottom:'26px'}}>
                {skills.map((s,i)=>{
                  const [h,setH]=useState(false);
                  return(
                    <div key={i} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
                      style={{backgroundColor:PALETTE.bg,border:`1px solid ${h?PALETTE.accent+'45':PALETTE.border}`,borderRadius:'7px',padding:'9px 13px',fontSize:'13px',color:h?PALETTE.textPrimary:PALETTE.textSecondary,cursor:'default',transition:'border-color .18s,color .18s',fontFamily:"'IBM Plex Sans',sans-serif",display:'flex',alignItems:'center',gap:'9px'}}>
                      <span style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:PALETTE.accent,opacity:.6,flexShrink:0}}/>
                      {s}
                    </div>
                  );
                })}
              </div>
              <div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',marginBottom:'7px',color:PALETTE.textMuted,letterSpacing:'.06em'}}>
                  <span>NIVEL ACTUAL</span>
                  <span style={{color:PALETTE.accent}}>{nivelActual}</span>
                </div>
                <div style={{width:'100%',height:'5px',backgroundColor:PALETTE.bg,borderRadius:'3px',overflow:'hidden',border:`1px solid ${PALETTE.border}`}}>
                  <div style={{width:`${progreso}%`,height:'100%',backgroundColor:PALETTE.accent,borderRadius:'3px'}}/>
                </div>
                <div style={{textAlign:'right',fontSize:'10px',color:PALETTE.textMuted,marginTop:'5px'}}>{Math.round(progreso)}% de Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{padding:'96px 40px',maxWidth:'1160px',margin:'0 auto',borderTop:`1px solid ${PALETTE.border}`}}>
        <div className="sdiv"/>
        <div style={{marginBottom:'52px'}}>
          <h2 style={{fontSize:'34px',fontWeight:700,color:PALETTE.textPrimary,fontFamily:"'IBM Plex Sans',sans-serif",letterSpacing:'-.02em',marginBottom:'10px'}}>Proyectos Destacados</h2>
          <p style={{color:PALETTE.textSecondary,fontSize:'14px',fontFamily:"'IBM Plex Sans',sans-serif",maxWidth:'440px'}}>Trabajos publicados y proyectos personales desarrollados con Unreal Engine 5.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:'22px'}}>
          {projects.map(project=>(
            <div key={project.id} className="card">
              <div style={{position:'relative',aspectRatio:'16/9',overflow:'hidden'}}>
                {project.image
                  ? <img src={project.image} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                  : <div style={{width:'100%',height:'100%',backgroundColor:PALETTE.bg,display:'flex',alignItems:'center',justifyContent:'center'}}><Gamepad2 size={36} color={PALETTE.textMuted}/></div>
                }
                <div style={{position:'absolute',top:'10px',right:'10px',backgroundColor:PALETTE.bg+'cc',border:`1px solid ${PALETTE.border}`,borderRadius:'5px',padding:'3px 9px',fontSize:'11px',color:PALETTE.textSecondary,backdropFilter:'blur(8px)'}}>
                  {project.year}
                </div>
              </div>
              <div style={{padding:'20px'}}>
                <div style={{marginBottom:'8px'}}>
                  <span style={{fontSize:'11px',color:PALETTE.secondary,textTransform:'uppercase',letterSpacing:'.08em',fontWeight:600}}>{project.category}</span>
                </div>
                <h3 style={{fontSize:'17px',fontWeight:700,color:PALETTE.textPrimary,marginBottom:'10px',fontFamily:"'IBM Plex Sans',sans-serif",lineHeight:1.3}}>{project.title}</h3>
                <p style={{fontSize:'13px',color:PALETTE.textSecondary,lineHeight:1.7,marginBottom:'16px',fontFamily:"'IBM Plex Sans',sans-serif"}}>{project.description}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'18px'}}>
                  {project.tech.map((t,i)=>(
                    <span key={i} style={{backgroundColor:PALETTE.tagBg,color:PALETTE.tagText,border:`1px solid ${PALETTE.tagBorder}`,borderRadius:'4px',padding:'3px 8px',fontSize:'11px',fontWeight:500}}>{t}</span>
                  ))}
                </div>
                {project.buttons?.length > 0 && (
                  <div style={{display:'flex',gap:'9px',borderTop:`1px solid ${PALETTE.border}`,paddingTop:'16px'}}>
                    {project.buttons.map((btn,i)=><CardButton key={i} btn={btn}/>)}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div style={{backgroundColor:PALETTE.surface,border:`2px dashed ${PALETTE.border}`,borderRadius:'13px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'48px 24px',gap:'11px',opacity:.45}}>
            <Code size={26} color={PALETTE.textMuted}/>
            <span style={{fontSize:'13px',color:PALETTE.textMuted,fontFamily:"'IBM Plex Sans',sans-serif"}}>Más proyectos en camino…</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{padding:'96px 40px',borderTop:`1px solid ${PALETTE.border}`,maxWidth:'760px',margin:'0 auto'}}>
        <div className="sdiv"/>
        <h2 style={{fontSize:'34px',fontWeight:700,color:PALETTE.textPrimary,fontFamily:"'IBM Plex Sans',sans-serif",letterSpacing:'-.02em',marginBottom:'10px'}}>Trabajemos Juntos</h2>
        <p style={{color:PALETTE.textSecondary,fontSize:'14px',fontFamily:"'IBM Plex Sans',sans-serif",marginBottom:'40px',lineHeight:1.75,maxWidth:'420px'}}>
          Abierto a colaboraciones, proyectos freelance y posiciones en equipos de desarrollo de juegos.
        </p>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          {(()=>{const[h,setH]=useState(false);return(
            <a href="mailto:fazeares6567@gmail.com" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
              style={{display:'inline-flex',alignItems:'center',gap:'9px',backgroundColor:h?PALETTE.accentDark:PALETTE.accent,color:'#fff',border:`1px solid ${PALETTE.accent}`,borderRadius:'7px',padding:'12px 24px',fontSize:'13px',fontWeight:600,textDecoration:'none',fontFamily:'inherit',transition:'background-color .2s,transform .14s',transform:h?'translateY(-1px)':'none'}}>
              <Mail size={15}/>Enviar Email
            </a>
          );})()}
          {(()=>{const[h,setH]=useState(false);return(
            <a href="https://github.com/Froidd" target="_blank" rel="noopener noreferrer" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
              style={{display:'inline-flex',alignItems:'center',gap:'9px',backgroundColor:'transparent',color:PALETTE.textPrimary,border:`1px solid ${h?PALETTE.borderAccent:PALETTE.border}`,borderRadius:'7px',padding:'12px 24px',fontSize:'13px',fontWeight:600,textDecoration:'none',fontFamily:'inherit',transition:'border-color .2s,transform .14s',transform:h?'translateY(-1px)':'none'}}>
              <Github size={15}/>GitHub
            </a>
          );})()}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:`1px solid ${PALETTE.border}`,padding:'28px 40px',maxWidth:'1160px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'14px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
          <span style={{fontSize:'13px',fontWeight:700,color:PALETTE.accent}}>{'<Froid />'}</span>
          <div style={{display:'flex',gap:'7px',alignItems:'center'}}>
            <span style={{width:'6px',height:'6px',borderRadius:'50%',backgroundColor:PALETTE.success,display:'inline-block'}}/>
            <span style={{fontSize:'11px',color:PALETTE.textMuted,fontFamily:"'IBM Plex Sans',sans-serif"}}>Build: 2026.1.0 · UE 5.4+</span>
          </div>
        </div>
        <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
          {[PALETTE.accent,PALETTE.secondary,PALETTE.success,PALETTE.warning].map((c,i)=>(
            <div key={i} style={{width:'6px',height:'6px',borderRadius:'50%',backgroundColor:c,opacity:.45}}/>
          ))}
        </div>
        <span style={{fontSize:'12px',color:PALETTE.textMuted,fontFamily:"'IBM Plex Sans',sans-serif"}}>© 2026 Froid — Unreal Engine Developer</span>
      </footer>
    </div>
  );
};

export default UnrealEnginePortfolio;
