export function AboutButton() {
  return (
    <button className="group relative mt-5 flex w-28 flex-col border-none">
      <span className="text-md flex text-white">
        Saiba Mais <img src={"./arrowLeft.png"} className="p-1" />
      </span>
      <span className="absolute bottom-0 left-0 h-0.5 w-10 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-[80%]"></span>
    </button>
  );
}
