
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
    <div className="result-description-summary ml-4 mr-6 text-sm">
      {resultDescription}
    </div>
  )
}

export default ResultDescription
