"use client";

import React from 'react';

const FrameHeader: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[30] p-4 md:p-8">
      {/* Viewport Borders */}
      <div className="absolute inset-4 md:inset-8 border border-[#1A1A1C]" />
      
      {/* Corner Labels */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 p-2 bg-[#080809] pointer-events-none">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
          SHIVANSH GARG // SYSTEMS & VISUAL ENGINEER
        </span>
      </div>

      {/* Redundant Top-Right Registry Removed - Consolidated into Contact Section */}

      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 p-2 bg-[#080809] pointer-events-none">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
          LOCATION: INDIA // ASIA_PACIFIC
        </span>
      </div>

      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 p-2 bg-[#080809] pointer-events-none">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
          STATUS: SERVER ACTIVE
        </span>
      </div>
    </div>
  );
};

export default FrameHeader;
