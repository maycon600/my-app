import gsap, { random } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import Spline from "@splinetool/react-spline";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const container = useRef(null);
  const main = useRef(null);
  const img = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to(".box", {
  //       motionPath: {
  //         path: "#motionPath",
  //         align: "#motionPath",
  //         autoRotate: true,
  //         alignOrigin: [0.5, 0.5],
  //       },
  //       scrollTrigger: {
  //         trigger: "#svg",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".main",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,

            markers: true,
          },
        })
        .to(".box", {
          y: 500,
          duration: 2,
        })
        .to(".box", {
          x: 400,
          duration: 5,
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-[1000vh] bg-gradient-to-b from-red-500 to-green-500">
      {/* <svg
        id="svg"
        viewBox="0 0 759 9670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="motionPath"
          d="M132.501 1.00788L660.001 2333.5C786.768 3330.03 812.704 3883.71 601.499 4842.5C237.319 5793.02 185.111 6312.02 132.501 7234L0.500647 9669.01"
          stroke="#FF0000"
        />
      </svg>
      <div className=" box h-20 w-20 bg-blue-500" /> */}
      <div className="main mt-20 ">
        <div className="box h-20 w-20 bg-blue-500" />
      </div>
    </div>
  );
}
