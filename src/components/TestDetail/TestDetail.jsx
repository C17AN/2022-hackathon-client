import React, { useEffect, useLayoutEffect, useState } from 'react'
import { requestTTSApi } from 'apis/TTS/postTTS'
import BaseCard from 'components/common/BaseCard/BaseCard'
import Scenario from 'components/Scenario/Scenario'
import ScenarioTag from 'components/Scenario/ScenarioTag'
import TestResult from 'components/TestResult/TestResult'
import VoicePlayer from 'components/VoicePlayer/VoicePlayer'
import VoiceRecorder from 'components/VoiceRecorder/VoiceRecorder'
import setAudioConfig from 'utils/setAudioConfig'
import LANGUAGE from 'constants/language'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { languageState, problemTypeAtom } from 'store/store'
import { parseLanguageName } from 'utils/parseLanguageName'
import { parseDifficultyName } from 'utils/parseDifficultyName'
import PageMoveButton from './PageMoveButton'
import styled from '@emotion/styled'
import { getCustomProblem, getTutorialProblem } from 'apis/Problem/getProblem'

const PRE_DEFINED = "PRE"
const USER_MADE = "CUSTOM"

const TestDetail = () => {
  let { language, id } = useParams()
  const [testScript, setTestScript] = useState(null)
  const [testDifficulty, setTestDifficulty] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [problemType] = useRecoilState(problemTypeAtom)
  const [TTSaudio, setTTSAudio] = useState(null)
  const [TTSConfig, setTTSConfig] = useState(setAudioConfig(language))
  const [isWaiting, setIsWaiting] = useState(true)
  const problemCount = +localStorage.getItem("problemCount")

  useLayoutEffect(() => {
    // 새로고침 했을 시, 스토어가 날아가는걸 방지하기 위한 코드
    setSelectedLanguage(language)
  }, [])

  useEffect(() => {
    setTTSAudio(null)
    fetchTestDetail(id)
    setIsWaiting(true)
  }, [testScript, id])

  const getTutorialProblemList = async (language) => {
    const data = await getTutorialProblem(language)
    return data
  }

  const getCustomProblemList = async (language) => {
    const data = await getCustomProblem(language)
    return data
  }

  const fetchTestDetail = async (_id) => {
    const testData = problemType === PRE_DEFINED || problemType === USER_MADE ?
      await getTutorialProblemList(language) :
      await getCustomProblemList(language)
    const testDetail = testData.filter(({ problemId }) => problemId === +_id)[0]
    setTestScript(testDetail.content)
    setTestDifficulty(testDetail.tier)
    fetchTTSAudioData(testDetail.content)
  }

  const fetchTTSAudioData = async (text) => {
    const res = await requestTTSApi({ ...TTSConfig, text });
    const { audioContent } = res.data
    setTTSAudio(audioContent)
  }

  return (
    <>
      <div className="flex justify-between mb-4 items-center">
        <ScenarioTag text={`${parseLanguageName(language)} / ${id}번 / ${parseDifficultyName(testDifficulty)}`} className="mr-3" />
      </div>
      <BaseCard className="test-detail-container h-full flex flex-col justify-start">
        <Scenario text={testScript} difficulty={testDifficulty} language={language} id={id} />
        <div className="flex flex-col justify-evenly w-full">
          {TTSaudio && <VoicePlayer audioFile={TTSaudio} />}
          {testScript && <VoiceRecorder
            id={id}
            text={testScript}
            setTestScript={setTestScript}
            language={language}
            setIsWaiting={setIsWaiting}
          />}

        </div>
        <TestResult
          isWaiting={isWaiting}
        />
        <PageMoveButtonContainer className="flex justify-between w-full">
          {1 < id ?
            <PageMoveButton text="이전 문제" problemId={+id - 1} language={language} className="page-move--button" /> :
            <div></div>
          }
          {problemCount > id ?
            <PageMoveButton text="다음 문제" problemId={+id + 1} language={language} /> :
            <div></div>
          }
        </PageMoveButtonContainer>
      </BaseCard >
    </>
  )
}

const PageMoveButtonContainer = styled.section`
  padding-bottom: 1rem;
`

export default TestDetail