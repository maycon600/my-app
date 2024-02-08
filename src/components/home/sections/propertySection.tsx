import { AboutButton } from "@/components/aboutButton";
import AnimatedTextCharacter from "@/pages/home/te";
import MotionDivFromRight from "../motion/motionFromRight";


export function PropertySection() {
  return (
    <section className=" section3 bg-background sticky  top-0 z-30 h-[150vh] w-screen overflow-clip">
            <div className="sticky top-0 z-0 flex h-[100vh] w-screen items-center  bg-primary_100">
              <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
                <MotionDivFromRight>
                <text className=" text-5xl text-white">
                  Propriedades <br />{" "}
                  <span className=" text-[#25D366]">Incríveis</span>
                </text>
                </MotionDivFromRight>
                <AnimatedTextCharacter>
                  Descubra a fazenda dos seus sonhos! Explore um marketplace
                  exclusivo de propriedades e itens agrícolas à venda. O 'Agro
                  na Mão' conecta você às melhores oportunidades de investimento
                  em terras e equipamentos. Seja para expandir, começar seu
                  negócio, investir ou vender, encontre aqui. Baixe o app e
                  comece sua jornada!
                </AnimatedTextCharacter>
                <AboutButton />
              </div>
              <div className="flex h-full w-2/3 items-center justify-center"></div>
            </div>
          </section>
  );
}