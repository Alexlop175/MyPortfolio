"use client";

import React, { Suspense, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// Lista de tecnologías
const technologies = [
  { name: "HTML 5", icon: "/tech/html.png" },
  { name: "CSS 3", icon: "/tech/css.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "Python", icon: "/tech/python.png" },
  { name: "Java", icon: "/tech/java.png" },
  { name: "React JS", icon: "/tech/reactjs.png" },
  { name: "Node JS", icon: "/tech/nodejs.png" },
  { name: "Next JS", icon: "/tech/nextjs.png" },
  { name: ".NET", icon: "/tech/dotnet.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  { name: "PostgreSQL", icon: "/tech/postgresql.png" },
  { name: "MongoDB", icon: "/tech/mongodb.png" },
  { name: "Git", icon: "/tech/git.png" },
];

const sectionSubTextLight = "text-gray-400 uppercase text-sm";
const sectionHeadTextLight = "text-5xl font-bold text-white";

const textVariant = (delay = 0): Variants => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const decal = useTexture(imgUrl);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = icon;
    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  }, [icon]);

  if (!isValid) return null;

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const Tech: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={`${sectionSubTextLight} mb-2`}>My skills</p>
          <h2 className={`${sectionHeadTextLight} mb-8`}>Technologies.</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
