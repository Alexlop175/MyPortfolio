"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillPhone,
  AiOutlineDownload,
} from "react-icons/ai";

// Definir el tipo de cada ítem
interface SocialMediaItem {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

const SocialMediaButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialMediaData, setSocialMediaData] = useState<SocialMediaItem[]>([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const data: SocialMediaItem[] = [
      {
        name: "GitHub",
        url: "https://github.com/Alexlop175Cenfotec",
        icon: AiFillGithub,
        color: "#333",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/Alexanderlop175",
        icon: AiFillLinkedin,
        color: "#0077B5",
      },
      {
        name: "Google",
        url: "mailto:Alexanderlop175@gmail.com",
        icon: AiFillGoogleCircle,
        color: "#DB4437",
      },
      {
        name: "Contacto",
        url: "tel:+50671508034",
        icon: AiFillPhone,
        color: "#009C41",
      },
    ];
    setSocialMediaData(data);
  }, []);

  return (
    <>
      {/* Bloque superior: botón + y redes */}
      <motion.div className="flex flex-wrap gap-4 justify-center items-center mt-6">
        {/* Toggle Button */}
        <motion.button
          onClick={toggleOpen}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xl flex justify-center items-center transition duration-200 shadow-md"
        >
          {isOpen ? "×" : "+"}
        </motion.button>

        {/* Red Social Icons */}
        {isOpen &&
          socialMediaData.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-12 h-12 rounded-full flex justify-center items-center text-white text-xl shadow-md"
                style={{ backgroundColor: social.color }}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
      </motion.div>

      {/* Bloque inferior: descarga de CVs */}
      <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
        <a
          href="/cv/CV_Espanol_AlexanderLopez.pdf"
          download
          className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white text-base font-medium py-2 px-5 rounded-full transition duration-200 shadow-md"
        >
          <AiOutlineDownload size={20} />
          CV Español
        </a>

        <a
          href="/cv/CV_English_AlexanderLopez.pdf"
          download
          className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white text-base font-medium py-2 px-5 rounded-full transition duration-200 shadow-md"
        >
          <AiOutlineDownload size={20} />
          CV English
        </a>
      </div>
    </>
  );
};

export default SocialMediaButton;
