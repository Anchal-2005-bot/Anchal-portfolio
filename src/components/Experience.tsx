'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "AI/ML Intern",
    company: "SRIndia (Squarecell Resource India Pvt. Ltd.)",
    duration: "Jan 2026 – Feb 2026",
    tech: "Python · Machine Learning · Scikit-learn · Data Analysis",
    details: [
      "Built supervised ML models for classification and regression using structured datasets.",
      "Implemented Iris Flower Classification and House Price Prediction using Logistic Regression, KNN, and Linear Regression.",
      "Evaluated model performance using accuracy, confusion matrix, and MSE."
    ]
  },
  {
    role: "Java Intern",
    company: "Navodita Infotech",
    duration: "Nov 2025 – Dec 2025",
    tech: "Java · APIs · Data Processing",
    details: [
      "Developed a Java-based weather application to fetch and display real-time temperature and weather data.",
      "Integrated external APIs and implemented data parsing and handling for dynamic updates.",
      "Improved proficiency in Java programming, API integration, and problem-solving."
    ]
  },
  {
    role: "B.Tech in CSE (AI & ML)",
    company: "Heritage Institute of Technology, Kolkata",
    duration: "2024 – May 2028 (Expected)",
    tech: "Data Structures · Algorithms · Artificial Intelligence · Machine Learning",
    details: [
      "CGPA: 9.18 / 10 (Current)"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Professional <span className="text-[#C8A96A]">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 transition-all duration-500 hover:border-[#C8A96A]/60 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)]"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
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
              <p className="text-sm text-[#EAEAEA]/50 font-medium mb-6 uppercase tracking-wider">
                {exp.tech}
              </p>
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
