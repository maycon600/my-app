import { AboutButton } from "@/components/aboutButton";
import { DownloadButton } from "@/components/newButton";
import AnimatedTextCharacter from "@/pages/home/te";
import MotionDivFromTop from "../motion/motionFromTop";
import MotionDivFromBottom from "../motion/motionFromBottom";
import MotionDivFromRight from "../motion/motionFromRight";
import x from "../../../../public/1.jpeg"
export default function NewsSection (){
    return (
        <section id="battery" className="section3 bg-background sticky  top-0 z-50 h-[150vh] w-screen overflow-clip">
            <div className="sticky top-0 z-0 flex h-[100vh] w-screen items-center  bg-primary_100">
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <MotionDivFromRight>
                <text className=" text-5xl text-white">
                  Esteja <span className=" text-[#25D366]">Ligado</span>
                </text>
                </MotionDivFromRight>
                <AnimatedTextCharacter>
                  Fique por dentro do mundo agropecuário! Com o 'Agro na Mão',
                  você acessa as últimas notícias, tendências e inovações do
                  setor. Seja o primeiro a saber sobre novas tecnologias,
                  práticas sustentáveis e muito mais. Informação é poder, e com
                  nosso app, ela está sempre ao seu alcance. Baixe agora e
                  esteja sempre um passo à frente!
                </AnimatedTextCharacter>
                <AboutButton />
              </div>
              <div className="flex h-full w-1/3" />
              <div className="item-center flex h-full w-1/3 flex-col justify-center">
            <MotionDivFromBottom>
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
                <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900  group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 ">
                  <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    Entender Melhor
                  </span>
                </button>
                <DownloadButton />
              </div>
              </MotionDivFromBottom>
            </div>
            </div>
          </section>
    )
}