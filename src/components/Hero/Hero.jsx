import React from 'react'
import waveBackground from 'assets/images/wavesOpacity.svg'
import TalkImage from "assets/images/talk-image.svg"
import "./Hero.css"
import { motion } from 'framer-motion'
import BaseCard from 'components/common/BaseCard/BaseCard'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <BaseCard className="h-full">
      <img src={TalkImage} className="hero-image" width="240" alt="hero" />
      <section className="hero-title text-center">
        <h1 className="text-3xl mt-4 font-montserrat font-semibold mb-3">
          <span className="text-blue-500">24</span>시간이 모자라
        </h1>
        <p className="text-gray-500 text-xl">24시간의 기적, 24H</p>
        <Link to="menu">
          <motion.p
            className="mt-8 py-2 rounded-md bg-blue-100 text-gray-500 shadow-md cursor-pointer">
            로그인
          </motion.p>
          <motion.p
            className="mt-8 py-2 rounded-md bg-blue-500 text-white shadow-md cursor-pointer">
            새로 시작하기
          </motion.p>
        </Link>
      </section>
    </BaseCard>
  )
}

export default Hero
