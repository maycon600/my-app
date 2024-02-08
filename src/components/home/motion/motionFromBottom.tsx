import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDivFromBottom = ({ children }:any) => {
  const [ref, inView] = useInView();

  const variants = {
    hidden: { 
      y: 100,
      opacity: 0,
    },
    show: { 
      y: 0,
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

export default MotionDivFromBottom;
