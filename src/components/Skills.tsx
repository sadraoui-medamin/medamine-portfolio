
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Smartphone, Globe, Server, Palette, Zap, Star, Sparkles, Brain, Users, Clock, 
  FileCode, Coffee, Package, Box, Boxes, Wrench, GitBranch, Terminal, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        'JavaScript',
        'TypeScript',
        'Java',
        'Python',
        'C/C#',
        'PHP',
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-green-400 to-emerald-400',
      skills: [
        'React.js',
        'HTML5/CSS3',
        'Tailwind CSS',
        'Ant Design',
        'Material-UI',
        'Bootstrap',
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-purple-400 to-pink-400',
      skills: [
        'Node.js',
        'Express.js',
        'Spring Boot',
        'Laravel',
        'ASP.NET Core',
        'RESTful APIs',
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-orange-400 to-red-400',
      skills: [
        'Android (Java)',
        'Android Studio',
        'Mobile UI/UX',
        'SQLite',
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-teal-400 to-blue-400',
      skills: [
        'MongoDB',
        'MySQL',
        'Oracle',
        'SQLite',
        'PostgreSQL',
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: Wrench,
      color: 'from-pink-400 to-purple-400',
      skills: [
        'Git/GitHub',
        'Agile/Scrum',
        'PowerBI',
        'Postman',
        'Docker',
      ]
    },
  ];

  const behavioralSkills = [
    { name: 'Team Collaboration', icon: Users, color: 'text-blue-400' },
    { name: 'Complex Problem Solving', icon: Brain, color: 'text-purple-400' },
    { name: 'Time Management', icon: Clock, color: 'text-green-400' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      // Observe the section itself
      observer.observe(sectionRef.current);
      
      // Observe each skill category card
      const cards = sectionRef.current.querySelectorAll('.skill-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative bg-secondary/20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="section-header text-center mb-16 transition-all duration-1000 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
              Skills & Expertise
            </span>
            
            {/* Floating decorations */}
            <div className="absolute -top-6 left-1/4 transform -translate-x-1/2">
              <Zap className="w-5 h-5 text-yellow-400 animate-bounce opacity-60" />
            </div>
            <div className="absolute -top-4 right-1/4 transform translate-x-1/2">
              <Star className="w-4 h-4 text-blue-400 animate-pulse opacity-60" />
            </div>
          </h2>
          
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-md animate-pulse"></div>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden opacity-0"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Animated background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Sparkle effects */}
              {activeCategory === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="absolute w-3 h-3 text-white animate-ping opacity-60"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Category Header */}
              <div className="flex flex-col items-center text-center mb-6 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>

              {/* Enhanced Skills List */}
              <div className="flex flex-wrap gap-2 relative z-10 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 backdrop-blur-sm rounded-full text-sm text-foreground border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25`}
                    style={{ 
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover border glow */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Behavioral Skills Section */}
        <div className="mt-16 transition-all duration-1000 opacity-0 section-header">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <span>Behavioral Skills</span>
            <div className="ml-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {behavioralSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative flex items-center space-x-4 p-6 bg-card/40 rounded-xl backdrop-blur-md border border-border/50 hover:border-primary/50 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ 
                  animationDelay: `${0.8 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`relative z-10 p-3 rounded-lg bg-muted group-hover:bg-accent transition-all duration-500 group-hover:scale-110`}>
                  <skill.icon className={`h-6 w-6 ${skill.color} group-hover:animate-pulse`} />
                </div>
                
                <span className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-500 font-medium">
                  {skill.name}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Scrolling Development Tools */}
        <div className="mt-16 transition-all duration-1000 opacity-0 section-header">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center justify-center">
            <span>Development Tools</span>
            <div className="ml-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </h3>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-infinite-scroll">
              {/* First set */}
              {[
                'Visual Studio Code', 'Eclipse', 'IntelliJ IDEA', 'Android Studio', 
                'StarUML', 'Cloudinary', 'Prelude', 'Odoo'
              ].map((tech, index) => (
                <span
                  key={`first-${tech}`}
                  className="group relative px-6 py-3 mx-2 bg-card/40 rounded-full text-card-foreground border border-border/50 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 cursor-pointer hover:scale-110 whitespace-nowrap flex-shrink-0 backdrop-blur-md"
                >
                  {tech}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                'Visual Studio Code', 'Eclipse', 'IntelliJ IDEA', 'Android Studio', 
                'StarUML', 'Cloudinary', 'Prelude', 'Odoo'
              ].map((tech, index) => (
                <span
                  key={`second-${tech}`}
                  className="group relative px-6 py-3 mx-2 bg-card/40 rounded-full text-card-foreground border border-border/50 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 cursor-pointer hover:scale-110 whitespace-nowrap flex-shrink-0 backdrop-blur-md"
                >
                  {tech}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
