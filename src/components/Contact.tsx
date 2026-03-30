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
            Let&apos;s Work <span className="text-[#C8A96A]">Together</span>
          </h2>
          <p className="text-[#EAEAEA]/60 font-light max-w-sm mb-8 md:mb-0">
            Open to internships, collaborations, and projects that push AI forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center md:items-end space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="mailto:anchal.kumari.aiml28@heritageit.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#C8A96A] text-[#121212] font-semibold tracking-wide hover:bg-[#EAEAEA] transition-colors duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/anchal-resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-transparent border border-[#C8A96A]/50 text-[#C8A96A] font-semibold tracking-wide hover:border-[#C8A96A] hover:bg-[#C8A96A]/10 transition-colors duration-300 text-center"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 pt-4 border-t border-[#C8A96A]/20 w-full justify-center md:justify-end">
            <a href="https://github.com/Anchal-2005-bot" target="_blank" rel="noopener noreferrer" className="text-[#EAEAEA]/60 hover:text-[#C8A96A] transition-colors font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anchal-kumari-6a4995332/" target="_blank" rel="noopener noreferrer" className="text-[#EAEAEA]/60 hover:text-[#C8A96A] transition-colors font-medium">
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
