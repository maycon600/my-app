export default function Footer (){
    return (
        <section className="section2 bg-background relative  top-0 h-[50vh] w-screen overflow-clip">
        <div className="sticky top-0 z-0 flex h-[50vh] w-screen items-center bg-secondary_100">
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
    )
}