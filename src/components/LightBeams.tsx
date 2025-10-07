
import React from 'react';

const LightBeams = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-1 opacity-10 overflow-hidden">
      {/* Simplified scanning light beams for performance */}
      <div className="absolute inset-0">
        {/* Horizontal scanning beams - reduced */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-horizontal" style={{ top: '30%', animationDuration: '12s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-horizontal" style={{ top: '70%', animationDuration: '15s', animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default LightBeams;
