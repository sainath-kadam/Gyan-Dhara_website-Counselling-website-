import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

import {
  
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
          Ready to achieve your full potential in NEET, MHCET, or JEE Mains? Apply for our expert counseling services today and get the personalized guidance and support you need to succeed
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              JEE MAINS
            </a>
            <a href="" className="text-sm hover:underline">
              MHCET
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              NEET
            </a>
            <a href="" className="text-sm hover:underline">
              BITSAT
            </a>
            <a href="" className="text-sm hover:underline">
              VITEEE
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Councelling</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">mydearsainathkadam@gamil.com</div>
          <div className="text-sm">+917887765249</div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/sainath-kadam-724ab3234" target="_blank " className="hover:scale-110 text-xl">
              <AiFillLinkedin/>
            </a>
            <a href="https://instagram.com/gyan_dhara_official?igshid=ZDdkNTZiNTM=" target="_blank " className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/Mr_Saayoo?t=flXwBZZuhnUsmWUpW08enQ&s=09"  target="_blank "className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="https://www.youtube.com/@gyandhara1793" target="_blank " className="hover:scale-110 text-xl">
            <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
