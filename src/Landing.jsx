import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./land_styles.css";
import Homepage from "./homepage.jsx";
import { Link } from 'react-router-dom';
export default function Landing() {
  const [replay, setReplay] = useState(true);
  const placeholderText = [
    { type: "heading1", text: "Hello !" }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };



  return (
    <div className="lnding">
    <motion.div
      className="App"
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <Link to="/Homepage"><div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div></Link>


    </motion.div>
    </div>
  );
}
