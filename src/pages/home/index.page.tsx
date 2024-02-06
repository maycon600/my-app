import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useSpring } from "framer-motion"
import gsap from "gsap";
import EarthCanvas from ".";
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
    ["0%", "0%", "0%", "0%", "0%", "0%", "100%", "200%"],
  );

  const rotate = useTransform(
    scrollYProgress,
    [animationOrder1.cresce, animationOrder1.chega2],
    [2.6, 8.8]
  );
  const spring = useSpring(x)

  const [rotationY, setRotationY] = useState(2.6);
  const controls = useAnimation();
  const [imagemSelecionada, setImagemSelecionada] = useState('image1');
const calculateRotation = (scrollValue, image) => {
  const segments = [
    { start: animationOrder1.mantem1, end: animationOrder1.chega2, image: "image2" },
    { start: animationOrder1.mantem2, end: animationOrder1.chega3, image: "image3" },
    { start: animationOrder1.mantem3, end: animationOrder1.cresce3, image: "image4" },
    { start: animationOrder1.cresce4, end: animationOrder1.chega5, image: "image5" },
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
      console.log("segmentIndex", i, ": Progresso:", progress);
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

      controls.start({ rotateY: targetRotation, transition: { type: "tween", duration: 0.5 } });
    };

    const unsubscribe = scrollYProgress.onChange(updateRotation);

    return () => unsubscribe();
  }, [controls, scrollYProgress]);


  const mudarImagem = (novaImagem) => {
      setImagemSelecionada(novaImagem);
      console.log(novaImagem);
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

      <main>
        <motion.div
          className="sticky top-[20%] flex justify-start  items-start z-[60] h-[70vh] w-[20rem] pl-10 pr-5"
          style={{ x }}
        >
          <div className="h-[70vh] w-[16rem]">
          <EarthCanvas rotationY={rotationY} imagem={imagemSelecionada}/>
          {/* <button className=" bg-white ml-2" onClick={()=> mudarImagem("image1")}>1</button>
          <button className=" bg-white ml-2"  onClick={()=> mudarImagem("image2")}>2</button>
          <button className=" bg-white ml-2"  onClick={()=> mudarImagem("image3")}>3</button>
          <button className=" bg-white ml-2"  onClick={()=> mudarImagem("image4")}>4</button>
          <button className=" bg-white ml-2"  onClick={()=> mudarImagem("image5")}>5</button> */}
          </div>
        </motion.div>
        <div ref={targetRef} className="">
          <section className=" sticky top-0 section1 bg-background z-10 -mt-[70vh] h-[150vh] w-screen overflow-clip">
            <div className="bg-primary_100 sticky top-0 z-0 flex h-[100vh] w-screen items-center">
              {/* <div clas
              <button
                className="ml-[30%] h-[100px] w-[100px]  bg-red-500"
                onClick={() => setShouldAnimate(!shouldAnimate)}
              /> */}
              <div className="flex h-full w-1/3 items-center justify-center">
                
              </div>
              <div className="item-center flex h-full w-1/3 flex-col justify-center">
                <text className="mb-10 text-white">Ver o soja</text>
                <div className="flex  w-full flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <text className="text-white">
                      R$
                      <span className="text-5xl text-white ">237,75</span>
                    </text>
                    <text className="mt-5 text-white">
                      Praça de Sorriso(mt)
                    </text>
                  </div>
                  <img
                    src={"./graffic.png"}
                    className="w-30 -mt-10 ml-2 h-20 object-fill"
                  />
                </div>

                <div className="mt-10 flex w-full justify-evenly">
                  <button className="w-36 rounded-2xl border-2 border-solid border-white bg-transparent p-2 text-white">
                    {" "}
                    Entender Melhor
                  </button>
                  <button className="w-36 rounded-2xl border-2 border-none bg-[#25D366] p-2 ">
                    {" "}
                    Baixar o App
                  </button>
                </div>
              </div>
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <text className=" text-5xl text-white">
                  Preço da <br /> <span className=" text-[#25D366]">Soja</span>
                </text>
                <p className="mt-10 text-white">
                  Texto texto texto texto Texto texto texto texto Texto texto
                  texto texto Texto texto texto texto Texto texto texto
                  textoTexto texto texto texto Texto texto texto textoTexto
                  texto texto texto
                </p>
                <button className="mt-10 self-start text-white">
                  Saiba mais
                </button>
              </div>
            </div>
          </section>
          <section className="section2 top-0 bg-background  sticky z-20 h-[150vh] w-screen overflow-clip">
            <div className="bg-secondary_100 sticky top-0 z-0 flex h-[100vh] w-screen items-center">
              <div className="flex h-full w-1/3 items-center justify-center">
                
              </div>
              <div className="item-center flex h-full w-1/3 flex-col justify-center">
                <text className="mb-10 text-white">
                  Ver o Preço da @ Boi (R$)
                </text>
                <div className="flex  w-full flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <text className="text-white">
                      R$
                      <span className="text-5xl text-white ">237,75</span>
                    </text>
                    <text className="mt-5 text-white">
                      Boi Gordo - B3 (Pregão Regular)
                    </text>
                  </div>
                  <img
                    src={"./graffic.png"}
                    className="w-30 -mt-10 ml-2 h-20 object-fill"
                  />
                </div>

                <div className="mt-10 flex w-full justify-evenly">
                  <button className="w-36 rounded-2xl border-2 border-solid border-white bg-transparent p-2 text-white">
                    {" "}
                    Entender Melhor
                  </button>
                  <button className="w-36 rounded-2xl border-2 border-none bg-[#25D366] p-2 ">
                    {" "}
                    Baixar o App
                  </button>
                </div>
              </div>
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <text className=" text-5xl text-white">
                  Preço do <br /> <span className=" text-[#25D366]">Boi</span>
                </text>
                <p className="mt-10 text-white ">
                  Texto texto texto texto Texto texto texto texto Texto texto
                  texto texto Texto texto texto texto Texto texto texto
                  textoTexto texto texto texto Texto texto texto textoTexto
                  texto texto texto
                </p>
                <button className="mt-10 self-start text-white">
                  Saiba mais
                </button>
              </div>
            </div>
          </section>
          <section className=" section3 top-0 bg-background  sticky z-30 h-[150vh] w-screen overflow-clip">
            <div className="bg-primary_100 sticky top-0 z-0 flex h-[100vh] w-screen  items-center">
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <text className=" text-5xl text-white">
                  Propriedades <br />{" "}
                  <span className=" text-[#25D366]">Incríveis</span>
                </text>
                <p className="mt-10 text-white ">
                  Texto texto texto texto Texto texto texto texto Texto texto
                  texto texto Texto texto texto texto Texto texto texto
                  textoTexto texto texto texto Texto texto texto textoTexto
                  texto texto texto
                </p>
                <button className="mt-10 self-start text-white">
                  Saiba mais
                </button>
              </div>
              <div className="flex h-full w-2/3 items-center justify-center">
                
              </div>
            </div>
          </section>
          <section className="section2 top-0 bg-background  sticky z-40 h-[150vh] w-screen overflow-clip">
            <div className="bg-secondary_100 sticky top-0 z-0 flex h-[100vh] w-screen items-center p-10">
              <div className="item-center flex h-full w-1/3 flex-col justify-center">
                <text className="mb-10 text-white">Os melhores do Mercado</text>
                <div className="flex  w-full flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <img src={"./vacina.png"} />
                    <text className="text-white">
                      R$
                      <span className="text-5xl text-white ">237,75</span>
                    </text>
                    <text className="mt-5 text-white">Vacina para bovinos</text>
                  </div>
                  <div className="flex flex-col">
                    <img src={"./vacina.png"} />
                    <text className="text-white">
                      R$
                      <span className="text-5xl text-white ">237,75</span>
                    </text>
                    <text className="mt-5 text-white">Defensivos Agrícola</text>
                  </div>
                </div>

                <div className="mt-10 flex w-full justify-evenly">
                  <button className="w-36 rounded-2xl border-2 border-solid border-white bg-transparent p-2 text-white">
                    {" "}
                    Entender Melhor
                  </button>
                  <button className="w-36 rounded-2xl border-2 border-none bg-[#25D366] p-2 ">
                    {" "}
                    Baixar o App
                  </button>
                </div>
              </div>
              <div className="flex h-full w-1/3" />

              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <text className=" text-5xl text-white">
                  Melhores <br />{" "}
                  <span className=" text-[#25D366]">Produtos do Agro</span>
                </text>
                <p className="mt-10 text-white ">
                  Texto texto texto texto Texto texto texto texto Texto texto
                  texto texto Texto texto texto texto Texto texto texto
                  textoTexto texto texto texto Texto texto texto textoTexto
                  texto texto texto
                </p>
                <button className="mt-10 self-start text-white">
                  Saiba mais
                </button>
              </div>
            </div>
          </section>
          <section className=" section3 top-0 bg-background  sticky z-50 h-[150vh] w-screen overflow-clip">
            <div className="bg-primary_100 sticky top-0 z-0 flex h-[100vh] w-screen  items-center">
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <text className=" text-5xl text-white">
                  Esteja <span className=" text-[#25D366]">Ligado</span>
                </text>
                <p className="mt-10 text-white">
                  Texto texto texto texto Texto texto texto texto Texto texto
                  texto texto Texto texto texto texto Texto texto texto
                  textoTexto texto texto texto Texto texto texto textoTexto
                  texto texto texto
                </p>
                <button className="mt-10 self-start text-white">
                  Saiba mais
                </button>
              </div>
              <div className="flex h-full w-1/3" />
              <div className="item-center flex h-full w-1/3 flex-col justify-center pr-10">
                <text className="mb-10 text-white">Ver o soja</text>
                <div className="flex  w-full flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <text className="text-white">
                      R$
                      <span className="text-5xl text-white ">237,75</span>
                    </text>
                    <text className="mt-5 text-white">
                      Praça de Sorriso(mt)
                    </text>
                  </div>
                  <img
                    src={"./graffic.png"}
                    className="w-30 -mt-10 ml-2 h-20 object-fill"
                  />
                </div>

                <div className="mt-10 flex w-full justify-evenly">
                  <button className="w-36 rounded-2xl border-2 border-solid border-white bg-transparent p-2 text-white">
                    {" "}
                    Entender Melhor
                  </button>
                  <button className="w-36 rounded-2xl border-2 border-none bg-[#25D366] p-2 ">
                    {" "}
                    Baixar o App
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="section2 top-0 bg-background  relative h-[50vh] w-screen overflow-clip">
        <div className="bg-secondary_100 sticky top-0 z-0 flex h-[50vh] w-screen items-center">
          <div
            // ref={trackedElementRef}
            className="flex h-full w-[25%] flex-col items-center justify-center"
          >
            <img src={"./qrCode.png"} className="mb-1" />
            <button className="mb-1 flex">
              <img src={"./googlePlay.png"} />
            </button>
            <button className="flex">
              <img src={"./apple.png"} />
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-center self-center">
            <img src={"./logo.svg"} />
            <div className="mt-[20px] flex h-[130px] w-full flex-row items-center justify-center border-t-2 border-[#33463F]">
              <img src={"./Link-Twitter.png"} className="mr-5 h-12 w-12" />
              <img src={"./Link-Youtube.png"} className="mr-5 h-12 w-12" />
              <img src={"./Link-Instagram.png"} className="mr-5 h-12 w-12" />
              <img src={"./Link-Facebook.png"} className="mr-5 h-12 w-12" />
            </div>
          </div>
          <div
            // ref={trackedElementRef}
            className="h-full w-[25%] "
          ></div>
        </div>
      </section>
    </>
  );
}
