'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Mindful Check",
    subtitle: "AI Early Warning System for Student Mental Health",
    category: "Python · Scikit-learn · NLP · Transformers · Streamlit",
    description: "An NLP + ML application that analyzes student-written text to detect early signs of stress, anxiety, and burnout. Includes sentiment analysis, emotion detection, and risk-level classification (Low / Medium / High) with an interactive Streamlit dashboard.",
    link: "https://mindfulcheck09.netlify.app/",
    image: "/mindfulcheck.png",
    date: "Jan 2026"
  },
  {
    id: 2,
    title: "Resume Insight Hub",
    subtitle: "ATS-Based Resume Analyzer",
    category: "Python · ML · NLP · ATS · Resume Parsing",
    description: "Evaluates resumes against job descriptions using ML-based scoring, keyword matching, and candidate ranking. Built to simulate real ATS pipelines.",
    link: "https://resumeinsighthub.netlify.app/",
    image: "/resumeanalyzer.png",
    date: "Oct 2025"
  },
  {
    id: 3,
    title: "Roam & Relax",
    subtitle: "Smart Travel Planner",
    category: "Python · APIs · Route Optimization · Backend Development",
    description: "Generates optimized travel itineraries based on user preferences using third-party APIs for routing, distance calculation, and real-time updates.",
    link: "https://github.com/Anchal-2005-bot/roamandrelax",
    image: "/roamandrelax.png",
    date: "Aug 2025"
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Selected <span className="text-[#C8A96A]">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ transitionProperty: 'transform, background-color, border-color, box-shadow', transitionDuration: '0.3s, 0.5s, 0.5s, 0.5s', transitionTimingFunction: 'ease' }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 hover:border-[#C8A96A]/60 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)] hover:-translate-y-1 block"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-6 relative z-10 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-center mb-2 mt-4">
                  <p className="text-sm text-[#C8A96A] font-medium tracking-wider uppercase">
                    {project.category}
                  </p>
                  <p className="text-xs text-[#EAEAEA]/50 font-medium">
                    {project.date}
                  </p>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-[#C8A96A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#EAEAEA]/90 font-medium text-sm mt-1">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#EAEAEA]/80 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
