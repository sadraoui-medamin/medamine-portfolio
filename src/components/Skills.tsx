
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Smartphone, Globe, Server, Palette, Zap, Star, Sparkles } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-500/50',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-400 to-emerald-400',
      borderColor: 'border-green-500/50',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-500/50',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Prisma', level: 85 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-400 to-red-400',
      borderColor: 'border-orange-500/50',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 },
      ]
    },
    {
      title: 'DevOps',
      icon: Globe,
      color: 'from-teal-400 to-blue-400',
      borderColor: 'border-teal-500/50',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 85 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'from-pink-400 to-purple-400',
      borderColor: 'border-pink-500/50',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Framer Motion', level: 88 },
      ]
    },
  ];

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
    <section ref={sectionRef} id="skills" className="py-20 relative bg-gray-800/20 overflow-hidden">
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
              Skills & Technologies
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:${category.borderColor} rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
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
              <div className="flex items-center mb-6 relative z-10">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">{category.title}</h3>
              </div>

              {/* Enhanced Skills List */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    
                    <div className="relative w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      {/* Progress bar with animation */}
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                      </div>
                      
                      {/* Glow effect */}
                      <div
                        className={`absolute top-0 h-full bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover border glow */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Technologies */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
            <span>Other Technologies</span>
            <div className="ml-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Linux', 'VS Code', 'Postman', 'Jest', 'Cypress', 
              'Webpack', 'Vite', 'Sass', 'Firebase', 'Supabase', 'Stripe'
            ].map((tech, index) => (
              <span
                key={tech}
                className="group relative px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
                style={{ 
                  animationDelay: `${0.8 + index * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {tech}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
