'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% - 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-start">
      {/* 0% Section */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pointer-events-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#EAEAEA] animate-fadeIn opacity-0">
          Anchal
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#C8A96A] font-light tracking-wide uppercase drop-shadow-[0_0_15px_rgba(200,169,106,0.3)] animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          AI/ML Engineer & Builder
        </p>
        <p className="mt-2 text-base md:text-lg text-[#EAEAEA]/70 font-light tracking-wide animate-fadeIn opacity-0 max-w-md text-center" style={{ animationDelay: '0.4s' }}>
          I build intelligent systems that solve real problems.
        </p>
      </motion.div>
    </div>
  );
}
