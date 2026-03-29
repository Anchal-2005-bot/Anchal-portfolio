'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative w-full bg-[#121212] pt-32 pb-16 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            About <span className="text-[#C8A96A]">Profile</span>
          </h2>
          <p className="text-lg md:text-xl text-[#EAEAEA]/80 leading-relaxed font-light">
            Undergraduate student specializing in Artificial Intelligence and Machine Learning with a strong foundation in Python programming, data preprocessing, and supervised learning techniques. Actively building intelligent applications and continuously enhancing technical expertise through hands-on projects and practical learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
