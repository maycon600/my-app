import React, { useEffect, useState, useRef } from "react";

const ZoomImage: React.FC = () => {
  const zoomRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(5);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight / 100;
      const scrollTop = document.documentElement.scrollTop;
      const start = 50 * vh;
      const stop = 200 * vh;
      const newScale = Math.max(2.5 - (scrollTop - start) / 500, 1);
      setScale(newScale);

      // Calcular a rotação com base no scroll
      if (scrollTop > stop) {
        setRotation(-90);
      } else if (scrollTop > start && scrollTop <= stop) {
        const progress = (scrollTop - start) / (stop - start);
        setRotation(-90 * progress);
      } else {
        setRotation(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="h-80 bg-white"></section>
      <section className="flex h-[500vh] bg-[#111B21]">
        <section className="items-center justify-center bg-black">
          <img
            ref={zoomRef}
            className="sticky -top-20 h-[100vh] w-screen object-contain transition-transform duration-300 will-change-transform"
            style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
            src="celular2.svg"
            alt="Zoomable"
          />
        </section>
      </section>
    </div>
  );
};

export default ZoomImage;
