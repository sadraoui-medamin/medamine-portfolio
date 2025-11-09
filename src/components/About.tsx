import { useRef, useEffect, useState } from 'react';
import { Code, Coffee, Tv, BookOpen, Star,  GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const interests = [
    { icon: Code, label: 'Coding', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/20' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400', bg: 'from-amber-500/20 to-amber-600/20' },
    { icon: Tv, label: 'Watching', color: 'text-green-400', bg: 'from-green-500/20 to-green-600/20' },
    { icon: BookOpen, label: 'Reading', color: 'text-purple-400', bg: 'from-purple-500/20 to-gray-600/20' },
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content with staggered animations */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                  Hi, I'm <span className="text-blue-400 font-semibold">Mohamed Amine Sadraoui</span>, 
                  a passionate full-stack developer with a Bachelor's degree in Business Information Systems 
                  from the Faculty of Economic Sciences and Management of Nabeul (2024).
                </p>
                
                {/* Highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                  I specialize in creating digital solutions that make a difference, with experience in 
                  web development, mobile applications, and database management. I love turning complex 
                  problems into simple, beautiful, and intuitive designs.
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Education & Location Info */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Education</h4>
                    <p className="text-gray-400 text-sm">Bachelor's in Business Information Systems</p>
                    <p className="text-gray-500 text-xs">Faculty of Economic Sciences - Nabeul (2024)</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400 text-sm">Ariana, Soukra - Tunisia</p>
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
                  <div className="grid grid-cols-1 gap-4">
                    <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5  "></div>
                      <blockquote className="text-gray-300 italic text-center relative z-10hover:text-white transition-colors duration-500 my-2">
                        Simplicity is the soul of efficiency.
                      </blockquote>
                      {/* Quote decoration */}
                      <div className="absolute top-2 left-4 text-6xl text-blue-400/20 font-serif">"</div>
                      <div className="absolute bottom-2 right-4 text-6xl text-blue-400/20 font-serif rotate-180">"</div>
                  </div>

                    <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5  "></div>
                      
                      <blockquote className="text-gray-300 italic text-center relative z-10 hover:text-white transition-colors duration-500 my-2">
                        First, solve the problem. Then, write the code.
                      </blockquote>
                      {/* Quote decoration */}
                      <div className="absolute top-2 left-4 text-6xl text-blue-400/20 font-serif">"</div>
                      <div className="absolute bottom-2 right-4 text-6xl text-blue-400/20 font-serif rotate-180">"</div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;