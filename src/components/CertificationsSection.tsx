"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa"; // Usamos un ícono representativo de certificación

export default function CertificationsSection() {
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

  const certificationsData = [
    {
      icon: <FaCertificate size={40} />,
      title: "CCNA 1 - Cisco",
      institution: "Cisco",
      date: "2022",
      description: "Fundamentals of networking, including IP addressing, routing, and switching.",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Cybersecurity Essentials - Cisco",
      institution: "Cisco",
      date: "2023",
      description: "Introduction to the core principles of cybersecurity and secure network management.",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Prompt Engineering - Certiprof",
      institution: "Certiprof",
      date: "2024",
      description: "Learn the art of designing effective prompts for AI models to achieve optimal results.",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8"> {/* Fondo de sección negro */}
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 uppercase text-sm mb-4">CERTIFICATIONS</p> {/* Texto gris claro */}
        <h1 className="text-5xl font-bold text-white mb-8">My Certifications.</h1> {/* Título blanco */}

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12"> {/* Descripción gris un poco más claro */}
            Here are some certifications that showcase my commitment to continuous learning and professional growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center h-72
                         transition-all duration-300 hover:scale-105 hover:bg-[#008080] hover:text-white" /* Fondo de tarjeta gris oscuro, texto blanco por defecto y en hover */
              variants={cardVariants}
            >
              {/* Icono y título de la certificación */}
              <div className="text-5xl mb-6 text-teal-400">{cert.icon}</div> {/* Ícono turquesa un poco más claro */}
              <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3> {/* Título de tarjeta blanco */}
              <p className="text-sm text-gray-300 mb-2">{cert.institution}</p> {/* Texto secundario gris claro */}
              <p className="text-xs text-gray-400 mb-4">{cert.date}</p> {/* Texto de fecha gris un poco más oscuro */}
              <p className="text-xs text-gray-200">{cert.description}</p> {/* Descripción gris más claro */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}