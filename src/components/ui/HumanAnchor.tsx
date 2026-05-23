"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HumanAnchor = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      // Identity Activation Sequence: Opacity escalation on scroll
      gsap.fromTo(imgRef.current, 
        { opacity: 0.10 },
        {
          opacity: 0.40,
          scrollTrigger: {
            trigger: "body", // Track global scroll footprint
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={imgRef}
      className="fixed right-[5%] bottom-[5%] w-[450px] h-[550px] z-[5] pointer-events-none mix-blend-luminosity will-change-opacity transition-none overflow-hidden"
    >
      <Image
        src="/assets/bio-monochrome.png"
        alt="Shivansh Garg — Systems Artisan Identity"
        fill
        className="object-cover grayscale"
        priority
      />
      
      {/* Editorial Identity Registry */}
      <div className="absolute bottom-6 left-6 z-10 hidden md:block select-none">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-600/50">
          IDENTITY_ANCHOR // SILICON_SILHOUETTE_v01
        </span>
      </div>
    </div>
  );
};

export default HumanAnchor;
