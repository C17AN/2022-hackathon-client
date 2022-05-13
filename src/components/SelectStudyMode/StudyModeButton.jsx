import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { languageState, studyModeState } from 'store/store'
import styles from "./SelectStudyMode.module.css"

const StudyModeButton = ({ text, studyType, icon, onHover, onBlur }) => {
  const [studyMode, setStudyMode] = useRecoilState(studyModeState)
  const [language] = useRecoilState(languageState)

  return (
    <Link to={`/${studyType}/${language}`}>
      <motion.button
        whileHover={{
          scale: 1.02
        }}
        className={[styles['study-mode--button'], "flex flex-col justify-between hover:border-blue-500 hover:bg-blue-100 transition-all h-full bg-blue-50"].join(" ")}
        onClick={() => setStudyMode(studyType)}
        onMouseEnter={onHover}
        onMouseLeave={onBlur}>
        <img src={icon} alt="학습 타입" className="object-fit" />
        <p className="mt-2 text-lg text-gray-600 font-semibold flex w-full justify-center">{text}</p>
      </motion.button >
    </Link>
  )
}

export default StudyModeButton
