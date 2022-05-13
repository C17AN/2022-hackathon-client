
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'


const ResultDescription = () => {
  const [testResult,] = useRecoilState(testResultState)
  const [resultDescription, setResultDescription] = useState(null)

  useEffect(() => {
    import("data/resultText.json").then(({ resultText }) => {
      setResultDescription(resultText[testResult.resultCode])
    })
  }, [testResult])

  return (
    <p className="result-description-summary text-gray-600 ml-4 mr-6 text-sm">
      {resultDescription}
    </p>
  )
}

export default ResultDescription
