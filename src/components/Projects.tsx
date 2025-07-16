import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Zap, Star, Eye, Sparkles } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web App',
      icon: Globe,
      github: '#',
      live: '#',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and advanced filtering.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'Mobile App',
      icon: Smartphone,
      github: '#',
      live: '#',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts, real-time data visualization, and custom reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'D3.js', 'MongoDB', 'TailwindCSS'],
      category: 'Dashboard',
      icon: Database,
      github: '#',
      live: '#',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, photo sharing, and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['React', 'GraphQL', 'AWS', 'PostgreSQL'],
      category: 'Web App',
      icon: Globe,
      github: '#',
      live: '#',
      featured: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Health APIs', 'Charts'],
      category: 'Mobile App',
      icon: Smartphone,
      github: '#',
      live: '#',
      featured: false,
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'AI Code Assistant',
      description: 'An AI-powered code assistant that helps developers write better code with intelligent suggestions and analysis.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI API', 'React', 'Docker'],
      category: 'AI Tool',
      icon: Code,
      github: '#',
      live: '#',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated grid with moving pattern */}
        <div className="absolute inset-0 opacity-5 cyber-grid"></div>
        
        {/* Radial gradient pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-glow"></div>
        
        {/* Moving diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-right" style={{ top: '20%', animationDuration: '8s' }}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-left" style={{ top: '60%', animationDuration: '10s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header with particles */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-cyan-400 transition-all duration-500 bg-[length:200%_100%] animate-shimmer">
                Featured Projects
              </span>
              
              {/* Floating icons around title */}
              <Star className="absolute -top-8 -left-8 w-5 h-5 text-yellow-400 animate-spin opacity-60" style={{ animationDuration: '6s' }} />
              <Zap className="absolute -top-6 -right-6 w-4 h-4 text-blue-400 animate-bounce opacity-60" />
              <Sparkles className="absolute -bottom-2 left-1/4 w-3 h-3 text-purple-400 animate-pulse opacity-70" />
            </h2>
            
            {/* Animated underline */}
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-sm animate-pulse"></div>
              <div className="absolute inset-0 w-8 h-1 bg-white mx-auto rounded-full animate-slide-right opacity-60"></div>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Enhanced Featured Projects */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold text-white mb-8 text-center flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400 mr-3 animate-pulse"></div>
            <span className="relative">
              Featured Work
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-lg animate-glow"></div>
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent ml-3 animate-pulse"></div>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer transform-gpu ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${0.5 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={handleMouseMove}
              >
                {/* Mouse follow glow effect */}
                <div 
                  className="absolute pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 w-64 h-64 bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-xl"
                  style={{
                    left: mousePosition.x - 128,
                    top: mousePosition.y - 128,
                  }}
                />

                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Multi-layer overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply`}></div>
                  
                  {/* Multiple scanning line effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-slide-down" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  
                  {/* Category Badge with enhanced styling */}
                  <div className={`absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110`}>
                    <project.icon className="h-4 w-4 text-blue-400 group-hover:animate-pulse" />
                    <span className="text-sm text-white font-medium">{project.category}</span>
                  </div>

                  {/* Enhanced Project Links with ripple effect */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="group/link relative p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-600/50 hover:border-blue-500/50 overflow-hidden"
                    >
                      <Github className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-blue-400/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-full"></div>
                    </a>
                    <a
                      href={project.live}
                      className="group/link relative p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:text-green-400 transition-all duration-300 hover:scale-110 hover:-rotate-12 border border-gray-600/50 hover:border-green-500/50 overflow-hidden"
                    >
                      <ExternalLink className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-green-400/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-full"></div>
                    </a>
                  </div>

                  {/* Enhanced view indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-600/50">
                      <Eye className="h-4 w-4 text-blue-400 animate-pulse" />
                      <span className="text-sm text-white">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6 relative">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-b-xl`}></div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies with stagger animation */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 group-hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        style={{ transitionDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Animated progress indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </div>

                {/* Enhanced sparkle effects */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.7
                        }}
                      >
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-blue-400/50 rounded-full blur-sm animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Other Projects */}
        <div>
          <h3 className={`text-2xl font-bold text-white mb-8 text-center flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-3 animate-pulse"></div>
            <span className="relative">
              Other Projects
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-lg animate-glow"></div>
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent ml-3 animate-pulse"></div>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer transform-gpu ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${1 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                onMouseMove={handleMouseMove}
              >
                {/* Mouse follow glow effect */}
                <div 
                  className="absolute pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 w-32 h-32 bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-xl"
                  style={{
                    left: mousePosition.x - 64,
                    top: mousePosition.y - 64,
                  }}
                />

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 mix-blend-multiply`}></div>
                  
                  {/* Scanning effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="group/link relative p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-gray-600/50 overflow-hidden"
                    >
                      <Github className="h-4 w-4 relative z-10" />
                      <div className="absolute inset-0 bg-blue-400/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-full"></div>
                    </a>
                    <a
                      href={project.live}
                      className="group/link relative p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-green-400 transition-all duration-300 hover:scale-110 border border-gray-600/50 overflow-hidden"
                    >
                      <ExternalLink className="h-4 w-4 relative z-10" />
                      <div className="absolute inset-0 bg-green-400/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-full"></div>
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-center mb-2 relative z-10">
                    <project.icon className="h-4 w-4 text-blue-400 mr-2 group-hover:animate-pulse" />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{project.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 relative z-10">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300 group-hover:text-white transition-all duration-300 hover:scale-105"
                        style={{ transitionDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Animated border bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
