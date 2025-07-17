import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Zap, Diamond, Circle, Square, Triangle } from 'lucide-react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  // Smooth interpolation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId: number;

    const smoothFollow = () => {
      setMousePosition(prev => {
        const dx = (targetPosition.current.x - prev.x) * 0.05;
        const dy = (targetPosition.current.y - prev.y) * 0.05;
        return { x: prev.x + dx, y: prev.y + dy };
      });
      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      {/* Smoothly following background blobs */}
      <div
        className="absolute w-64 h-64 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
        }}
      />
      <div
        className="absolute w-32 h-32 bg-gradient-radial from-pink-500/15 to-transparent rounded-full transition-transform duration-1500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 64}px, ${mousePosition.y - 64}px) rotate(${Date.now() * 0.01}deg)`,
        }}
      />

      {/* Geometric shapes floating */}
      {[...Array(15)].map((_, i) => {
        const { Icon, color, size } = shapes[i % shapes.length];
        return (
          <div
            key={i}
            className={`absolute ${color} ${size} opacity-60 transition-transform duration-1000 ease-in-out`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Icon className="w-full h-full animate-spin-slow" />
          </div>
        );
      })}

      {/* Wave elements */}
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

      {/* Morphing blobs */}
      <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-morph blur-2xl" />
      <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full animate-morph-reverse blur-2xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full animate-morph-slow blur-xl" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingElements;
