import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useSpring } from "framer-motion";
import gsap from "gsap";
import EarthCanvas from ".";
import { AboutButton } from "@/components/aboutButton";
import { DownloadButton, NewButton } from "@/components/newButton";
import AnimatedQuote from "./text";
import AnimatedTextWord from "./text";
import AnimatedTextCharacter from "./te";
import MyMotionDiv from "../../components/home/motion/motionFromTop";
import MyMotionDiv2 from "../../components/home/motion/motionFromBottom";
import MotionDivFromBottom from "../../components/home/motion/motionFromBottom";
import MotionDivFromTop from "../../components/home/motion/motionFromTop";
import SoySection from "@/components/home/sections/soySection";
import BullSection from "@/components/home/sections/bullSection";
import { PropertySection } from "@/components/home/sections/propertySection";
import ProductSection from "@/components/home/sections/productSection";
import NewsSection from "@/components/home/sections/NewsSection";
import Footer from "@/components/home/sections/footer";
import PhoneModel from "../../components/home/sections/PhoneModel";
const animationOrder = {
  initial: 0,
  fadeinPrimeiraSessao: 100 / 750, // Inicia um pouco antes da primeira sessão
  primeiraSessao: 150 / 750, // Início da primeira sessão
  fadeOutPrimeiraSessao: 250 / 750, // Termina um pouco depois da primeira sessão
  fadeInSegundaSessao: 300 / 750, // Inicia um pouco antes da segunda sessão
  segundaSessao: 400 / 750, // Início da segunda sessão
  fadeOutSegundaSessao: 450 / 750, // Termina um pouco depois da segunda sessão
  fadeInTerceiraSessao: 500 / 750, // Inicia um pouco antes da terceira sessão
  terceiraSessao: 450 / 750, // Início da terceira sessão
  fadeOutTerceiraSessao: 550 / 750, // Termina um pouco depois da terceira sessão
  fadeInQuartaSessao: 575 / 750, // Inicia um pouco antes da quarta sessão
  quartaSessao: 600 / 750, // Início da quarta sessão
  fadeOutQuartaSessao: 620 / 750, // Termina um pouco depois da quarta sessão
  fadeInQuintaSessao: 730 / 750, // Inicia um pouco antes da quinta sessão
  quintaSessao: 750 / 750,
};
const animationOrder1 = {
  initial: 0 / 750,
  chega1: 100 / 750,
  mantem1: 150 / 750,
  cresce: 225 / 750,
  chega2: 250 / 750,
  mantem2: 300 / 750,
  cresce2: 375 / 750,
  chega3: 400 / 750,
  mantem3: 450 / 750,
  cresce3: 525 / 750,
  chega4: 500 / 750,
  mantem4: 600 / 750,
  cresce4: 625 / 750,
  chega5: 700 / 750,
  mantem5: 750 / 750,
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const simulateKeyPress = () => {
    // Criando um novo evento de teclado
    const event = new KeyboardEvent("keydown", {
      key: "∆",
      keyCode: 75, // Código da tecla "k"
      bubbles: true, // Permite que o evento se propague
    });

    // Disparando o evento
    document.dispatchEvent(event);
  };
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (shouldAnimate) {
      simulateKeyPress();
      // Resetando a variável de estado após a animação
      setShouldAnimate(false);
    }
  }, [shouldAnimate]);

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder1.initial,
      animationOrder1.chega1,
      animationOrder1.mantem1,
      animationOrder1.cresce,
      animationOrder1.chega2,
      animationOrder1.mantem2,
      animationOrder1.cresce2,
      animationOrder1.chega3,
      animationOrder1.mantem3,
      animationOrder1.cresce3,
      animationOrder1.chega4,
      animationOrder1.mantem4,
      animationOrder1.cresce4,
      animationOrder1.chega5,
      animationOrder1.mantem5,
    ],
    [1, 1, 1, 1.2, 1, 1, 1.2, 1, 1, 1.2, 1, 1, 1.2, 1, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder1.initial,
      animationOrder1.chega1,
      animationOrder1.mantem1,
      animationOrder1.cresce,
      animationOrder1.chega2,
      animationOrder1.mantem2,
      animationOrder1.cresce2,
      animationOrder1.chega3,
    ],
    ["0%", "0%", "0%", "0%", "0%", "0%", "100%", "160%"],
  );

  const rotate = useTransform(
    scrollYProgress,
    [animationOrder1.cresce, animationOrder1.chega2],
    [2.6, 8.8],
  );
  const spring = useSpring(x);

  const [rotationY, setRotationY] = useState(2.6);
  const controls = useAnimation();
  const [imagemSelecionada, setImagemSelecionada] = useState("image1");
  const calculateRotation = (scrollValue, image) => {
    const segments = [
      {
        start: animationOrder1.mantem1,
        end: animationOrder1.chega2,
        image: "image2",
      },
      {
        start: animationOrder1.mantem2,
        end: animationOrder1.chega3,
        image: "image3",
      },
      {
        start: animationOrder1.mantem3,
        end: animationOrder1.cresce3,
        image: "image4",
      },
      {
        start: animationOrder1.cresce4,
        end: animationOrder1.chega5,
        image: "image5",
      },
    ];

    // Verifica se o scrollValue está antes do primeiro segmento
    if (scrollValue < segments[0].start) {
      setImagemSelecionada("image1");
      return rotationY; // Retorna o valor atual
    }

    for (let i = 0; i < segments.length; i++) {
      const { start, end } = segments[i];
      if (scrollValue >= start && scrollValue <= end) {
        const progress = (scrollValue - start) / (end - start);
        setImagemSelecionada(segments[i].image); // Define a imagem com base no segmento
        return 2.6 + progress * (8.8 - 2.6);
      }
    }

    return rotationY; // Retorna o valor atual
  };
  useEffect(() => {
    const updateRotation = (value) => {
      const targetRotation = calculateRotation(value);
      setRotationY(targetRotation);

      controls.start({
        rotateY: targetRotation,
        transition: { type: "tween", duration: 0.5 },
      });
    };

    const unsubscribe = scrollYProgress.onChange(updateRotation);

    return () => unsubscribe();
  }, [controls, scrollYProgress]);

  const mudarImagem = (novaImagem) => {
    setImagemSelecionada(novaImagem);
    console.log(novaImagem);
  };
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
  return (
    <>
      <section className=" header h-screen w-screen  overflow-clip bg-[#607559]">
        <div
          className="relative flex h-screen w-screen flex-row rounded-b-[60px] bg-cover bg-center px-32 py-5 "
          style={{ backgroundImage: "url('./background.svg')" }}
        >
          <div className="h-full w-1/2 items-center justify-center">
            <img src={"./logo.svg"} />
            <h1 className="text-5xl text-white">
              Tudo do Agro <br /> na Palma da sua Mão
            </h1>
            <h2 className="text-xl text-white">
              Tudo do Agro do Mato Grosso que você
              <br /> vai precisa na palma da sua Mão
            </h2>
            <button className="center mt-3 flex h-[3rem] w-[12rem] flex-row items-center justify-center rounded-full bg-green-500 text-lg text-[#1C1E21]">
              Baixar agora
              <img src={"./arrowBottom.svg"} className="h-8 w-8" />
            </button>
          </div>
          <div className="flex h-full w-1/2  justify-center object-cover">
            <img
              src={"./peoplesBanner.png"}
              className="absolute bottom-0 flex h-full  w-auto justify-center object-cover"
            />
          </div>
        </div>
      </section>
        {/* <motion.div
          className="sticky top-[20%] z-[60] flex  h-[70vh] w-[20rem] items-start justify-start pl-10 pr-5"
          style={{ x }}
        >
          <div className="h-[70vh] w-[16rem]">
            <Scene/>
          </div>
        </motion.div> */}
      <main>

        <PhoneModel/>
        <div id="phone-model"></div>
        <div ref={targetRef} className="">
          <SoySection />
          <BullSection />
          <PropertySection />
          <ProductSection />
          <NewsSection  />
          <div id="battery"></div>
        </div>
      </main>
      <Footer  />
    </>
  );
}
