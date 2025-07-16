
import React, { useRef, useEffect, useState } from 'react';
import { Code, Coffee, Gamepad2, Music, Zap, Star, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const interests = [
    { icon: Code, label: 'Coding', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/20' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400', bg: 'from-amber-500/20 to-amber-600/20' },
    { icon: Gamepad2, label: 'Gaming', color: 'text-green-400', bg: 'from-green-500/20 to-green-600/20' },
    { icon: Music, label: 'Music', color: 'text-purple-400', bg: 'from-purple-500/20 to-purple-600/20' },
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
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with enhanced animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
              About Me
            </span>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Star className="w-6 h-6 text-yellow-400 animate-pulse opacity-60" />
            </div>
          </h2>
          
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content with staggered animations */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                  I'm a passionate full-stack developer with over 3 years of experience in creating 
                  digital solutions that make a difference. I love turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
                
                {/* Highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good gaming session. I believe in continuous 
                  learning and staying up-to-date with the latest industry trends.
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="group text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-4xl font-bold text-blue-400 group-hover:scale-125 transition-transform duration-500 relative z-10">
                    50+
                    <Rocket className="inline-block w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-gray-400 relative z-10">Projects Completed</div>
                  
                  {/* Particle burst effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="group text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-4xl font-bold text-purple-400 group-hover:scale-125 transition-transform duration-500 relative z-10">
                    3+
                    <Zap className="inline-block w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-gray-400 relative z-10">Years Experience</div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interests with advanced hover effects */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                What I Love
                <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={interest.label}
                    className={`group relative flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                      hoveredInterest === index ? 'shadow-2xl shadow-blue-500/25' : ''
                    }`}
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    onMouseEnter={() => setHoveredInterest(index)}
                    onMouseLeave={() => setHoveredInterest(null)}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className={`relative z-10 p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <interest.icon className={`h-6 w-6 ${interest.color} group-hover:animate-pulse`} />
                    </div>
                    
                    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                      {interest.label}
                    </span>
                    
                    {/* Sparkle effects */}
                    {hoveredInterest === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Quote */}
              <div className={`group mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 hover:scale-105 relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '1.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <blockquote className="text-gray-300 italic text-center relative z-10 group-hover:text-white transition-colors duration-500">
                  "Code is like humor. When you have to explain it, it's bad."
                </blockquote>
                <cite className="block text-right text-blue-400 mt-2 relative z-10 group-hover:text-blue-300 transition-colors duration-500">- Cory House</cite>
                
                {/* Quote decoration */}
                <div className="absolute top-2 left-4 text-6xl text-blue-400/20 font-serif">"</div>
                <div className="absolute bottom-2 right-4 text-6xl text-blue-400/20 font-serif rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
