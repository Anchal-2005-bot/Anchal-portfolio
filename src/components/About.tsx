'use client';

import { motion } from 'framer-motion';

export default function About() {

  return (
    <section id="about" className="relative w-full bg-[#121212] pt-32 pb-16 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            About <span className="text-[#C8A96A]">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-[#EAEAEA]/80 leading-relaxed font-light mb-12">
            Second-year B.Tech student in Artificial Intelligence and Machine Learning at Heritage Institute of Technology, Kolkata. I build practical, real-world AI applications — from mental health tools to resume analyzers. Strong foundation in Python, machine learning, and NLP, with hands-on experience through internships and independent projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 border-t border-[#C8A96A]/20 pt-12">
            <div className="text-center">
              <span className="block text-5xl font-bold text-[#EAEAEA] mb-2">3+</span>
              <span className="text-sm tracking-wider uppercase text-[#C8A96A]">Projects Shipped</span>
            </div>
            <div className="hidden sm:block w-px h-16 bg-[#C8A96A]/20"></div>
            <div className="text-center">
              <span className="block text-5xl font-bold text-[#EAEAEA] mb-2">2</span>
              <span className="text-sm tracking-wider uppercase text-[#C8A96A]">Internships Completed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
