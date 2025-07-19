"use client";
import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaGithub } from "react-icons/fa"; // For the GitHub icon
import Image from "next/image"; // Import next/image for image optimization

export default function ProjectsSection() {
  // Variants for animations
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

  // Project data
  const projectsData = [
    {
      title: "Voting System",
      technologies: ["C#", "ADO.NET", "SQL Server"],
      description:
        "Developed an application to streamline student council elections, significantly reducing paper usage, costs, and election times.",
      githubLink: "https://github.com/yourusername/voting-system", // Replace with actual link
      image: "/projects/SV.jpg", // Replace with image path
    },
    {
      title: "Ecosecha",
      technologies: ["Node.js", "MongoDB"],
      description:
        "Designed a platform to modernize Costa Rican farmers' markets, allowing vendors to showcase their produce online.",
      githubLink: "https://github.com/yourusername/ecosecha", // Replace with actual link
      image: "/projects/Ecosecha.png", // Replace with image path
    },
    {
      title: "JavaFy",
      technologies: ["Java Swing", "MySQL"],
      description:
        "Developed a desktop music streaming application inspired by Spotify, featuring song playback and library management.",
      githubLink: "https://github.com/yourusername/javafy", // Replace with actual link
      image: "/projects/javafy.png", // Replace with image path
    },
    {
      title: "HealthTag",
      technologies: [".NET", "SQL Server", "Bootstrap", "JavaScript"],
      description:
        "Created a health-focused system for at-risk individuals using NFC technology. Scanning a tag provided access to critical medical data, medications, and emergency contacts.",
      githubLink: "https://github.com/yourusername/healthtag", // Add actual link
      image: "/projects/HealthTag.jpg", // Add actual image path
    },
    {
      title: "SMT",
      technologies: [
        ".NET",
        "ADO.NET",
        "Entity Framework",
        "React Vite",
        "Tailwind",
        "SQL Server",
        "MongoDB",
        "Python (AI)",
      ],
      description:
        "Built a comprehensive traffic fines management system supporting multiple user roles: clients, officers, administrators, and super admins. Integrated AI-based vehicle plate recognition using Python.",
      githubLink: "https://github.com/yourusername/smt", // Add actual link
      image: "/projects/SMT.png", // Add actual image path
    },
    {
      title: "CenfoScore",
      technologies: [
        "FastAPI (Python)",
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
      ],
      description:
        "Developed a platform for students to rate and provide feedback on professors, helping peers make informed decisions when selecting courses.",
      githubLink: "https://github.com/yourusername/cenfoscore", // Add actual link
      image: "/projects/CenfoScore.png", // Add actual image path
    },
    {
      title: "Fairy Closet",
      technologies: ["Node JS", "JavaScript", "MongoDB", "HBS", "CSS"],
      description:
        "Developed a platform for students to rate and provide feedback on professors, helping peers make informed decisions when selecting courses.",
      githubLink: "https://github.com/yourusername/cenfoscore", // Add actual link
      image: "/projects/FairyCloset.png", // Add actual image path
    },
    {
      title: "Volatir",
      technologies: ["Node JS", "JavaScript"],
      description:
        "Developed a platform for students to rate and provide feedback on professors, helping peers make informed decisions when selecting courses.",
      githubLink: "https://github.com/yourusername/cenfoscore", // Add actual link
      image: "/projects/Volatir.png", // Add actual image path
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
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
              className="bg-gray-800 text-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-between text-center h-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-3 flex-grow">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="text-xs text-gray-400 mb-4">
                <span className="font-semibold">Technologies: </span>
                {project.technologies.join(", ")}
              </div>

              {/* GitHub Link Button with Border */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center px-5 py-2 border-2 border-solid border-teal-500 rounded-lg text-teal-500 font-medium hover:bg-teal-500 hover:text-white transition-colors duration-300 shadow-md"
              >
                <FaGithub size={20} className="inline mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
