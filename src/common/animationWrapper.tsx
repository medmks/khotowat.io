import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimationWrapperProps = {
  children: ReactNode;
  keyValue?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  className?: string;
};

const AnimationWrapper:React.FC<AnimationWrapperProps> = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;