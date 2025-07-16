
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block group">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DEV</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 h-10 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[280px] text-left">
              {text}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in">
          Passionate about creating amazing digital experiences with modern technologies. 
          I build scalable web applications and bring ideas to life through code.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
