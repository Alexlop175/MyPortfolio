"use client";
import React from "react";
import { motion } from "framer-motion"; // Para animaciones
import { FaHandshake, FaUsers, FaRegLightbulb, FaRegCalendarCheck } from "react-icons/fa"; // Iconos de habilidades blandas

export default function SoftSkillsSection() {
  const skillVariants = {
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

  const skillsData = [
    { icon: <FaHandshake size={40} />, title: "Teamwork", level: 100 },
    { icon: <FaUsers size={40} />, title: "Communication", level: 100 },
    { icon: <FaRegLightbulb size={40} />, title: "Problem Solving", level: 100 },
    { icon: <FaRegCalendarCheck size={40} />, title: "Time Management", level: 100 },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8"> {/* Cambiado a fondo negro */}
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 uppercase text-sm mb-2">SOFT SKILLS</p> {/* Consistente con otros subtítulos */}
        <h1 className="text-5xl font-bold text-white mb-8">My Soft Skills.</h1>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
            Soft skills are essential to my professional growth. These abilities help me communicate effectively, work well in teams, and approach challenges with problem-solving strategies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-48"
              variants={skillVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-4 text-teal-400">{skill.icon}</div> {/* Puedes usar teal-400 o teal-500 */}
              <h3 className="text-lg font-semibold">{skill.title}</h3>

              <div className="w-full mt-4 h-2 bg-gray-600 rounded-full">
                <motion.div
                  className="h-2 rounded-full bg-[#008080]" // El color teal sigue siendo el acento para la barra de progreso
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  }}
                />
              </div>
              <div className="text-xs mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}