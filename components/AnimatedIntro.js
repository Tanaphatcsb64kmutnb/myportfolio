import { motion } from 'framer-motion';

export default function AnimatedIntro({ scrollY, isScrolled }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - (scrollY / 200))
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold"
          style={{
            opacity: Math.max(0, 1 - (scrollY / 150))
          }}
        >
          TANAPHAT
        </motion.h1>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          style={{
            opacity: Math.max(0, 1 - (scrollY / 150))
          }}
        >
          TAKULPUKDICHUMPON
        </motion.h1>
        <motion.h3
          className="text-lg md:text-xl mt-4 text-gray-300"
          style={{
            opacity: Math.max(0, 1 - (scrollY / 100))
          }}
        >
          Looking for FULLSTACK-SOFTWARE TEST-AI ENGINEER
        </motion.h3>
      </motion.div>
    </div>
  );
}