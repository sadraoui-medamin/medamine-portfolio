
import React from 'react';

const LightBeams = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-1 opacity-20 overflow-hidden">
      {/* Scanning light beams */}
      <div className="absolute inset-0">
        {/* Horizontal scanning beams */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-horizontal" style={{ top: '20%', animationDuration: '8s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-horizontal" style={{ top: '45%', animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-horizontal" style={{ top: '70%', animationDuration: '10s', animationDelay: '4s' }} />
        
        {/* Vertical scanning beams */}
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-scan-vertical" style={{ left: '25%', animationDuration: '15s' }} />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-400 to-transparent animate-scan-vertical" style={{ left: '75%', animationDuration: '18s', animationDelay: '3s' }} />
        
        {/* Diagonal scanning beams */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-scan-diagonal transform rotate-45 origin-center" style={{ top: '30%', animationDuration: '20s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-scan-diagonal transform -rotate-45 origin-center" style={{ top: '60%', animationDuration: '16s', animationDelay: '5s' }} />
      </div>

      {/* Pulsing light sources */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse-glow-intense" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse-glow-intense" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse-glow-intense" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse-glow-intense" style={{ animationDelay: '3s' }} />

      {/* Energy streams */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-blue-400/50 via-transparent to-purple-400/50 animate-energy-flow" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-purple-400/50 via-transparent to-pink-400/50 animate-energy-flow-horizontal" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default LightBeams;
