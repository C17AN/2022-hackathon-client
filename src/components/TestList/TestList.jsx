import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { categoryState, difficultyState, languageState, problemTypeAtom, testListState } from 'store/store'
import "./TestList.css"
import { v4 as uuidv4 } from "uuid"
import { useParams } from 'react-router'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TestTypeButton from 'components/TestTypeButton'
import CustomScriptModal from 'components/CustomScriptModal';
import { getCustomProblem, getTutorialProblem } from 'apis/Problem/getProblem';

const PRE_DEFINED = "PRE"
const USER_MADE = "CUSTOM"

const TestList = () => {
  const [testList, setTestList] = useRecoilState(testListState)
  const [difficulty,] = useRecoilState(difficultyState)
  const [, setSelectedLanguage] = useRecoilState(languageState)
  const [problemType, setProblemType] = useRecoilState(problemTypeAtom)
  const [open, setOpen] = useState(false);
  const { language } = useParams()

  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const getTutorialProblemList = async (language) => {
    const data = await getTutorialProblem(language)
    return data
  }

  const getCustomProblemList = async (language) => {
    const data = await getCustomProblem(language)
    return data
  }

  const fetchTestList = async () => {
    const testData = problemType === PRE_DEFINED || problemType === USER_MADE ?
      await getTutorialProblemList(language) :
      await getCustomProblemList(language)
    let testList = testData
    localStorage.setItem('problemCount', testList?.length)
    if (difficulty) {
      testList = testList.filter((test) => test?.difficulty === difficulty)
    }
    setTestList(testList)
  }

  useLayoutEffect(() => {
    fetchTestList()
    setSelectedLanguage(language)
  }, [problemType, difficulty, language])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <div className="flex space-x-4">
        <TestTypeButton text="기본 예문" onClick={() => setProblemType(PRE_DEFINED)} isSelected={problemType === PRE_DEFINED} />
        <TestTypeButton text="사용자 제작 예문" onClick={() => setProblemType(USER_MADE)} isSelected={problemType === USER_MADE} />
      </div>
      <BaseCard className="test-list-wrapper block">
        <ul className="w-full">
          {testList?.map((testData, index) => {
            const { problemId, content, tier } = testData
            return (
              <TestListItem
                index={index + 1}
                id={problemId}
                text={content}
                difficulty={tier}
                key={uuidv4()}
              />
            )
          })}
        </ul>
      </BaseCard>
      <Fab sx={{ bottom: 92, right: 32, position: 'fixed' }} size="small" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <CustomScriptModal handleClose={handleClose} />
      </Modal>
    </>
  )
}

export default TestList
