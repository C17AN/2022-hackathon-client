import React from 'react'
import loadingAnimation from "assets/images/loading-animated.svg"
import "./LoadingEvaluation.css"

const LoadingEvaluation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={loadingAnimation} alt="loading" className="loading-svg" />
      <div>
        <p className="font-semibold text-lg ml-2 text-gray-500">평가를 기다리고 있습니다.</p>
        <p className="ml-2 text-gray-400 text-xs">(녹음 완료 후, 약 1 ~ 3초의 시간이 소요됩니다.)</p>
      </div>
    </div>
  )
}

export default LoadingEvaluation