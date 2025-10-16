
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Database, Smartphone, Globe, Server, Palette, Zap, Star, Sparkles, Brain, Users, Clock, 
  FileCode, Coffee, Package, Box, Boxes, Wrench, GitBranch, Terminal, Cloud, Settings } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const convertToSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/\//g, '-');
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20' },
      pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    };
    return colorMap[color] || colorMap.blue;
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      lineColor: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'JavaScript', icon: FileCode, level: 90, description: 'Core web development language' },
        { name: 'TypeScript', icon: FileCode, level: 85, description: 'Type-safe JavaScript development' },
        { name: 'Java', icon: Coffee, level: 85, description: 'Enterprise-grade applications' },
        { name: 'Python', icon: Terminal, level: 80, description: 'Versatile backend programming' },
        { name: 'C/C#', icon: Code, level: 75, description: 'System and application development' },
        { name: 'PHP', icon: Server, level: 80, description: 'Server-side web development' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'green',
      lineColor: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'React.js', icon: Box, level: 90, description: 'Building responsive and interactive user interfaces' },
        { name: 'HTML5/CSS3', icon: FileCode, level: 95, description: 'Semantic markup and structure' },
        { name: 'Tailwind CSS', icon: Palette, level: 90, description: 'Utility-first CSS framework' },
        { name: 'Ant Design', icon: Boxes, level: 85, description: 'Enterprise UI design system' },
        { name: 'Material-UI', icon: Boxes, level: 85, description: 'React component library' },
        { name: 'Bootstrap', icon: Boxes, level: 85, description: 'Responsive framework' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'purple',
      lineColor: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Node.js', icon: Server, level: 85, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', icon: Server, level: 80, description: 'Node.js web framework' },
        { name: 'Spring Boot', icon: Coffee, level: 85, description: 'Java-based framework' },
        { name: 'Laravel', icon: Server, level: 80, description: 'PHP web framework' },
        { name: 'ASP.NET Core', icon: Cloud, level: 75, description: 'Cross-platform framework' },
        { name: 'RESTful APIs', icon: GitBranch, level: 90, description: 'API design and development' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'orange',
      lineColor: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Android (Java)', icon: Smartphone, level: 85, description: 'Native Android applications' },
        { name: 'Android Studio', icon: Settings, level: 85, description: 'Official Android IDE' },
        { name: 'Mobile UI/UX', icon: Palette, level: 80, description: 'Mobile-first design patterns' },
        { name: 'SQLite', icon: Database, level: 80, description: 'Lightweight database' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'teal',
      lineColor: 'from-teal-400 to-blue-400',
      skills: [
        { name: 'MongoDB', icon: Database, level: 85, description: 'NoSQL database' },
        { name: 'MySQL', icon: Database, level: 85, description: 'Relational database' },
        { name: 'Oracle', icon: Database, level: 75, description: 'Enterprise database system' },
        { name: 'SQLite', icon: Database, level: 80, description: 'Lightweight database' },
        { name: 'PostgreSQL', icon: Database, level: 80, description: 'Advanced open-source database' },
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: Wrench,
      color: 'pink',
      lineColor: 'from-pink-400 to-purple-400',
      skills: [
        { name: 'Git/GitHub', icon: GitBranch, level: 90, description: 'Version control system' },
        { name: 'Agile/Scrum', icon: Users, level: 85, description: 'Project management methodology' },
        { name: 'PowerBI', icon: Box, level: 80, description: 'Business analytics tool' },
        { name: 'Postman', icon: Package, level: 85, description: 'API testing platform' },
        { name: 'Docker', icon: Box, level: 75, description: 'Containerization platform' },
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
      // Observe section headers
      const headers = sectionRef.current.querySelectorAll('.section-header');
      headers.forEach((header) => observer.observe(header));
      
      // Observe each skill category
      const categories = sectionRef.current.querySelectorAll('.skill-category');
      categories.forEach((category) => observer.observe(category));
      
      // Observe each skill card
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

        {/* Skills by Category */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16 opacity-0 skill-category" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
            {/* Category Header */}
            <div className="flex items-center mb-8">
              <div className={`w-1 h-8 bg-gradient-to-b ${category.lineColor} rounded-full mr-4`}></div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <category.icon className="w-6 h-6" />
                {category.title}
              </h3>
              <div className={`flex-1 h-0.5 ml-4 bg-gradient-to-r ${category.lineColor} opacity-30`}></div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="skill-card group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden opacity-0"
                  style={{ 
                    animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                    animationFillMode: 'forwards'
                  }}
                  onMouseEnter={() => setActiveCategory(categoryIndex * 100 + skillIndex)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onClick={() => navigate(`/skill/${convertToSlug(skill.name)}`)}
                >
                  {/* Animated background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.lineColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Sparkle effects */}
                  {activeCategory === (categoryIndex * 100 + skillIndex) && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
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

                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getColorClasses(category.color).bg} border ${getColorClasses(category.color).border}`}>
                        <skill.icon className={`w-5 h-5 ${getColorClasses(category.color).text}`} />
                      </div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getColorClasses(category.color).bg} ${getColorClasses(category.color).text} border ${getColorClasses(category.color).border}`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative z-10 mb-4">
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.lineColor} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground relative z-10 group-hover:text-foreground transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Hover border glow */}
                  <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${category.lineColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}

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
