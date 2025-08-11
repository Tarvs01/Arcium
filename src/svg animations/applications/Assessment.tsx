import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = { duration: 5, bounce: 4, ease: "easeInOut" };

function Assessment() {
  const [animateState, setAnimateState] = useState({
    pathLengthStart: 0,
    pathLengthEnd: 1,
    opacityStart: 1,
    opacityEnd: 1,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateState({
        pathLengthStart: 1,
        pathLengthEnd: 0,
        opacityStart: 1,
        opacityEnd: 0,
      });
    }, 10000);
    const visiInterval = setInterval(() => {
      setIsVisible(false);
    }, 15100);
    return () => {
      clearInterval(interval);
      clearInterval(visiInterval);
    };
  }, []);
  return (
    <div className={isVisible ? "" : "hidden"}>
      <motion.svg
        width="800px"
        height="800px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="3"
        stroke="#000000"
        fill="none"
      >
        <motion.rect x="11.83" y="38.02" width="7" height="11.45" 
        stroke={"#5e32d5"}
        fill={"transparent"}
        strokeWidth={1}
        strokeLinecap={"round"}
        initial={{pathLength: animateState.pathLengthStart}}
        animate={{pathLength: animateState.pathLengthEnd}} 
        transition={transition}
        />
        <motion.rect x="24.83" y="23.12" width="7" height="26.35" 
        stroke={"#5e32d5"}
        fill={"transparent"}
        strokeWidth={1}
        strokeLinecap={"round"}
        initial={{pathLength: animateState.pathLengthStart}}
        animate={{pathLength: animateState.pathLengthEnd}} 
        transition={transition}
        />
        <motion.rect x="37.83" y="28.2" width="7" height="21.27" 
        stroke={"#5e32d5"}
        fill={"transparent"}
        strokeWidth={1}
        strokeLinecap={"round"}
        initial={{pathLength: animateState.pathLengthStart}}
        animate={{pathLength: animateState.pathLengthEnd}} 
        transition={transition}
        />
        <motion.rect x="50.83" y="13.08" width="7" height="36.4" 
        stroke={"#5e32d5"}
        fill={"transparent"}
        strokeWidth={1}
        strokeLinecap={"round"}
        initial={{pathLength: animateState.pathLengthStart}}
        animate={{pathLength: animateState.pathLengthEnd}} 
        transition={transition}
        />
        <motion.polyline points="5.76 6.78 5.76 55.64 61.7 55.64" 
        stroke={"#5e32d5"}
        fill={"transparent"}
        strokeWidth={1}
        strokeLinecap={"round"}
        initial={{pathLength: animateState.pathLengthStart}}
        animate={{pathLength: animateState.pathLengthEnd}} 
        transition={transition}
        />
      </motion.svg>
    </div>
  );
}

export default Assessment;
