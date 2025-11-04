import React from "react";
import { motion } from "framer-motion";
import profile from "/src/components/Home/profile.jpeg";

export default function Profile() {
  const professionalText = `I'm a passionate first-year Computer Applications student with a strong focus on cybersecurity and web development. I thrive on solving complex problems and am dedicated to building efficient, scalable, and secure applications. I'm currently diving deep into Data Structures and Algorithms while honing my skills in technologies like React, Vite, and Java.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const breathingAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative w-full select-none min-h-[80vh] flex justify-center items-center pt-24 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-11/12 md:w-4/5 lg:w-2/3 flex flex-col-reverse md:flex-row items-center justify-center gap-14 md:gap-20"
      >
        <motion.div
          variants={textContainerVariants}
          className="text-center md:text-left max-w-xl text-gray-800"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <motion.h2
            variants={textChildVariants}
            className="text-4xl font-semibold text-black mb-5"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={textChildVariants}
            className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line"
          >
            {professionalText}
          </motion.p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="relative flex justify-center"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={breathingAnimation}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-full shadow-xl overflow-hidden border-4 border-white w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              <img
                src={profile}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              S/>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}