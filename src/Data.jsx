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


import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";

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
    link: "Councellor",
  },
  {
    id: 5,
    href: "Yt_channel",
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
    category: "Private Colleges",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Jee Mains",
    title: "Councelling",
    rating: 4.9,
    participants: 200,
    price: 1000,
  },
  {
    id: 2,
    image: courses2,
    category: "MH-CET",
    title: "Councelling",
    rating: 4.8,
    participants: 150,
    price: 800,
  },
  {
    id: 3,
    image: courses3,
    category: "BITSAT",
    title: "Councelling",
    rating: 4.9,
    participants: 100,
    price: 1200,
  },
  {
    id: 4,
    image: courses4,
    category: "NEET",
    title: "Councelling",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "VITEEE",
    title: "Councelling",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: courses6,
    category: "SRAM",
    title: "Councelling",
    rating: 4.9,
    participants: 500,
    price: 105,
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

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6,logo7,logo8];

export const accordions = [
  {
    id: 1,
    title: "What is Councelling?",
  },
  {
    id: 2,
    title: "Why it is important?",
  },
  {
    id: 3,
    title: "how to start process?",
  },
  {
    id: 4,
    title: "what are the things included in it ?",
  },
];
