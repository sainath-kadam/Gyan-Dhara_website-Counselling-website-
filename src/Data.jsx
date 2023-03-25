import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";


import logo9 from "./assets/logo9.png";
import logo10 from "./assets/logo10.png";
import logo11 from "./assets/logo11.png";
import logo12 from "./assets/logo12.png";
import logo14 from "./assets/logo14.png";
import logo16 from "./assets/logo16.png";
import logo17 from "./assets/logo17.png";
import logo18 from "./assets/logo18.png";


export const logos = [logo9, logo10, logo11, logo12, logo14, logo16,logo17,logo18];

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "domain",
    link: "Domain",
  },
  {
    id: 4,
    href: "councellor",
    link: "Counsellor",
  },
  {
    id: 5,
    href: "yt_channel",
    link: "YT_Channel",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "JEE MAINS",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "NEET",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "MHCET",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Top State Colleges",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Jee Mains",
    title: "Counselling",
    rating: 4.9,
    participants: 200,
    price: 12,
  },
  {
    id: 2,
    image: courses2,
    category: "MH-CET",
    title: "Counselling",
    rating: 4.8,
    participants: 150,
    price: 18,
  },
  {
    id: 3,
    image: courses3,
    category: "BITSAT",
    title: "Counselling",
    rating: 4.7,
    participants: 100,
    price: 20,
  },
  {
    id: 4,
    image: courses4,
    category: "NEET",
    title: "Counselling",
    rating: 4.4,
    participants: 600,
    price: 20,
  },
  {
    id: 5,
    image: courses5,
    category: "VITEEE",
    title: "Counselling",
    rating: 4.8,
    participants: 500,
    price: 10,
  },
  {
    id: 6,
    image: courses6,
    category: "SRAM",
    title: "Counselling",
    rating: 4.9,
    participants: 500,
    price: 10,
  },
  // {
  //   id: 7,
  //   image: courses7,
  //   category: "",
  //   title: "",
  //   rating: 4.9,
  //   participants: 500,
  //   price: 105,
  // },
  // {
  //   id: 8,
  //   image: courses8,
  //   category: "",
  //   title: "",
  //   rating: 4.9,
  //   participants: 500,
  //   price: 105,
  // },
];



export const accordions = [
  {
    id: 1,
    title: "What is counselling?",
    ans:" College counseling is a process where students receive guidance and support in navigating the college admissions process. The goal is to help students achieve their academic and personal goals and find the best fit for their college education."
  },
  {
    id: 2,
    title: "Why it is important?",
    ans:" College counseling is important because it helps students choose the right college, assists them in the application process, provides guidance on financial aid and scholarships, and offers personalized support for students."
  },
  {
    id: 3,
    title: "How to start process?",
    ans:" To start the college application process, research different colleges, check admission requirements, and gather necessary materials such as transcripts and test scores. Then, submit your application by the deadline and follow up with any additional requirements or information needed."
  },
  {
    id: 4,
    title: "what  kind of support will be provided by counselore ?",
    ans:" A college counselor can assist with filling out the application, updating dates, requesting admission latter, tracking deadlines, and ensuring all requirements are met."
  },
];
