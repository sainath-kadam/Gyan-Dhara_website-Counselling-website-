import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> Best{" "}
            <span className="text-Teal">counselling Service</span>
          </div>
          <p className="text-sm text-gray leading-10 mb-4">
          Welcome to Gyan Dhara, the ultimate guide for all your college counseling needs. Our team of experienced college counselors are dedicated to helping you achieve your dreams of attending the college of your choice.

We understand that the college application process can be stressful and overwhelming, which is why we've created this website to make the process as smooth as possible. Our website is designed to provide you with all the information you need to make informed decisions about your college applications.

Our team has years of experience working with high school students and helping them navigate the complex college admissions process. We have helped students from all walks of life to gain admission to their dream colleges, and we are committed to doing the same for you.

We also offer personalized counseling services to help you with every step of the college application process. Our team will work with you one-on-one to identify your strengths, interests, and goals, and help you create a compelling application that showcases your unique qualities.

At Gyan Dhara, we are committed to helping you achieve your college dreams. Whether you're just starting your college search or you're already knee-deep in the application process, we're here to help. Explore our website today to learn more about our services and how we can help you achieve your goals
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
          <a href="https://www.youtube.com/@gyandhara1793" target="_blank ">
            Know more
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
