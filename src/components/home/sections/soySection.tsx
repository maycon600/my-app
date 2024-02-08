import { DownloadButton } from "@/components/newButton";
import MotionDivFromTop from "../motion/motionFromTop";
import AnimatedTextCharacter from "@/pages/home/te";
import MotionDivFromBottom from "../motion/motionFromBottom";
import { AboutButton } from "@/components/aboutButton";

export default function SoySection() {
    return (
<section  id="phone-model" className="phone-model section1 bg-background sticky top-0 z-10  h-[150vh] w-screen overflow-clip">
<div className="sticky top-0 z-0 flex h-[100vh] w-screen items-center bg-primary_100">
  <div className="flex h-full w-1/3 items-center justify-center"></div>
  <div className="item-center flex h-full w-1/3 flex-col justify-center">
  <MotionDivFromBottom>
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
      <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900  group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 ">
        <span className="relative z-50 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          Entender Melhor
        </span>
      </button>
      <DownloadButton />
    </div>
    </MotionDivFromBottom>
  </div>
  <div className=" flex h-full w-1/3 flex-col justify-center  p-10">
  <MotionDivFromTop>
    <text className=" text-5xl text-white">
      Preço da <br /> <span className=" text-[#25D366]">Soja</span>
    </text>
  </MotionDivFromTop>
    <AnimatedTextCharacter>
      🌱 Mantenha-se sempre à frente no mercado agrícola! Com o Agro
      na Mão, você tem acesso em tempo real às cotações atualizadas de soja, milho, algodão
      e muito mais. Faça escolhas informadas e maximize seus lucros com informações precisas
      e atualizadas. Baixe agora e transforme a maneira como você acompanha o mercado!
    </AnimatedTextCharacter>
    <AboutButton />
  </div>
</div>
</section>
    )
}   