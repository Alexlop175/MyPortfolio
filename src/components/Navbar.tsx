"use client";  // Asegura que este componente se ejecute solo en el cliente

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Para animación
import { Home, User, Briefcase, FolderKanban, Mail, Menu} from 'lucide-react'; // Íconos

type NavItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

const navItems: NavItemProps[] = [
  { icon: Home, label: 'Inicio', href: '/' },
  { icon: User, label: 'Sobre mí', href: '/about' },
  { icon: Briefcase, label: 'Experiencia', href: '/experience' },
  { icon: FolderKanban, label: 'Proyectos', href: '/projects' },
  { icon: Mail, label: 'Contacto', href: '/contact' },
];

export default function FloatingNavbar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Estado para controlar la visibilidad del menú

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Ícono de hamburguesa siempre visible */}
      <motion.div
        className="fixed top-4 left-4 z-60 cursor-pointer"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Menu className="h-8 w-8 text-white" />
      </motion.div>

      {/* Navbar fijo en la parte inferior de la pantalla */}
      {isMenuVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}  // Posición inicial (oculto)
          animate={{ y: 0, opacity: 1 }}   // Posición final (visible)
          exit={{ y: 100, opacity: 0 }}    // Animación de salida (oculto)
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed bottom-4 inset-x-0 z-50 flex justify-center items-center"
        >
          <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-full px-4 py-2">
            <ul className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 group ${
                      activeIndex === index
                        ? 'bg-black text-white'
                        : 'text-gray-500 hover:bg-gray-200'
                    }`}
                    aria-label={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="absolute bottom-full mb-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </>
  );
}
