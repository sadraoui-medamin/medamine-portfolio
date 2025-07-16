
import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-500 ${
      isLoading ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-500/20 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo and content */}
      <div className="relative z-10 text-center">
        {/* Main logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 animate-float-slow shadow-glow">
            <Code2 className="w-12 h-12 text-white animate-pulse" />
          </div>
          
          {/* Orbiting elements */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute -top-4 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse transform -translate-x-1/2" />
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse transform -translate-y-1/2" />
            <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse transform -translate-x-1/2" />
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse transform -translate-y-1/2" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          Full Stack Developer
        </h1>
        
        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-loading-bar" />
        </div>
        
        <p className="text-gray-400 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Loading amazing experiences...
        </p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-float-complex opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
