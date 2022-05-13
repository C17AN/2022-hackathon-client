import React from "react";
import { motion } from "framer-motion";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ onClick, text, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`${className} px-3 py-1 bg-blue-200 rounded-md text-sm`}
    >
      {text}
    </motion.button>
  );
};

export default BaseButton;
