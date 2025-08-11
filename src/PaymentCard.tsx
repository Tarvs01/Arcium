import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = {duration: 5, bounce: 4, ease: "easeInOut"}

function PaymentCard() {
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
                opacityEnd: 0
            })
        }, 10000);
        const visiInterval = setInterval(() => {
            setIsVisible(false);
        }, 15100);
        return () => {
            clearInterval(interval);
            clearInterval(visiInterval);
        }
    }, []);
  return (
    <div className={isVisible ? "" : "hidden"}>
      <motion.svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
          stroke={"#5e32d5"}
            fill={"transparent"}
            strokeWidth={1}
            strokeLinecap={"round"}
            initial={{pathLength: animateState.pathLengthStart}}
            animate={{pathLength: animateState.pathLengthEnd}}
            transition={transition}
        />
        <motion.path
          d="M3 10H20.5"
          stroke={"#5e32d5"}
            fill={"transparent"}
            strokeWidth={1}
            strokeLinecap={"round"}
            initial={{pathLength: animateState.pathLengthStart}}
            animate={{pathLength: animateState.pathLengthEnd}}
            transition={transition}
        />
        <motion.path
          d="M7 15H9"
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

export default PaymentCard;
