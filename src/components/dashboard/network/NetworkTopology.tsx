import React from 'react';

export function NetworkTopology() {
  return (
    <div className="aspect-video bg-white rounded-lg flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <img 
          src="/topology.png"
          alt="网络拓扑图"
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
      </div>
    </div>
  );
}