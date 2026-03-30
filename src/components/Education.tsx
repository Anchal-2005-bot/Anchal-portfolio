'use client';

import { motion } from 'framer-motion';

export default function Education() {

  return (
    <section className="relative w-full bg-[#121212] pt-16 pb-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            <span className="text-[#C8A96A]">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 transition-all duration-500 hover:border-[#C8A96A]/60 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)]"
        >
          <div className="flex flex-col md:flex-row md:justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#EAEAEA]">
                B.Tech in CSE (AI & ML)
              </h3>
              <p className="text-[#C8A96A] font-medium tracking-wide uppercase mt-1">
                Heritage Institute of Technology
              </p>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <div className="text-[#EAEAEA]/60 font-medium tracking-wider mb-1">Expected Graduation: May 2028</div>
              <div className="text-[#C8A96A] font-semibold">CGPA: 9.18/10</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-[#EAEAEA] mb-2">Relevant Coursework:</h4>
            <p className="text-[#EAEAEA]/80 font-light leading-relaxed">
              Data Structures, Algorithms, Artificial Intelligence, Machine Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
