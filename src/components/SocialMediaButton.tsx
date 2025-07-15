"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillPhone,
} from "react-icons/ai";

// Definir el tipo de cada ítem
interface SocialMediaItem {
  name: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <motion.div
      className="social-media-container"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <motion.button
        onClick={toggleOpen}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#008080",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOpen ? "X" : "+"}
      </motion.button>

      {isOpen && (
        <motion.div
          className="social-icons"
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          {socialMediaData.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: social.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "24px",
                }}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SocialMediaButton;
