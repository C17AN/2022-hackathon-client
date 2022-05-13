import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ResultDescription from 'components/ResultDescription/ResultDescription'
import React, { useState } from 'react'
import Score from 'components/Score/Score'
import { useRecoilState } from 'recoil'
import { testResultState } from 'store/store'
import LoadingEvaluation from './LoadingEvaluation'


const TestResult = ({ isWaiting }) => {
  const [testResult,] = useRecoilState(testResultState)
  const { score } = testResult

  return (
    <>
      <div className="voice-player flex flex-col items-center justify-center rounded-md py-4 px-6 w-full mb-4 shadow-md border-l-8 border-blue-100">
        {isWaiting ?
          <LoadingEvaluation /> :
          <>
            <Score score={score} />
            <ResultDescription />
          </>
        }
      </div>
    </>
  )
}

export default TestResult
