import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { sRGBEncoding } from 'three';
import image1 from '../../../public/Imagem1.png'
import image2 from '../../../public/Imagem2.png'
import CanvasLoader from "./2";

interface EarthProps {
    rotationY: number;
    imagem: any;
  }
  const Earth = ({ rotationY, imagem }: EarthProps) => {
    const earth = useGLTF('./iphone2/scene.gltf');
    const [lastMetalness, setLastMetalness] = useState(0.205);
    const [texturePath, setTexturePath] = useState('');
  
    const imagePathMap = {
      "image1": '/Imagem1.png',
      "image2": '/Imagem2.png',
      "image3": '/Imagem3.png',
      "image4": '/Imagem4.png',
      "image5": '/Imagem5.png'
    };
  
    // Atualiza o caminho da textura quando a propriedade 'imagem' muda
    useEffect(() => {
        if (imagePathMap[imagem]) {
          const newPath = `${imagePathMap[imagem]}?v=${Date.now()}`;
          setTexturePath(newPath);
          console.log('Nova textura:', newPath);
        }
      }, [imagem]);
    
      // Carregando a textura apenas se texturePath for válido
      const texture = texturePath ? useLoader(TextureLoader, texturePath) : null;
      if (texture) texture.encoding = sRGBEncoding;
  
    useEffect(() => {
      console.log("useEffect disparado com imagem:", imagem);
  
      if (texture) {
        console.log('Texture loaded:', texture);
        earth.scene.traverse((child) => {
          if (child.isMesh && child.material.name === 'GFNYbWjyDVGUwJd') {
            console.log('Atualizando material do mesh:', child);
  
            if (child.material.emissiveMap) {
              console.log('Limpando textura antiga');
              child.material.emissiveMap.dispose();
            }
  
            child.material.emissiveMap = texture;
            child.material.emissiveIntensity = 1.0;
            child.material.metalness = lastMetalness;
            child.material.roughness = 0.1;
            child.material.needsUpdate = true;
  
            console.log('Material atualizado');
          }
        });
      }
    }, [earth, texture]);
    return (
      <primitive object={earth.scene} scale={30} position-y={-2} rotation-y={rotationY} />
    );
  };
  

const EarthCanvas = ({rotationY,imagem}:EarthProps) => {
    const [rotation, setRotation] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRotation((prevRotation) => (prevRotation + Math.PI / 90) % (2 * Math.PI));
      }, 22); // Atualiza a rotação a cada 22ms para completar 360 graus em 2 segundos
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true,gammaOutput: true, gammaFactor: 2.2 }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={false} // Desabilita a rotação automática
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        
          <Earth rotationY={rotationY} imagem={imagem} />

          <Preload all />
        </Suspense>
      </Canvas>
    );
  };

export default EarthCanvas;
