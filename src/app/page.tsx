"use client";
import React, { Suspense, useRef } from "react"; // Added useRef for scrolling
import { motion } from "framer-motion"; // Para animar el punto de estado activo
import SocialMediaButton from "@/components/SocialMediaButton"; // Importar el nuevo componente
import dynamic from "next/dynamic"; // Import next/dynamic

// Dynamic import for Typewriter to ensure it's only loaded on the client-side
// ssr: false is crucial here to prevent it from running on the server
const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

// Dynamic import for DisplacementSphere to ensure it's only loaded on the client-side
// ssr: false is crucial here to prevent it from running on the server
const DisplacementSphere = dynamic(
  () => import("@/components/DisplacementSphere"),
  { ssr: false }
);

export default function Home() {
  const name = "Alexander López S.";

  return (
    <>
      {" "}
      {/* Fragmento para envolver múltiples elementos */}
      {/* Main content div for Home section */}
      {/* Removed h-screen to reduce vertical space, added py-20 for top/bottom padding */}
      <div className="flex flex-col sm:flex-row justify-center items-center px-6 md:px-20 bg-black overflow-x-hidden">
        {/* Left section with name and typewriter effect */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/2 space-y-6 mb-10 sm:mb-0 text-center sm:text-left py-22">
          {/* Status indicator (open to work) */}
          <motion.div
            className="flex items-center space-x-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-3 h-3 rounded-full bg-green-500"
              title="Available for work"
            />
            <span className="text-sm text-gray-300">Open to work</span>
          </motion.div>

          {/* Name with letter animation */}
          <motion.h1
            className="text-4xl sm:text-7xl font-bold mb-6 font-['Roboto', sans-serif]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typewriter effect */}
          <Suspense
            fallback={
              <div
                style={{
                  fontSize: "2rem",
                  fontFamily: "Roboto, sans-serif",
                  color: "white",
                }}
              >
                Loading text...
              </div>
            }
          >
            <Typewriter
              textStyle={{
                fontSize: "2rem",
                fontFamily: "Roboto, sans-serif",
              }}
              startDelay={500}
              cursorColor="white"
              multiText={[
                "Software Engineer",
                "Alexanderlop175@gmail.com",
                "+506 7150-8034",
              ]}
              multiTextDelay={2000}
              typeSpeed={100}
            />
          </Suspense>

          {/* Social Media Button */}
          <SocialMediaButton />
        </div>

        {/* Right section with the sphere (hidden on mobile) */}
        <div className="w-full sm:w-1/2 h-full sm:block hidden">
          <Suspense fallback={null}>
            <DisplacementSphere />
          </Suspense>
        </div>
      </div>
    </>
  );
}
