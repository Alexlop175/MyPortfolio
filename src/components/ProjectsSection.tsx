"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

const projectsData = [
  {
    title: "CenfoScore",
    technologies: ["FastAPI", "React", "Next.js", "Tailwind", "TypeScript"],
    description:
      "Created a platform for students to rate professors and make informed course decisions.",
    githubLink: "https://github.com/Alexlop175/CenfoScore",
    image: "/projects/CenfoScore.png",
  },
  {
    title: "SMT",
    technologies: [
      ".NET",
      "React",
      "Tailwind",
      "SQL Server",
      "MongoDB",
      "Python (AI)",
    ],
    description:
      "Designed a traffic fine system with user roles and AI-based license plate recognition.",
    githubLink: "https://github.com/Alexlop175Cenfotec/Proyecto2",
    image: "/projects/SMT.png",
  },
  {
    title: "HealthTag",
    technologies: [".NET", "SQL Server", "Bootstrap", "JS"],
    description:
      "Developed a health alert system using NFC to access key medical info in emergencies.",
    githubLink: "https://github.com/Alexlop175Cenfotec/HealthTag",
    image: "/projects/HealthTag.png",
  },
  {
    title: "JavaFy",
    technologies: ["Java", "Swing", "MySQL"],
    description:
      "Created a desktop music player inspired by Spotify with playback and personal library features.",
    githubLink: "https://github.com/Alexlop175/javafy",
    image: "/projects/Javafy.png",
  },
  {
    title: "Fairy Closet",
    technologies: ["Node JS", "JavaScript", "MongoDB", "HBS", "CSS"],
    description:
      "Created an online store for handmade accessories, allowing its creator to showcase and sell her work.",
    githubLink: "https://github.com/Alexlop175/FairyCloset",
    image: "/projects/FairyCloset.png",
  },
  {
    title: "Volatir",
    technologies: ["Node JS", "HTML", "CSS"],
    description:
      "Developed a business website for managing aerial and ground transportation rentals and reservations.",
    githubLink: "https://github.com/Alexlop175/Volatir",
    image: "/projects/Volatir.png",
  },
  {
    title: "Ecosecha",
    technologies: ["Node.js", "MongoDB"],
    description:
      "Built a web platform to help Costa Rican farmers promote and sell produce online efficiently.",
    githubLink: "https://github.com/Alexlop175/ecosecha",
    image: "/projects/Ecosecha.png",
  },
  {
    title: "Drive U",
    technologies: ["Dart", "Firebase", "Google Maps API"],
    description:
      "Mobile app that connects drivers and passengers with similar routes to save costs and reduce emissions.",
    githubLink: "https://github.com/Alexlop175/DriveU",
    image: "/projects/DriveU.jpeg",
  },
  {
    title: "Voting System",
    technologies: ["ADO.NET", "SQL Server", "JS"],
    description:
      "Developed an app to streamline student elections, reducing paper use, costs, and voting time.",
    githubLink: "https://github.com/Alexlop175/voting-system",
    image: "/projects/SV.jpg",
  },
];


  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 uppercase text-sm mb-2">MY PROJECTS</p>
        <h1 className="text-5xl font-bold text-white mb-8">
          Projects I&apos;ve Worked On
        </h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-teal-400 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-3 mb-5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-600 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View project on GitHub"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 border border-teal-400 text-white rounded-md hover:bg-teal-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-md"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
