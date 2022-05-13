import { motion } from "framer-motion";
import React from "react";
import { useRecoilState } from "recoil";
import { categoryState, difficultyState } from "store/store";
import styles from "./SelectDifficulty.module.css";

const SelectCategoryButton = ({ text, selectedCategory, onClick }) => {
  const [category,] = useRecoilState(categoryState)

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 1.05,
      }}
      whileFocus={{
        scale: 1.05,
      }}
      className={[selectedCategory === category ?
        'bg-blue-400 text-white' :
        'bg-gray-50', 'py-2 px-4 rounded-md hover:bg-blue-200 hover:text-white transition-colors'].join(' ')}>
      {text}
    </motion.button>
  );
};

export default SelectCategoryButton;
