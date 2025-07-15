"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillGoogleCircle, AiFillPhone } from "react-icons/ai"; // Importamos los íconos de react-icons

const SocialMediaButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la apertura/cierre de los iconos
  const [socialMediaData, setSocialMediaData] = useState([]);

  // Función para alternar la apertura/cierre
  const toggleOpen = () => setIsOpen(!isOpen);

  // Variantes de animación para los iconos
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const fetchSocialMediaData = () => {
      const data = [
        { name: "GitHub", url: "https://github.com/Alexlop175Cenfotec", icon: AiFillGithub, color: "#333" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/Alexanderlop175", icon: AiFillLinkedin, color: "#0077B5" },
        { name: "Google", url: "mailto:Alexanderlop175@gmail.com", icon: AiFillGoogleCircle, color: "#DB4437" },
        { name: "Contacto", url: "tel:+50671508034", icon: AiFillPhone, color: "#009C41" }, // Cambié el número de teléfono
      ];
      setSocialMediaData(data);
    };
    fetchSocialMediaData();
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
      {/* Botón para abrir o cerrar los iconos */}
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

      {/* Contenedor de los iconos de redes sociales */}
      {isOpen && (
        <motion.div
          className="social-icons"
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          {socialMediaData.map((social, index) => {
            const IconComponent = social.icon; // Usar el ícono directamente sin require
            return (
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={index}
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
