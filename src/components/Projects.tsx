
import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Zap, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
              Featured Projects
            </span>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/3 transform -translate-x-1/2">
              <Star className="w-5 h-5 text-yellow-400 animate-spin opacity-60" style={{ animationDuration: '4s' }} />
            </div>
            <div className="absolute -top-6 right-1/3 transform translate-x-1/2">
              <Zap className="w-4 h-4 text-blue-400 animate-bounce opacity-60" />
            </div>
          </h2>
          
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-sm animate-pulse"></div>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Enhanced Featured Projects */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold text-white mb-8 text-center flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400 mr-3"></div>
            Featured Work
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent ml-3"></div>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${0.5 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
                  </div>
                  
                  {/* Category Badge with enhanced styling */}
                  <div className={`absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/50 group-hover:border-blue-500/50 transition-all duration-300`}>
                    <project.icon className="h-4 w-4 text-blue-400 group-hover:animate-pulse" />
                    <span className="text-sm text-white font-medium">{project.category}</span>
                  </div>

                  {/* Enhanced Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="group/link p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-gray-600/50 hover:border-blue-500/50"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      className="group/link p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:text-green-400 transition-all duration-300 hover:scale-110 hover:-rotate-12 border border-gray-600/50 hover:border-green-500/50"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  {/* View indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-white">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6 relative">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-b-xl`}></div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 group-hover:scale-105"
                        style={{ transitionDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </div>

                {/* Sparkle effects */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.3}s`,
                          opacity: 0.7
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Other Projects */}
        <div>
          <h3 className={`text-2xl font-bold text-white mb-8 text-center flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
            Other Projects
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent ml-3"></div>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${1 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Project Links */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-gray-600/50"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-green-400 transition-all duration-300 hover:scale-110 border border-gray-600/50"
                    >
                      <ExternalLink className="h-4 w-4" />
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
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300 group-hover:text-white transition-colors duration-300"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
