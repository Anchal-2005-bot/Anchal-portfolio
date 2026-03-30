'use client';

import { motion } from 'framer-motion';

export default function Contact() {

  return (
    <footer id="contact" className="relative w-full bg-[#121212] pt-16 pb-24 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20 border-t border-[#C8A96A]/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Let&apos;s <span className="text-[#C8A96A]">Connect</span>
          </h2>
          <p className="text-[#EAEAEA]/60 font-light max-w-sm mb-8 md:mb-0">
            Actively looking for exciting opportunities and collaborations. Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center md:items-end space-y-4 text-[#EAEAEA]/80 font-light"
        >
          <a href="mailto:anchal.kumari.aiml28@heritageit.edu" className="hover:text-[#C8A96A] transition-colors">
            anchal.kumari.aiml28@heritageit.edu
          </a>
          <p>+91-8084161425</p>
          <p>Kolkata, West Bengal</p>

          <div className="w-full border-t border-[#C8A96A]/20 my-2"></div>
          
          <div className="flex gap-6 pt-2 w-full justify-center md:justify-end">
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
