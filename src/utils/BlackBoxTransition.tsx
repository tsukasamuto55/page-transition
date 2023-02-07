import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const BlackBoxTransition = ({ children }: { children: ReactNode }) => {
  const blackBox = {
    initial: {
      height: '100vh',
      opacity: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <div className='relative'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={blackBox}
        className='absolute bg-black w-full'
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
        onAnimationComplete={() =>
          document.body.classList.remove('overflow-hidden')
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BlackBoxTransition;
