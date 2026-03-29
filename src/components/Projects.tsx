'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Mindful Check (AI Early Warning)",
    category: "Python • NLP • ML • Streamlit",
    description: "Developed an AI application using NLP and ML to analyze student text and identify early signs of stress and burnout. Implemented sentiment analysis and risk-level classification with an interactive dashboard.",
    link: "https://mindfulcheck09.netlify.app/",
    image: "/mindfulcheck.png",
  },
  {
    id: 2,
    title: "Resume Insight Hub",
    category: "Python • ML • ATS",
    description: "Built an ATS-based Resume Analyzer to evaluate resumes against job descriptions using machine learning. Implemented resume scoring, keyword matching, and candidate ranking.",
    link: "https://resumeinsighthub.netlify.app/",
    image: "/resumeanalyzer.png", 
  },
  {
    id: 3,
    title: "Roam and Relax (Travel Planner)",
    category: "Python • APIs • Backend",
    description: "Developed a travel planning application generating optimized itineraries based on user preferences. Integrated APIs for routing, distance calculation, and real-time updates.",
    link: "https://github.com/Anchal-2005-bot/roamandrelax",
    image: "/roamandrelax.png",
  }
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 transition-all duration-500 hover:border-[#C8A96A]/60 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)] hover:-translate-y-2 block"
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
                <p className="text-sm text-[#C8A96A] font-medium tracking-wider uppercase mb-2 mt-4">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-[#C8A96A] transition-colors duration-300">
                  {project.title}
                </h3>
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
