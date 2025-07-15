"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AiFillCode,
  AiFillSetting,
  AiOutlineLock,
  AiOutlineLink,
} from "react-icons/ai"; // Íconos representativos

export default function OverviewSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardsData = [
    { icon: <AiFillCode size={40} />, title: "Full Stack Developer" },
    { icon: <AiFillSetting size={40} />, title: "Technical Support" },
    { icon: <AiOutlineLock size={40} />, title: "Cybersecurity" },
    { icon: <AiOutlineLink size={40} />, title: "Networking" },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 uppercase text-sm mb-2">INTRODUCTION</p>
        <h1 className="text-5xl font-bold text-white mb-8">Overview.</h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          I am a versatile technology professional with a profound passion for
          computer science, specialized in software. I am a self-taught
          individual, firmly focused on developing robust and scalable
          full-stack software solutions. My experience includes working on
          real-world projects using modern technologies. I adapt quickly, excel
          at problem-solving with a logical approach, and thrive in team
          environments. I have experience in the following areas:
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#008080] rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-48"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon and title for the card */}
              <div className="text-5xl mb-4 text-white">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
