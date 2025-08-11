/* import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = {duration: 5, bounce: 4, ease: "easeInOut"}

function ArciumPrimary() {
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
      
    </div>
  );
}

export default ArciumPrimary;
 */