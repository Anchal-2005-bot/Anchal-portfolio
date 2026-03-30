'use client';

import { motion } from 'framer-motion';
import { Cpu, MessageSquareText, Server, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: <Cpu className="w-6 h-6 text-[#C8A96A]" />,
    title: "Machine Learning",
    description: "Building supervised models for classification and regression. Logistic Regression, KNN, Linear Regression, model evaluation with accuracy, confusion matrix, and MSE."
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-[#C8A96A]" />,
    title: "NLP & AI Applications",
    description: "Developing NLP pipelines for sentiment analysis, emotion detection, and risk classification using Scikit-learn and Transformer models."
  },
  {
    icon: <Server className="w-6 h-6 text-[#C8A96A]" />,
    title: "Backend & API Development",
    description: "Building Python-based applications with Flask and external API integration. Real-time data fetching, parsing, and dynamic updates."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#C8A96A]" />,
    title: "Data Analysis",
    description: "Hands-on with NumPy, Pandas, and RStudio for data preprocessing, structured dataset analysis, and feature engineering."
  }
];

export default function WhatIDo() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I <span className="text-[#C8A96A]">Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-[#C8A96A]/20 transition-all duration-500 hover:border-[#C8A96A]/60 flex flex-col items-start hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(200,169,106,0.15)] group"
            >
              <div className="mb-6 p-4 rounded-xl bg-black/30 border border-white/5 group-hover:bg-[#C8A96A]/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#EAEAEA] mb-4">
                {card.title}
              </h3>
              <p className="text-[#EAEAEA]/80 font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
