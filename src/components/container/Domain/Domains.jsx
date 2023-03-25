import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Domain";
import { motion } from "framer-motion";

const Domains = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-Teal">
          counselling Domain</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
        We provide expert counseling for JEE Mains, NEET, MHCET, Private College  exams. Our personalized guidance and support help you achieve your full potential and succeed in these competitive exams. Explore our website to learn more.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>

      <br/>
      <br/>
      <br/>
      <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-Teal">
          counselling Domain</span>
        </div>
      
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide ">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    
  );
};

export default Domains;
