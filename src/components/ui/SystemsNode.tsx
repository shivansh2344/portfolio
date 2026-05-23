"use client";

import React from 'react';
import { workHistory } from '../../data/portfolioData';

const SystemsNode: React.FC = () => {
  return (
    <section className="w-screen h-screen shrink-0 relative p-6 sm:p-12 md:p-24 flex flex-col justify-center items-start select-none overflow-y-auto">
      <div className="max-w-7xl w-full">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 block mb-12 font-semibold">
          02 // HISTORICAL COMPUTE NODES
        </span>

        <div className="flex flex-col md:flex-row gap-8 w-full overflow-x-visible">
          {workHistory.map((node, index) => (
            <div 
              key={index} 
              className="flex-1 border border-[#1A1A1C] p-8 bg-[#0c0c0e]/40 backdrop-blur-sm group hover:border-slate-500 transition-colors duration-500"
            >
              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/60 block">
                    {node.period}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-[-0.04em] text-[#FAF9F6] leading-none">
                    {node.company}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-500 transition-colors">
                    {node.role}
                  </span>
                </div>
                
                <div className="h-px w-full bg-[#1A1A1C] group-hover:bg-slate-700 transition-colors" />
                
                <div className="space-y-4">
                  {node.impact.map((text, i) => (
                    <p key={i} className="font-mono text-[11px] uppercase tracking-wider text-slate-400 leading-relaxed border-l border-[#1A1A1C] pl-4">
                      {text}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">NODE_ACTIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsNode;
