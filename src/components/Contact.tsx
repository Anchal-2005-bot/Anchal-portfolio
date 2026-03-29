'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer className="relative w-full bg-[#121212] pt-16 pb-24 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20 border-t border-[#C8A96A]/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let&apos;s <span className="text-[#C8A96A]">Connect</span>
          </h2>
          <p className="text-[#EAEAEA]/60 font-light max-w-sm mb-6">
            Actively looking for exciting opportunities and collaborations. Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center md:items-end space-y-3 font-light text-lg"
        >
          <a href="mailto:anchal.kumari.aiml28@heritageit.edu" className="hover:text-[#C8A96A] transition-colors flex items-center gap-2 max-w-[90vw] break-all text-center md:text-right">
            anchal.kumari.aiml28@heritageit.edu
          </a>
          <span className="text-[#EAEAEA]/80 flex items-center gap-2">+91-8084161425</span>
          <span className="text-[#EAEAEA]/80 flex items-center gap-2">Kolkata, West Bengal</span>
          <div className="flex gap-6 mt-4 pt-4 border-t border-[#C8A96A]/20">
            <a href="https://github.com/Anchal-2005-bot" target="_blank" rel="noopener noreferrer" className="text-[#C8A96A] hover:text-[#EAEAEA] transition-colors font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anchal-kumari-6a4995332/" target="_blank" rel="noopener noreferrer" className="text-[#C8A96A] hover:text-[#EAEAEA] transition-colors font-medium">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 text-center text-[#EAEAEA]/30 text-sm font-light">
        © {new Date().getFullYear()} Anchal Kumari. All rights reserved.
      </div>
    </footer>
  );
}
