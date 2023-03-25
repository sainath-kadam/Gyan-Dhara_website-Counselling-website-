import React from "react";
import hero1 from "../../assets/hero1.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your counsellor
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
          A modern <br /> take on  <br /> counselling
            
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          "Empowering students to achieve their academic and personal goals through individualized counseling."
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSchmA3q1x07nKvtI66XdPH8MS7lto-Gt2ng93DxuM4hNSQGuA/viewform?usp=sf_link"  target="_blank">
              
            Register 
              </a>
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
            <a href="mailto:mydearsainathkadam@gmail.com?cc=sender@example.com" target="_blank ">
            
            
            Connect with us
              </a>
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          
          <img src={hero1} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We have strong  support & Connections at Different Colleges  {" "}
          <span className="text-Teal">
            at different Colleges 
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
