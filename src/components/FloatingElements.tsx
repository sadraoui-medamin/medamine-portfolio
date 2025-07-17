
import React from 'react';
import { Sparkles, Star, Zap, Diamond, Circle, Square, Triangle } from 'lucide-react';

const FloatingElements = () => {
  const shapes = [
    { Icon: Sparkles, color: 'text-blue-400', size: 'w-4 h-4' },
    { Icon: Star, color: 'text-purple-400', size: 'w-3 h-3' },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-5 h-5' },
    { Icon: Diamond, color: 'text-pink-400', size: 'w-3 h-3' },
    { Icon: Circle, color: 'text-cyan-400', size: 'w-2 h-2' },
    { Icon: Square, color: 'text-green-400', size: 'w-3 h-3' },
    { Icon: Triangle, color: 'text-red-400', size: 'w-4 h-4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Floating geometric shapes with complex animations - no mouse following */}
      {[...Array(15)].map((_, i) => {
        const ShapeIcon = shapes[i % shapes.length].Icon;
        return (
          <div
            key={i}
            className={`absolute ${shapes[i % shapes.length].color} ${shapes[i % shapes.length].size} animate-float-complex opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <ShapeIcon className="w-full h-full animate-spin-slow" />
          </div>
        );
      })}

      {/* Wave motion elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`wave-${i}`}
          className="absolute w-1 h-20 bg-gradient-to-b from-blue-400/30 via-purple-400/20 to-transparent animate-wave-motion"
          style={{
            left: `${(i * 12.5) + Math.random() * 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Morphing blobs - static positions */}
      <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-morph blur-2xl" />
      <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full animate-morph-reverse blur-2xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full animate-morph-slow blur-xl" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingElements;
