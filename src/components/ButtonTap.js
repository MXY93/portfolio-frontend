import React from 'react';
import { motion } from "framer-motion";
import '../styles/buttonTap.scss'

export default function ButtonTap({ imgSrc, alt, text, onClick }) {
  return (
    <motion.button
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      <img src={imgSrc} loading="lazy" alt={alt}/>
      <p>{text}</p>
    </motion.button>
  );
}