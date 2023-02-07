import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const OpacityTransition = ({ children }: { children: ReactNode }) => {
  const opacity = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };
  return (
    <div>
      <motion.div initial='initial' animate='animate' variants={opacity}>
        {children}
      </motion.div>
    </div>
  );
};

export default OpacityTransition;
