import { AboutButton } from "@/components/aboutButton";
import { DownloadButton } from "@/components/newButton";
import AnimatedTextCharacter from "@/pages/home/te";
import MotionDivFromTop from "../motion/motionFromTop";
import MotionDivFromBottom from "../motion/motionFromBottom";

export default function ProductSection (){
    return(
        <section className="section2 bg-background sticky  top-0 z-40 h-[150vh] w-screen overflow-clip">
            <div className="sticky top-0 z-0 flex h-[100vh] w-screen items-center bg-secondary_100 p-10">
              <div className="item-center flex h-full w-1/3 flex-col justify-center">
              <MotionDivFromBottom>
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
                  <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-transparent bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900  group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 ">
                    <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Entender Melhor
                    </span>
                  </button>
                  <DownloadButton />
                </div>
                </MotionDivFromBottom>
              </div>
              <div className="flex h-full w-1/3" />

              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <MotionDivFromTop>
                <text className=" text-5xl text-white">
                  Melhores <br />{" "}
                  <span className=" text-[#25D366]">Produtos do Agro</span>
                </text>
                </MotionDivFromTop>
                <AnimatedTextCharacter>
                  🌾 Elevando a qualidade do seu trabalho no campo! Conheça os
                  melhores produtos agrícolas, desde defensivos até vacinas para
                  o gado. O 'Agro na Mão' traz recomendações personalizadas ara
                  suas necessidades. Otimize suas colheitas e criações com
                  produtos de ponta. Baixe o aplicativo e inove no seu agro!
                </AnimatedTextCharacter>
                <AboutButton />
              </div>
            </div>
          </section>
    )
}