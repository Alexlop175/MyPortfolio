"use client";
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';


// Technologies data ordered coherently with corrected Python entry
const technologies = [
  // Languages
  { name: "HTML 5", icon: "/tech/html.png" },
  { name: "CSS 3", icon: "/tech/css.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "Python", icon: "/tech/python.png" }, // Corrected: added 'icon:'
  { name: "Java", icon: "/tech/java.png" },
  
  // Frameworks / Libraries
  { name: "React JS", icon: "/tech/reactjs.png" },
  { name: "Node JS", icon: "/tech/nodejs.png" },
  { name: "Next JS", icon: "/tech/nextjs.png" },
  { name: ".NET", icon: "/tech/dotnet.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png" },

  // Databases
  { name: "PostgreSQL", icon: "/tech/postgresql.png" }, // Using postgresql.png for SQL
  { name: "MongoDB", icon: "/tech/mongodb.png" },
  
  // Tools
  { name: "Git", icon: "/tech/git.png" }, 
];

// Replicating styles.sectionSubTextLight and styles.sectionHeadTextLight
const sectionSubTextLight = "text-gray-400 uppercase text-sm";
const sectionHeadTextLight = "text-5xl font-bold text-white";

// Framer Motion text variant
const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Ball component for 3D rendering
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

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
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component that sets up the 3D scene for each Ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      {/* Re-added fallback prop to Suspense */}
      <Suspense> 
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Main Tech section component
const Tech = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Added text-center to this motion.div to center the text */}
        <motion.div variants={textVariant()} className=""> 
          <p className={`${sectionSubTextLight} mb-2`}>My skills</p>
          <h2 className={`${sectionHeadTextLight} mb-8`}>Technologies.</h2>
        </motion.div>

        {/* Container for the 3D balls */}
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
