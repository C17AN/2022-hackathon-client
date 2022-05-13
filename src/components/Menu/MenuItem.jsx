import React from "react";
import { useRecoilState } from "recoil";
import { languageState } from "store/store";
import LANGUAGE from "constants/language"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MenuItem = ({ title, language, onClick, isDisabled }) => {
  const [selectedLanguage, _] = useRecoilState(languageState)
  return (
    <Link to={!isDisabled && `/${language}`} className="w-4/5">
      <motion.li
        whileHover={{
          scale: 1.07
        }}
        className={` px-6 py-2 m-2 cursor-pointer flex justify-center rounded-md
      ${isDisabled && "text-gray-400"} ${selectedLanguage === LANGUAGE[language] ?
            "bg-blue-300 text-white hover:bg-blue-300 hover:text-gray-600" :
            null
          }
        transition-all hover:bg-blue-50`}
        onClick={onClick}
      >
        <span>{title}</span>
      </motion.li>
    </Link>
  );
};

export default MenuItem;
