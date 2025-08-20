import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
};

const AnimationUtils = {
  FadeIn: ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  },

  SlideIn: ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideIn}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  },
};

export default AnimationUtils;