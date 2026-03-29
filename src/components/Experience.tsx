'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "AI/ML Intern",
    company: "SRIndia (Squarecell Resource India Pvt. Ltd.)",
    duration: "Jan 2026 – Feb 2026",
    details: [
      "Built supervised machine learning models for classification and regression",
      "Implemented Iris Classification and House Price Prediction",
      "Used Logistic Regression, KNN, Linear Regression",
      "Evaluated models using accuracy, confusion matrix, MSE"
    ]
  },
  {
    role: "Java Intern",
    company: "Navodita Infotech",
    duration: "Nov 2025",
    details: [
      "Developed Java-based weather application",
      "Integrated APIs for real-time data",
      "Improved backend and data handling skills"
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Professional <span className="text-[#C8A96A]">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 transition-all duration-500 hover:border-[#C8A96A]/60 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)]"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#EAEAEA]">
                    {exp.role}
                  </h3>
                  <p className="text-[#C8A96A] font-medium tracking-wide uppercase mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-[#EAEAEA]/60 font-medium tracking-wider">
                  {exp.duration}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-3 text-[#EAEAEA]/80 font-light">
                {exp.details.map((detail, j) => (
                  <li key={j} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
