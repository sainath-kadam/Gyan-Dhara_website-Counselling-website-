import React from "react";
import { motion } from "framer-motion";
const Yt_channel = () => {
  return (
    <div className="section" id="yt_channel">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Our Channel
        </div>
        <p className="text-sm leading-7 text-gray">
        Hey there! If you enjoy our content and want to stay updated with our latest videos, please take a moment to subscribe to our YouTube channel. By subscribing, you'll be the first to know when we release new videos and you'll be supporting our channel, allowing us to create even more great content for you to enjoy. Thank you so much for your support!
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
          {/* <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          /> */}
          
          <button  className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold border-[3px] border-solid border-Teal rounded-lg " >
          <a href="https://www.youtube.com/@gyandhara1793  " target="_blank" >
            Subscribe
            </a>
          </button>
         
          
        </motion.form>
      </div>
    </div>
  );
};

export default Yt_channel;
