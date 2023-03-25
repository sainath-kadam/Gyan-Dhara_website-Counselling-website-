import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
const Councellor = () => {
  return (
    <div className="section" id="councellor">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          IIIT <span className="text-Teal">Alumnus Counselor</span> <br /> 
          
          
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          As an educational counselor, I am dedicated to helping students navigate the complex and often overwhelming world of college admissions. My passion for education and years of experience in the field have equipped me with the knowledge and skills necessary to guide students towards achieving their academic and personal goals. Whether it's helping students identify their strengths, selecting the right college,  I am committed to providing personalized support and guidance every step of the way. My ultimate goal is to empower my students to reach their full potential and succeed in their chosen paths.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
          <a href="https://sainath-kadam.netlify.app" target="_blank ">
            Know more
            </a>
          </button>
        </div>
        {/* <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        > */}
        <div className="p-3 md:w-3/4 sm:row-start-1 border-[3px] border-solid border-Teal rounded-lg">
          <img src={teacher1} alt="" />
        </div>
        {/* </motion.form> */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          IIIT <span className="text-Teal">Alumnus Counselor</span> <br /> 
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          As an educational counselor, I am dedicated to providing students with a truly personalized college counseling experience. I understand that each student is unique, with their own goals, strengths, and challenges, and I work closely with them to create a customized roadmap for success. Through a combination of compassionate guidance, expert advice, and cutting-edge resources, I empower my students to take control of their college admissions journey and achieve their full potential. My approach is centered on building strong relationships with my students and their families, creating a supportive and collaborative environment that fosters growth and success. My ultimate goal is to help each of my students find the right path towards achieving their academic and personal goals, and to make the college admissions process as stress-free and rewarding as possible.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
          <a href="https://www.youtube.com/@gyandhara1793" target="_blank ">
            Know more
            </a>
          </button>
        </div>
        <div className="p-4 md:w-3/4 border-[3px] border-solid border-Teal rounded-lg">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem] border-[3px] border-solid border-Teal rounded-lg">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto ">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Councellor;
