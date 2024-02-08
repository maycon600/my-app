import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextCharacter = ({ children }) => {
  const text = typeof children === 'string' || typeof children === 'undefined' ? children : children.toString();
  const lines = text ? text.split('\n') : [];
  const [animationStarted, setAnimationStarted] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.01, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col"
      variants={container}
      initial="hidden"
      animate={animationStarted ? "visible" : "hidden"}
      ref={ref}
    >
      {lines.map((line, lineIndex) => (
        <motion.p
          className="text-white mt-5"
          variants={container}
          key={lineIndex}
          custom={lineIndex}
        >
          {Array.from(line).map((letter, index) => (
            <motion.span
              className="inline-block text-lg"
              variants={child}
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
