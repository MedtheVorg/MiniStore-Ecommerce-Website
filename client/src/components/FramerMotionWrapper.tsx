//  framer motion
import { motion } from 'framer-motion';
const divVariants = {
  hidden: {
    opacity: 0,
    x: -2,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 2,
  },
};

type FramerMotionWrapperProps = {
  children: React.ReactNode;
};

const FramerMotionWrapper = ({ children }: FramerMotionWrapperProps) => {
  return (
    <motion.div
      variants={divVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};
export default FramerMotionWrapper;
