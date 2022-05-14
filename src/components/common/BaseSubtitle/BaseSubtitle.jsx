import { motion } from 'framer-motion'
import { subtitleVariants } from 'styles/framerAnimation'

const BaseSubtitle = ({ text, className: cn, hasBottomLine = true }) => {
  return (
    <>
      <motion.h2
        initial="initial"
        animate="in"
        exit="out"
        variants={subtitleVariants}
        className={[`mb-2 font-semibold text-2xl`, cn].join(" ")}>
        {text}
      </motion.h2>
      {hasBottomLine && <hr className="mb-3 mt-1 border" />}
    </>
  )
}

export default BaseSubtitle
