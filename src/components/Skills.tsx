
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Smartphone, Globe, Server, Palette, Zap, Star, Sparkles, Brain, Users, Clock } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-500/50',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C/C#', level: 75 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-green-400 to-emerald-400',
      borderColor: 'border-green-500/50',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Ant Design', level: 85 },
        { name: 'Material-UI', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-500/50',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Laravel', level: 75 },
        { name: 'ASP.NET Core', level: 70 },
        { name: 'RESTful APIs', level: 90 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-orange-400 to-red-400',
      borderColor: 'border-orange-500/50',
      skills: [
        { name: 'Android (Java)', level: 80 },
        { name: 'Android Studio', level: 85 },
        { name: 'Mobile UI/UX', level: 75 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-teal-400 to-blue-400',
      borderColor: 'border-teal-500/50',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'Oracle', level: 75 },
        { name: 'SQLite', level: 80 },
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: Palette,
      color: 'from-pink-400 to-purple-400',
      borderColor: 'border-pink-500/50',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'PowerBI', level: 75 },
        { name: 'Postman', level: 85 },
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

        {/* Behavioral Skills Section */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <span>Behavioral Skills</span>
            <div className="ml-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {behavioralSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ 
                  animationDelay: `${0.8 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`relative z-10 p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-all duration-500 group-hover:scale-110`}>
                  <skill.icon className={`h-6 w-6 ${skill.color} group-hover:animate-pulse`} />
                </div>
                
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                  {skill.name}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Technologies */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
            <span>Development Tools</span>
            <div className="ml-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Visual Studio Code', 'Eclipse', 'IntelliJ IDEA', 'Android Studio', 
              'StarUML', 'Cloudinary', 'Prelude', 'Odoo'
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
