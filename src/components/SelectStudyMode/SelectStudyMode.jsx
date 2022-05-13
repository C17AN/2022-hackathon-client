import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import StudyModeButton from './StudyModeButton'
import React, { useState } from 'react'
import StudyImage from "assets/images/study-image.svg"
import TestImage from "assets/images/test-image.svg"
import WIPImage from "assets/images/wip-image.svg"
import STUDYMODE from "constants/studyMode"
import StudyModeDescription from './StudyModeDescription'
import { useRecoilState } from 'recoil'
import { languageState } from 'store/store'

const SelectStudyMode = () => {
  const [tempStudyStatus, setTempStudyStatus] = useState(null)
  const [selectedLanguage] = useRecoilState(languageState)

  const handleHoverTempStudyStatus = (studyStatus) => {
    setTempStudyStatus(studyStatus)
  }

  const handleBlurTempStudyStatus = (studyStatus) => {
    setTempStudyStatus(null)
  }


  return (
    selectedLanguage ?
      <>
        <BaseSubtitle text="학습유형 선택" />
        <BaseCard className="mb-4 flex flex-col">
          <div className="m-4">
            <h1 className="text-center mb-4 text-md font-semibold text-gray-600">학습할 타입을 선택하세요</h1>
            <section className="flex flex-col justify-center space-x-6">
              <StudyModeButton text="학습 모드" icon={""} studyType={STUDYMODE.PRACTICE} onHover={() => handleHoverTempStudyStatus(STUDYMODE.PRACTICE)} onBlur={handleBlurTempStudyStatus} />
            </section>
          </div>
        </BaseCard>
        <StudyModeDescription tempStudyStatus={tempStudyStatus} />
      </> :
      <>
        <BaseSubtitle text="서비스 준비중인 언어입니다." />
        <BaseCard className="mb-4 flex flex-col h-full">
          <div className="m-4 flex flex-col items-center">
            <img src={WIPImage} alt="준비중입니다." width="400" className="mb-8" />
            <div className="text-gray-600 text-xl">이런, 아직 준비중인 언어입니다!</div>
          </div>
        </BaseCard>
      </>
  )
}

export default SelectStudyMode
