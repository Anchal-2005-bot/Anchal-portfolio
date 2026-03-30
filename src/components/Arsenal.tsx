'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, Cloud, Medal } from 'lucide-react';

const arsenalItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/Anchal-2005-bot"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anchal-kumari-6a4995332/"
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "LeetCode — 100+ problems solved",
    href: "https://leetcode.com/u/anchalthakur7239/"
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Deloitte Job Simulation",
    href: "https://www.theforage.com/"
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    label: "AWS Job Simulation",
    href: "https://www.theforage.com/"
  },
  {
    icon: <Medal className="w-5 h-5" />,
    label: "Microsoft GenAI Certificate",
    href: "https://www.linkedin.com/learning"
  }
];

export default function Arsenal() {
  return (
    <section className="relative w-full bg-[#121212] pb-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          <p className="text-[#C8A96A] font-medium tracking-wide uppercase text-sm mb-8">
            My Arsenal
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {arsenalItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 hover:border-[#C8A96A]/60 hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-[#C8A96A] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[#EAEAEA]/90 font-medium text-sm md:text-base tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
