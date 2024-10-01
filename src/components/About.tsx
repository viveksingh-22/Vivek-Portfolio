import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 text-indigo-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        
           Hi, I'm Vivek Singh I'm a passionate creative designer 
           with a strong focus on video editing and motion graphics.
            I love bringing ideas to life through visually engaging and dynamic content.
             With a blend of creativity and technical skills, I strive to create
              captivating designs and videos that leave a lasting impact.
            I have experience working across different mediums, 
          from social media content to full-length videos, 
        always ensuring the message is clear and visually appealing. 
      I stay updated on the latest design trends to bring fresh and innovative
    solutions to every project. My goal is to turn concepts into experiences that resonate 
     with audiences.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
