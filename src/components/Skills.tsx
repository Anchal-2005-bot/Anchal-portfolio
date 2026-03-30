'use client';

import { motion } from 'framer-motion';

const skillsLayout = [
  { category: "Languages", value: "Python · C · Java · R" },
  { category: "CS Foundations", value: "Data Structures · Algorithms" },
  { category: "Tools", value: "Git · GitHub · VS Code · Jupyter Notebook" },
  { category: "Data & ML", value: "NumPy · Pandas · Scikit-learn · RStudio" },
  { category: "Web", value: "HTML · CSS · JavaScript · Flask" }
];

export default function Skills() {
  return (
    <section id="achievements" className="relative w-full bg-[#121212] pt-16 pb-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center md:text-left">
            Technical <span className="text-[#C8A96A]">Skills</span>
          </h2>

          <div className="space-y-6">
            {skillsLayout.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col md:flex-row md:items-center border-b border-[#C8A96A]/10 pb-4 p-2 -mx-2 rounded-lg last:border-0 last:pb-2 cursor-default hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-[#C8A96A] font-medium tracking-wide uppercase text-sm md:w-48 shrink-0 mb-1 md:mb-0">
                  {skill.category}
                </span>
                <span className="text-[#EAEAEA] font-light text-lg">
                  {skill.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
