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
          TALKY<span className="text-blue-500">TALKY</span>
        </h1>
        <p className="text-gray-500 text-xl">24시간의 기적, 24H</p>
        <Link to="menu">
          <motion.p
            animate={{ x: [-10, 0, -10] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8 px-6 py-2 rounded-md bg-blue-500 text-white shadow-md cursor-pointer">
            터치해서 시작하세요
          </motion.p>
        </Link>
      </section>
    </BaseCard>
  )
}

export default Hero
