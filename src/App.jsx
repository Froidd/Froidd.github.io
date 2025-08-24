import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Play, Calendar, Award, Code, Zap, Star, Gamepad2, Gem, Gavel, BinaryIcon } from 'lucide-react';
import { FaBeer } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import screenshot from './assets/ScreenShot002.png';

const UnrealEnginePortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

// niveles posibles
const niveles = ["Principiante", "Básico", "Intermedio", "Intermedio-Avanzado","Avanzado", "Experto"];
const nivelActual = "Intermedio-Avanzado"; // este vendría de props o estado dinámico

// calcular progreso en base al índice
const progreso = ((niveles.indexOf(nivelActual) + 1) / niveles.length) * 100;

const projects = [
  {
    id: 1,
    title: "Half Sword Quality Of Life",
    category: "Miscellaneous",
    description: "En este proyecto usé ingeniería inversa para crear un mod de Half Sword, el cual mejoraba el juego de diferentes formas, con cámara lenta, spawner de ítems, creador de presets para guardar tus armas y/o armaduras. También añade una mejora gráfica usando postprocesado, utilizando un DLL que se inyecta y puede hacer cambios en el juego, empleando las funciones de Unreal para crear el mod.",
    image: screenshot,
    tech: ["Unreal Engine 5", "C++", "DLL Injection", "Reverse Engineering", "Post-Processing"],
    year: "2025",
    githubUrl: "https://github.com/Froidd/Half-Sword-Quality-Of-Life-Mod",
    demoUrl: "https://www.nexusmods.com/halfsword/mods/18",
    demoButtonText: "Nexus",
    demoButtonColor: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
  }
];

  const skills = [
    "Unreal Engine 5", "Scripting Visual con Blueprints", "Iluminación y Renderizado",
    "Creación de Materiales", "Optimización de Juegos",
    "Realidad Virtual", "Post-Procesado"
  ];

  const achievements = [
    { icon: Code, title: "4+ Años", subtitle: "Experiencia con UE" },
    { icon: Zap, title: "Optimización", subtitle: "Experto en rendimiento" },
    { icon: BinaryIcon, title: "Modding", subtitle: "Ingeniería inversa" },
    { icon: Star, title: "Innovación", subtitle: "Soluciones creativas" },
    { icon: Gavel, title: "Física", subtitle: "Simulación realista" },
    { icon: Gamepad2, title: "Multijugador", subtitle: "Experiencia entre jugadores" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Cursor follower */}

      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        
        {/* Enhanced animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse glow-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute top-60 left-60 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-80 right-80 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 left-1/3 w-8 h-8 border border-blue-400/30 rotate-45 float-animation"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 border border-purple-400/30 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-20 w-10 h-1 bg-gradient-to-r from-cyan-400 to-transparent float-animation" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
              Froid
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 blur-2xl -z-10"></div>
            </h1>
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Desarrollador de <span className="text-blue-400 font-semibold">Unreal Engine</span>
          </p>
          
          {/* Enhanced stats section */}
          <div className="flex justify-center flex-wrap gap-8 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-blue-400">{achievement.title}</div>
                    <div className="text-xs text-gray-400">{achievement.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="relative">
            <button 
              onClick={() => document.getElementById("proyectos").scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 glow-pulse">
              Explorar Proyectos
            </button>
          </div>
        
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative section divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-900 px-6 py-2 rounded-full border border-blue-400/30">
            <Star className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Sección Acerca de */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        {/* Background decoration */}
          <div className="absolute top-10 right-10 w-20 h-20 border border-purple-400/20 rounded-full float-animation"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg rotate-12 float-animation" style={{ animationDelay: '3s' }}></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h2 className="text-4xl font-bold mb-6 relative">
                Sobre Mí
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                Apasionado por <span className="text-blue-400 font-semibold">Desde 2021</span> he estado fascinado por <span className="text-green-400 font-semibold">Unreal Engine</span> y he invertido más de <span className="text-blue-400 font-semibold">4 años</span> en el desarrollo de experiencias interactivas y entornos virtuales envolventes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                Mi experiencia abarca el <span className="text-cyan-400 font-semibold">diseño de niveles</span>, la <span className="text-blue-400 font-semibold">secuenciación de blueprints</span>, la <span className="text-purple-400 font-semibold">iluminación</span> y
                las <span className="text-green-400 font-semibold">técnicas de optimización</span> que dan vida a los mundos virtuales.
              </p>
              
              {/* Additional info cards */}
              <div className="flex justify-center mt-8">
                <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-4 rounded-lg border border-blue-400/20">
            <div className="text-2xl font-bold text-blue-400">500+</div>
            <div className="text-sm text-gray-400">Horas de desarrollo</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced skills card with more decoration */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
              
              <div className="bg-gray-900 rounded-xl p-6 transform -rotate-3 relative">
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Habilidades Técnicas
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="text-sm bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 text-center hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/30 hover:scale-105 group">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
                
                {/* Progress indicators */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Nivel de Experiencia</span>
                    <span>Experto en Unreal</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progreso}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            <section id="proyectos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative"></section>
            Mis Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre mis trabajos más recientes en desarrollo de juegos y modificaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/25 border border-gray-700/50 group-hover:border-blue-400/30">
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"></div>

                <div className="aspect-video relative overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Bottom action buttons */}
                  {(project.githubUrl || project.demoUrl) && (
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${project.demoUrl ? 'flex-1' : 'w-full'} bg-black/70 backdrop-blur-sm border border-gray-600/50 hover:border-gray-400 rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-700/80 transition-all duration-300 flex items-center justify-center space-x-2`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                            <span>Ver Código</span>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${project.githubUrl ? 'flex-1' : 'w-full'} bg-gradient-to-r ${project.demoButtonColor || 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 border border-blue-400/30`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Play className="w-4 h-4" />
                            <span>{project.demoButtonText || "Demo en Vivo"}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600/50">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-purple-400 mb-4 font-medium bg-purple-600/10 px-3 py-1 rounded-full inline-block border border-purple-400/20">
                    {project.category}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-600/30 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Another decorative divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-900 px-6 py-2 rounded-full border border-purple-400/30">
            <Gamepad2 className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ¡Creemos Algo Increíble!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            ¿Tienes una idea para un proyecto? ¡Ponte en contacto conmigo a través de correo electrónico!, Que seguro que me interesará.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:fazeares6567@gmail.com" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 border border-blue-400/30">
                <Mail className="w-6 h-6" />
              </div>
            </a>
            <a href="https://github.com" className="group relative">
              <div className="absolute inset-0 bg-gray-800 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800 p-4 rounded-full hover:bg-gray-700 hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 group-hover:scale-110 border border-gray-600/50 hover:border-gray-400">
                <Github className="w-6 h-6" />
              </div>
            </a>
          </div>

          <div className="text-center">
            <a 
              href="mailto:fazeares6567@gmail.com" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border border-blue-400/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Ponte en Contacto</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <Star className="w-6 h-6 text-blue-400" />
            <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          <p className="text-gray-400 mb-4">
            &copy; 2025 Froid - Desarrollador de Unreal Engine
          </p>
          <p className="text-sm text-gray-500">
            Creando experiencias digitales inmersivas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UnrealEnginePortfolio;