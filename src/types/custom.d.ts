declare module 'react-typewriter-effect' {
  import * as React from 'react';

  interface TypewriterProps {
    // textStyle es un objeto de estilos CSS
    textStyle?: React.CSSProperties;
    startDelay?: number;
    cursorColor?: string;
    multiText?: string[]; // Un array de strings
    multiTextDelay?: number;
    typeSpeed?: number;
    // Si hay otras props, añádelas aquí.
    // Si no estás seguro de todas las props o quieres ser menos estricto,
    // puedes añadir un índice de string, pero esto reduce la seguridad de tipos:
    // [key: string]: any;
  }

  // Asume que 'react-typewriter-effect' exporta un componente por defecto
  // (lo cual es común para librerías de componentes).
  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}