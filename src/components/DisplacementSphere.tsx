"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DisplacementSphere = () => {
  const canvasRef = useRef(null); // Ref para el canvas
  const scene = useRef(new THREE.Scene()); // Escena de Three.js
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)); // Cámara de Three.js
  const renderer = useRef(new THREE.WebGLRenderer()); // Renderer de Three.js
  const material = useRef(); // Material con Shader
  const sphere = useRef(); // La esfera 3D
  const mouse = useRef(new THREE.Vector2()); // Posición del mouse

  // Inicialización del canvas y Three.js
  useEffect(() => {
    if (!canvasRef.current) return;

    // Verificar si estamos en el cliente antes de acceder a "window"
    if (typeof window !== "undefined") {
      // Inicializando el Renderer
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.current.domElement);

      // Ajustar la cámara para dispositivos pequeños
      const aspectRatio = window.innerWidth / window.innerHeight;
      const cameraZoom = window.innerWidth > 768 ? 70 : 50; // Cámara más cerca en pantallas pequeñas
      camera.current = new THREE.PerspectiveCamera(cameraZoom, aspectRatio, 0.1, 1000);
      camera.current.position.z = 70;

      // Crear geometría (aumentamos el tamaño de la esfera)
      const geometry = new THREE.SphereGeometry(45, 100, 100); // Aumentamos el radio de la esfera

      // Crear material con shaders
      material.current = new THREE.ShaderMaterial({
        vertexShader: `
          uniform float time;
          uniform vec2 mouse;
          varying vec3 vNormal;
          varying vec3 vPos;
          
          void main() {
            vPos = position;
            vNormal = normalize(normal);

            // Efecto de desplazamiento basado en el tiempo y la posición del mouse
            vec3 pos = position;
            pos.z += sin(pos.x * 1.0 + time) * 1.0;
            pos.y += sin(pos.x * 2.0 + time) * 1.0;

            // Deformación más notoria dependiendo de la posición del mouse
            pos.x += mouse.x * 3.0;
            pos.y += mouse.y * 3.0;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 lightPos;
          varying vec3 vNormal;
          varying vec3 vPos;

          void main() {
            vec3 lightDir = normalize(lightPos - vPos);
            float diff = max(dot(vNormal, lightDir), 0.0);
            
            // Colores: Usamos un color turquesa uniforme para toda la esfera
            vec3 flameColor = vec3(0.0, 1.0, 1.0); // Turquesa

            vec3 color = flameColor * diff; 

            gl_FragColor = vec4(color, 1.0);
          }
        `,
        uniforms: {
          time: { value: 0.0 },
          lightPos: { value: new THREE.Vector3(0, 10, 50) }, // Posición de la luz
          mouse: { value: mouse.current },
        },
        wireframe: true, // Mostrar la geometría en wireframe
      });

      // Crear la esfera y agregarla a la escena
      sphere.current = new THREE.Mesh(geometry, material.current);
      scene.current.add(sphere.current);

      // Función de animación
      const animate = (time) => {
        // Actualizar el tiempo para la animación
        material.current.uniforms.time.value = time * 0.005;

        // Renderizar la escena
        renderer.current.render(scene.current, camera.current);

        // Continuar la animación
        requestAnimationFrame(animate);
      };

      // Iniciar la animación
      animate();

      // Manejar el cambio de tamaño de la ventana
      const onWindowResize = () => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        camera.current.aspect = aspectRatio;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(window.innerWidth, window.innerHeight);
      };

      // Agregar el evento de cambio de tamaño
      window.addEventListener("resize", onWindowResize);

      // Función para manejar el movimiento del mouse
      const onMouseMove = (event) => {
        // Actualizar la posición del mouse normalizada
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      // Agregar el evento de movimiento del mouse
      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("resize", onWindowResize);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
};

export default DisplacementSphere;
