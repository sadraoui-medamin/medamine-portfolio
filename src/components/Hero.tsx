
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

      <div className="container mx-auto px-6 text-center relative z-20">
        {/* Profile Image with advanced animations */}
        <div className="mb-8 relative inline-block group">
          <div className="relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse hover:animate-none transition-all duration-500 hover:scale-110">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-700 transition-colors duration-500">
                <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-500">DEV</span>
                
                {/* Sparkle effects on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="absolute w-4 h-4 text-yellow-400 animate-ping"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Rotating border effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-spin" style={{ animationDuration: '8s' }}></div>
            
            {/* Pulsing glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title with staggered animations */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in-up relative px-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:animate-pulse transition-all duration-300">
              Mohamed Amine Sadraoui
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground min-h-10 flex flex-wrap items-center justify-center animate-slide-in-left px-4">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold text-left relative">
              {text}
              {isTyping && <span className="animate-blink">|</span>}
              
              {/* Typing effect enhancement */}
              <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300" style={{ width: `${(text.length / fullText.length) * 100}%` }}></div>
            </span>
          </div>
        </div>

        {/* Description with typewriter reveal */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up opacity-0 px-4" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Passionate about creating amazing digital experiences with modern technologies. 
          I build scalable web applications and bring ideas to life through code.
        </p>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: Github, href: 'https://github.com/sadraoui-medamin/', label: 'GitHub', color: 'hover:text-gray-300' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sadraouiMedamin/', label: 'LinkedIn', color: 'hover:text-blue-400' },
            { icon: Mail, href: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDrRxqsKzQBPmLQNCPKMBPBprtBZZMmHMMJrQhJnNXnfzHqbVrHKjdSQjNtxGbJzzfNcNlB', label: 'Email', color: 'hover:text-red-400' },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className={`group relative p-4 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-125 hover:-translate-y-2 ${social.color} animate-fade-in-up opacity-0`}
              style={{ animationDelay: `${1.5 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <social.icon className="h-6 w-6 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card text-foreground px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border">
                {social.label}
              </div>
              
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              View My Work
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
          
          <a
            href="/Profile.pdf"
            download="Mohamed_Amine_Sadraoui_CV.pdf"
            className="group relative px-8 py-4 border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </span>
            
            {/* Fill effect */}
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="h-8 w-8 text-muted-foreground animate-pulse" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;