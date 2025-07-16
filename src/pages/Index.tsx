import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import FloatingElements from '../components/FloatingElements';
import ParticleSystem from '../components/ParticleSystem';
import LightBeams from '../components/LightBeams';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Enhanced Background System */}
      <ParticleSystem />
      <LightBeams />
      <FloatingElements />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Enhanced floating geometric shapes with more variety */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${
                i % 8 === 0 ? 'w-3 h-3 bg-blue-400 rounded-full animate-orbit' :
                i % 8 === 1 ? 'w-2 h-2 bg-purple-400 rounded-full animate-spiral' :
                i % 8 === 2 ? 'w-2.5 h-2.5 bg-pink-400 rounded-sm rotate-45 animate-liquid-motion' :
                i % 8 === 3 ? 'w-4 h-0.5 bg-cyan-400 rounded-full animate-wave-motion' :
                i % 8 === 4 ? 'w-1.5 h-1.5 bg-green-400 rounded-full animate-float-complex' :
                i % 8 === 5 ? 'w-2 h-2 bg-yellow-400 rounded-sm animate-morph' :
                i % 8 === 6 ? 'w-3 h-1 bg-red-400 rounded-full animate-glitch-1' :
                'w-1 h-3 bg-indigo-400 rounded-full animate-glitch-2'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${4 + Math.random() * 12}s`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid"></div>
        </div>
        
        {/* Multiple pulsing gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/5 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
        
        {/* Moving light beams */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-right" style={{ top: '20%', animationDuration: '15s' }}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-left" style={{ top: '40%', animationDuration: '18s' }}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-slide-right" style={{ top: '60%', animationDuration: '20s' }}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide-left" style={{ top: '80%', animationDuration: '22s' }}></div>
        </div>
        
        {/* Vertical light beams */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-slide-down" style={{ left: '25%', animationDuration: '12s' }}></div>
          <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-slide-down" style={{ left: '75%', animationDuration: '16s', animationDelay: '3s' }}></div>
        </div>
        
        {/* Rotating elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-32 h-32 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/3 right-1/6 w-24 h-24 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-2/3 left-2/3 w-16 h-16 border border-pink-400/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        {/* Digital rain effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-20 bg-gradient-to-b from-green-400 to-transparent digital-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced morphing blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-gradient-radial from-blue-500/20 to-transparent animate-morph blur-3xl" />
          <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-gradient-radial from-purple-500/20 to-transparent animate-morph-reverse blur-2xl" />
          <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-gradient-radial from-pink-500/20 to-transparent animate-morph-slow blur-xl" />
          <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-gradient-radial from-cyan-500/15 to-transparent animate-liquid-motion blur-3xl" />
        </div>
        
        {/* Energy vortex effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute inset-4 border border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
            <div className="absolute inset-6 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '18s' }} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            © 2024 Full Stack Developer. Built with React & Tailwind CSS
          </p>
          <div className="mt-2 flex items-center justify-center space-x-1">
            <span className="text-gray-500 text-sm">Made with</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-500 text-sm">and lots of coffee</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
