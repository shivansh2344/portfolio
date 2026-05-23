"use client";

import React from 'react';
import { skillDeck, achievements } from '../../data/portfolioData';

const PipelineNode: React.FC = () => {
  return (
    <>
      {/* PANEL 03: THE SKILL DECK VECTOR MATRICES */}
      <section className="w-screen h-screen shrink-0 relative p-6 sm:p-12 md:p-24 flex flex-col justify-center items-start select-none overflow-y-auto bg-[#080809]">
        <div className="max-w-6xl w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 block mb-12 font-semibold">
            03 // SKILL DECK VECTOR MATRICES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {skillDeck.map((group, index) => (
              <div 
                key={index} 
                className="border border-[#1A1A1C] p-8 bg-[#0c0c0e]/40 backdrop-blur-sm group hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-emerald-500 transition-colors">
                    {group.category}
                  </span>
                  
                  <div className="flex flex-wrap gap-3">
                    {group.tools.map((tool, i) => (
                      <div 
                        key={i} 
                        className="px-4 py-2 border border-[#1A1A1C] bg-[#1A1A1C]/30 font-mono text-[11px] uppercase tracking-wider text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 04: ACHIEVEMENTS & LEDGER BADGES */}
      <section className="w-screen h-screen shrink-0 relative p-6 sm:p-12 md:p-24 flex flex-col justify-center items-start select-none overflow-y-auto bg-[#080809]">
        <div className="max-w-6xl w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 block mb-12 font-semibold">
            04 // PRO GAMER LOGS & ACHIEVEMENT INDEX
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {achievements.map((badge, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 border border-[#1A1A1C] p-8 bg-[#0c0c0e]/40 backdrop-blur-sm group hover:bg-[#FAF9F6]/[0.02] transition-all duration-300"
              >
                <div className={`shrink-0 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-tighter border ${
                  badge.rank === 'LEGENDARY' ? 'border-orange-500 text-orange-500 bg-orange-500/10' :
                  badge.rank === 'EPIC' ? 'border-purple-500 text-purple-500 bg-purple-500/10' :
                  badge.rank === 'RARE' ? 'border-blue-500 text-blue-500 bg-blue-500/10' :
                  'border-slate-500 text-slate-500 bg-slate-500/10'
                }`}>
                  {badge.rank}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-[#FAF9F6]">
                    {badge.title}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 leading-relaxed max-w-sm">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-[#1A1A1C] w-full flex justify-between items-end">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-700 block">
                SYSTEM_FINAL_PHASE // COMPLETED
              </span>
              <span className="font-display font-black text-2xl uppercase tracking-tighter text-[#FAF9F6]">
                THE SILICON CANVAS.
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">v0.1.0-STABLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PipelineNode;
