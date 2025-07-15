"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DisplacementSphere = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null); // Ref para el div que contiene el canvas
  const scene = useRef(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  );
  const renderer = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer());
  const material = useRef<THREE.ShaderMaterial | null>(null);
  const sphere = useRef<THREE.Mesh | null>(null);
  const mouse = useRef<THREE.Vector2>(new THREE.Vector2());

  useEffect(() => {
    if (!canvasRef.current) return;

    // Verificar si estamos en el cliente antes de acceder a "window"
    if (typeof window !== "undefined") {
      // Inicializando el Renderer
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.current.domElement);

      // Ajustar la cámara para dispositivos pequeños
      const aspectRatio = window.innerWidth / window.innerHeight;
      const cameraZoom = window.innerWidth > 768 ? 70 : 50;
      camera.current.aspect = aspectRatio;
      camera.current.fov = cameraZoom;
      camera.current.updateProjectionMatrix();
      camera.current.position.z = 70;

      // Crear geometría
      const geometry = new THREE.SphereGeometry(45, 100, 100);

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

            vec3 pos = position;
            pos.z += sin(pos.x * 1.0 + time) * 1.0;
            pos.y += sin(pos.x * 2.0 + time) * 1.0;

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
            
            vec3 flameColor = vec3(0.0, 1.0, 1.0);

            vec3 color = flameColor * diff;

            gl_FragColor = vec4(color, 1.0);
          }
        `,
        uniforms: {
          time: { value: 0.0 },
          lightPos: { value: new THREE.Vector3(0, 10, 50) },
          mouse: { value: mouse.current },
        },
        wireframe: true,
      });

      // Crear la esfera y agregarla a la escena
      sphere.current = new THREE.Mesh(geometry, material.current);
      scene.current.add(sphere.current);

      // Animación
      const animate = (time: number) => {
        if (material.current) {
          material.current.uniforms.time.value = time * 0.005;
        }

        renderer.current.render(scene.current, camera.current);
        requestAnimationFrame(animate);
      };

      animate(0);

      // Resize handler
      const onWindowResize = () => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        camera.current.aspect = aspectRatio;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", onWindowResize);

      // Mouse move handler
      const onMouseMove = (event: MouseEvent) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

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
