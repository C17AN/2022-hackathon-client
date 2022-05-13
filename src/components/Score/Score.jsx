import React, { useEffect, useState } from 'react'
import { setScoreTextHelper } from 'utils/setScoreTextHelper'
import "./Score.css"

const Score = ({ score }) => {
  const [scoreText, setScoreText] = useState(null)
  const [scoreClassName, setScoreClassName] = useState(null)

  useEffect(() => {
    const { text, resultCode } = setScoreTextHelper(score)
    setScoreText(text)
    setScoreClassName(resultCode)
  }, [score])

  return (
    <div className="flex flex-col justify-center">
      <div className={`font-light text-3xl mx-4 my-1 ${scoreClassName}`}>
        {score}
      </div>
      <p className="text-center">{scoreText}</p>
    </div>
  )
}

export default Score
