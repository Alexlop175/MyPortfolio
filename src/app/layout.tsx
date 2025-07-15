"use client";
import "./globals.css";
import FloatingNavbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <FloatingNavbar />

          {/* Aquí se anima el contenido con la animación de aparición */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </ThemeProvider>
      </body>
    </html>
  );
}
