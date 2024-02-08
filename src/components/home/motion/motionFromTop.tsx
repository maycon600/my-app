import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDivFromTop = ({ children }:any) => {
  const [ref, inView] = useInView();

  const variants = {
    hidden: { 
      x: 100,
      opacity: 0,
    },
    show: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionDivFromTop;
