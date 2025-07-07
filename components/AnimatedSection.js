// "use client";
// import { motion } from "framer-motion";

// export default function AnimatedSection({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       {children}
//     </motion.div>
//   );
// }


import { motion } from 'framer-motion';

export default function AnimatedSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I'm a passionate Full-Stack Developer with expertise in modern web technologies.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I specialize in React, Node.js, and deploying applications to the cloud.
        </p>
      </motion.div>
    </section>
  );
}
