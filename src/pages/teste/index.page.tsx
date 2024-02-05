import React, { useEffect, useState, useRef } from "react";

const ZoomImage: React.FC = () => {
  const zoomRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(5);
  const [rotation, setRotation] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight / 100;
      const scrollTop = document.documentElement.scrollTop;
      const start = 300 * vh;
      const stop = 250 * vh;
      const newScale = Math.max(1.2 - (scrollTop - start) / 200, 1);
      setScale(newScale);
      console.log("xxxxxxx", scrollTop);
      // Calcular rotação e translação com base no scroll
      if (scrollTop > stop) {
        setRotation(-90);
        setTranslateX(-50); // 50px do canto esquerdo
      } else if (scrollTop > start && scrollTop <= stop) {
        const progress = (scrollTop - start) / (stop - start);
        setRotation(-90 * progress);
        setTranslateX(-60 * progress); // Movendo para o canto esquerdo
      } else {
        setRotation(0);
        setTranslateX(0);
      }
      if (scrollTop > 200 * vh) {
        setOpacity(Math.min((scrollTop - 200 * vh) / (100 * vh), 1));
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="h-[20vh] bg-white"></section>
      <section className="sticky flex h-[400vh] bg-[#607559]">
        <section className=" sticky top-20  flex h-[100vh] flex-col  bg-[#607559]">
          <img
            ref={zoomRef}
            className="h-[100vh] w-screen object-contain transition-transform duration-300 will-change-transform"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg) translatey(${translateX}%)`,
            }}
            src="celular2.svg"
            alt="Zoomable"
          />
          <div
            className=" absolute right-20 h-[70vh] w-[45rem] bg-white transition-opacity duration-500"
            style={{ opacity: opacity }}
          >
            {/* Conteúdo da div, como texto ou imagens */}
            <p>Conteúdo da Div</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ZoomImage;
