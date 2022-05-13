import { motion } from 'framer-motion'
import { subtitleVariants } from 'styles/framerAnimation'

const BaseSubtitle = ({ text, className: cn }) => {
  return (
    <motion.h2
      initial="initial"
      animate="in"
      exit="out"
      variants={subtitleVariants}
      className={[`mb-4 font-semibold text-xl`, cn].join(" ")}>
      {text}
    </motion.h2>
  )
}

export default BaseSubtitle
