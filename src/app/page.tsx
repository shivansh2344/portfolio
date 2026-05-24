'use client'; 
 import React, { useEffect, useRef } from 'react'; 
 import { gsap } from 'gsap'; 
 import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
 import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
 import Image from 'next/image'; 
 import LatentNetwork from '../components/canvas/LatentNetwork'; 
 import ClickSpark from '../components/ui/ClickSpark'; 
 import FrameHeader from '../components/ui/FrameHeader'; 
  
 gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 
  
 export default function Home() { 
   const scrollSectionRef = useRef<HTMLDivElement>(null); 
   const triggerWrapperRef = useRef<HTMLDivElement>(null); 
   const portraitRef = useRef<HTMLDivElement>(null); 
  
   useEffect(() => { 
     const scrollSection = scrollSectionRef.current; 
     const triggerWrapper = triggerWrapperRef.current; 
     if (!scrollSection || !triggerWrapper) return; 
  
     // Calculate exact horizontal boundary offset 
     const totalPanelsWidth = scrollSection.offsetWidth; 
     const scrollAmount = totalPanelsWidth - window.innerWidth; 
  
     const ctx = gsap.context(() => { 
       // 1. Core Horizontal Pinning Animation 
       gsap.to(scrollSection, { 
         x: -scrollAmount, 
         ease: "none", 
         scrollTrigger: { 
           trigger: triggerWrapper, 
           pin: scrollSection, 
           scrub: 0.5, 
           start: "top top", 
           end: () => `+=${scrollAmount}`, 
           invalidateOnRefresh: true, 
         }, 
       }); 
  
       // 2. Hardware-Accelerated Fixed Monochrome Portrait Opacity Fade 
       if (portraitRef.current) { 
         gsap.to(portraitRef.current, { 
           opacity: 0.35, 
           ease: "none", 
           scrollTrigger: { 
             trigger: triggerWrapper, 
             start: "top top", 
             end: () => `+=${scrollAmount}`, 
             scrub: true, 
           } 
         }); 
       } 
     }); 
  
     return () => ctx.revert(); 
   }, []); 
  
   return ( 
     <ClickSpark 
       sparkColor="#FAF9F6" 
       sparkCount={10} 
       duration={500} 
       easing="ease-out"
     > 
       {/* NATIVE SCROLL ENGINE BASE */} 
       <div ref={triggerWrapperRef} className="relative w-full bg-[#080809]"> 
          
         {/* FIXED CORE ENVIRONMENT LAYER */} 
         <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-10 pointer-events-none"> 
           <FrameHeader /> 
           <LatentNetwork /> 
            
           {/* FIXED IDENTITY ANCHOR PORTRAIT */} 
           <div  
             ref={portraitRef} 
             className="absolute right-[5%] bottom-[5%] w-[320px] h-[420px] md:w-[450px] md:h-[550px] opacity-[0.08] mix-blend-luminosity will-change-opacity pointer-events-none transition-none" 
           > 
             <Image  
               src="/assets/bio-monochrome.png"  
               alt="Shivansh Garg Identity Layer"  
               fill 
               priority 
               className="object-cover object-center" 
             /> 
           </div> 
         </div> 
  
         {/* ACTIVE MOVING HORIZONTAL FILM-STRIP */} 
         <div  
           ref={scrollSectionRef}  
           className="flex flex-row flex-nowrap h-screen w-[400vw] will-change-transform relative z-20 pointer-events-auto" 
         > 
            
           {/* PANEL 1: HERO OVERVIEW BILLBOARD */} 
           <section className="w-screen h-screen shrink-0 relative flex items-center justify-start px-6 sm:px-12 md:px-24 select-none"> 
             <div className="flex flex-col items-start text-left max-w-5xl leading-none"> 
               <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500 block mb-6 font-semibold"> 
                 [01 // SYSTEM INTERFACE INITIALIZED] 
               </span> 
               <h1 className="font-display font-black text-6xl sm:text-8xl md:text-[9.5rem] uppercase tracking-[-0.05em] text-[#FAF9F6] leading-[0.85] mb-6"> 
                 SHIVANSH GARG. 
               </h1> 
               <p className="max-w-4xl font-display text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-[-0.02em] text-slate-300 leading-[1.05] mt-4"> 
                 STRUCTURING SYSTEMS WHERE DATA CONVERGES WITH HUMAN SENTIMENT. 
               </p> 
                
               {/* QUICK OVERVIEW DASHBOARD */} 
               <div className="mt-8 grid grid-cols-2 gap-4 border border-[#1A1A1C] p-4 bg-[#0c0c0e]/60 rounded-md backdrop-blur-sm font-mono text-[11px] text-slate-400 w-full max-w-md"> 
                 <div>NATIONAL EXAM QUALIFICATION : GATE DA 2026 // ALL INDIA RANK 3024</div> 
                 <div>ACADEMIC STANDING           : B.Tech Student — AI & Data Science @ JEC</div> 
                 <div>ENGINE PRODUCTION SCALE     : Optimized pipelines handling 1M+ Records</div> 
                 <div>COMMUNITY LEADERSHIP        : Founder @ MATRIX JEC // Mentored 50+ Students</div> 
               </div> 

               {/* CTA ACTION SYSTEM WRAPPER */} 
               <div className="mt-8 flex flex-row gap-4 w-full max-w-md pointer-events-auto relative z-30"> 
                 {/* VIEW RESUME BUTTON */} 
                 <a 
                   href="/assets/resume.pdf" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex-1 py-3 px-6 text-center border border-[#FAF9F6] bg-[#FAF9F6] text-[#080809] font-mono text-xs uppercase font-bold tracking-wider hover:bg-transparent hover:text-[#FAF9F6] transition-all duration-300 cursor-pointer" 
                 > 
                   VIEW RESUME 
                 </a> 
                 
                 {/* HIRE ME BUTTON */} 
                 <a 
                   href="#contact-ledger" 
                   onClick={(e) => { 
                     e.preventDefault(); 
                     // Smoothly slide the film-strip to the final milestone panel (Panel 4) 
                     gsap.to(window, { scrollTo: { y: document.body.scrollHeight * 0.75 }, duration: 1.5, ease: "power4.out" }); 
                   }} 
                   className="flex-1 py-3 px-6 text-center border border-[#1A1A1C] bg-[#0c0c0e]/80 text-[#FAF9F6] font-mono text-xs uppercase font-bold tracking-wider hover:border-[#FAF9F6] transition-all duration-300 cursor-pointer" 
                 > 
                   HIRE ME 
                 </a> 
               </div> 
             </div> 
           </section> 
  
           {/* PANEL 2: PROFESSIONAL EXPERIENCE TIMELINE */} 
           <section className="w-screen h-screen shrink-0 relative flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 select-none"> 
             <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500 block mb-6 font-semibold"> 
               [02 // PROFESSIONAL EXPERIENCE] 
             </span> 
             <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-start justify-start"> 
                
               <div className="flex-1 p-6 border border-[#1A1A1C] bg-[#0c0c0e]/40 rounded-sm"> 
                 <div className="font-mono text-xs text-slate-500 mb-2">OCT 2025 - DEC 2025</div> 
                 <h3 className="font-display font-black text-xl text-[#FAF9F6] uppercase mb-3">BSNL & NOKIA // ADVANCED AI/ML TELECOM TRAINEE</h3> 
                 <div className="font-display text-xs text-slate-400 uppercase tracking-tight leading-snug space-y-2"> 
                   <p>• Cut manual data aggregation time by 20% by architecting automated ETL pipelines on 1M+ telecom CDRs and network KPIs.</p>
                   <p>• Captured 85% classification accuracy by engineering an end-to-end churn prediction engine via Scikit-Learn Random Forests.</p>
                   <p>• Projected a 30% reduction in customer churn risk by developing an interactive what-if scenario prediction simulation engine.</p>
                   <p>• Increased fraud detection precision by 18% utilizing complex SQL window functions, CTEs, and automated dashboard layouts.</p>
                 </div> 
               </div> 
  
               <div className="flex-1 p-6 border border-[#1A1A1C] bg-[#0c0c0e]/40 rounded-sm"> 
                 <div className="font-mono text-xs text-slate-500 mb-2">APR 2025 - JUL 2025</div> 
                 <h3 className="font-display font-black text-xl text-[#FAF9F6] uppercase mb-3">GOOGLE CLOUD // GENAI EXCHANGE PROGRAM PARTICIPANT</h3> 
                 <div className="font-display text-xs text-slate-400 uppercase tracking-tight leading-snug space-y-2"> 
                   <p>• Handled 500GB+ of unstructured heterogeneous datasets for LLM fine-tuning by orchestrating 15+ automated cleaning prototype workflows.</p>
                   <p>• Enhanced context-retrieval fidelity by 15% across 10+ architectural experiments on advanced RAG pipelines using Vertex AI tools.</p>
                   <p>• Mitigated end-to-end processing pipeline latency by 10% through diagnosing and resolving compute bottlenecks within Generative AI inference loops.</p>
                 </div> 
               </div> 
  
             </div> 
           </section> 
  
           {/* PANEL 3: TECHNICAL PROJECTS */} 
           <section className="w-screen h-screen shrink-0 relative flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 select-none"> 
             <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500 block mb-6 font-semibold"> 
               [03 // TECHNICAL PROJECTS] 
             </span> 
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl font-mono text-xs uppercase text-slate-400"> 
               <div className="p-6 border border-[#1A1A1C] bg-[#0c0c0e]/30"> 
                 <div className="font-display font-black text-base text-[#FAF9F6] mb-4">MULTITHREADED DEEP PACKET INSPECTION ENGINE // C++, LIBPCAP, PTHREADS</div> 
                 <div className="space-y-2">
                   <p>• Engineered a high-performance network analysis engine from scratch in pure C++ to parse L2-L7 frames at wire speed.</p>
                   <p>• Decoupled ingestion loops from protocol parsing using a concurrent producer-consumer pipeline running custom thread-safe queues with std::condition_variable.</p>
                   <p>• Extracted microsecond-latency TLS SNI payloads by implementing consistent hashing for stateful, flow-based load balancing across multiple Fast Path threads.</p>
                 </div> 
               </div> 
               <div className="p-6 border border-[#1A1A1C] bg-[#0c0c0e]/30"> 
                 <div className="font-display font-black text-base text-[#FAF9F6] mb-4">VECTOR FORGE: NATIVE VECTOR DB & INFERENCE ENGINE // C++, SYSTEMS DESIGN</div> 
                 <div className="space-y-2">
                   <p>• Hand-rolled an autoregressive transformer inference engine and vector database in pure C++ without high-level external ML frameworks.</p>
                   <p>• Optimized high-dimensional matrix multiplication loops for low-latency execution utilizing custom CPU cache-locality principles and hand-rolled layers.</p>
                   <p>• Navigated 768-dimensional semantic spaces via production-grade vector search algorithms, embedding native HNSW structures and KD-Trees.</p>
                 </div> 
               </div> 
             </div> 
           </section> 
  
           {/* PANEL 4: TECHNICAL SKILLS & CONTACT */} 
           <section id="contact-ledger" className="w-screen h-screen shrink-0 relative flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 select-none"> 
             <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500 block mb-6 font-semibold"> 
               [04 // TECHNICAL SKILLS & CONTACT] 
             </span> 
             <div className="flex flex-col gap-4 w-full max-w-5xl font-mono text-[10px] uppercase text-slate-400 pointer-events-auto relative z-30"> 
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 border border-[#1A1A1C] bg-[#0c0c0e]/60">
                   <span className="text-slate-600 block mb-2">LANGUAGES</span>
                   <p className="text-[#FAF9F6] font-bold">C/C++ (Expert) • Python (Pandas, NumPy) • SQL (CTEs, Windows) • Java</p>
                 </div>
                 <div className="p-4 border border-[#1A1A1C] bg-[#0c0c0e]/60">
                   <span className="text-slate-600 block mb-2">SYSTEMS</span>
                   <p className="text-[#FAF9F6] font-bold">Multithreading • Memory Allocation • STL Internals • Concurrency</p>
                 </div>
                 <div className="p-4 border border-[#1A1A1C] bg-[#0c0c0e]/60">
                   <span className="text-slate-600 block mb-2">CORE INTELLIGENCE</span>
                   <p className="text-[#FAF9F6] font-bold">LLM Inference • RAG Pipelines • Vector Search (HNSW) • Scikit-Learn</p>
                 </div>
                 <div className="p-4 border border-[#1A1A1C] bg-[#0c0c0e]/60">
                   <span className="text-slate-600 block mb-2">CLOUD & DATA OPS</span>
                   <p className="text-[#FAF9F6] font-bold">GCP (Vertex AI) • Oracle Cloud (OCI) • Docker • Airflow • Git • APIs</p>
                 </div>
               </div>
               
               {/* SYSTEM DIRECT ACTION COMMUNICATIONS ROUTER */} 
               <div className="mt-6 p-6 border border-[#1A1A1C] bg-[#0c0c0e]/80 rounded-sm flex flex-col gap-4"> 
                 <div className="font-display font-black text-sm text-[#FAF9F6] tracking-tight">[INITIATE SECURE PROJECT LINE // CONTACT ME]</div> 
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-400"> 
                   <a href="mailto:shivanshgarg23.4.4@gmail.com" className="hover:text-[#FAF9F6] transition-colors border border-[#1A1A1C] p-3 text-center bg-[#080809]">EMAIL // DIRECT</a> 
                   <a href="https://github.com/shivansh2344" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF9F6] transition-colors border border-[#1A1A1C] p-3 text-center bg-[#080809]">GITHUB // INSTANCE</a> 
                   <a href="https://linkedin.com/in/shivanshg2344" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF9F6] transition-colors border border-[#1A1A1C] p-3 text-center bg-[#080809]">LINKEDIN // CONNECT</a> 
                 </div> 
               </div> 
             </div> 
           </section> 
  
         </div> 
       </div> 
     </ClickSpark> 
   ); 
 } 
