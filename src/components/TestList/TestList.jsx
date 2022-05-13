import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { categoryState, difficultyState, languageState, testListState } from 'store/store'
import "./TestList.css"
import LANGUAGE from 'constants/language'
import { v4 as uuidv4 } from "uuid"
import { useParams } from 'react-router'
import CATEGORY from 'constants/category'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TestTypeButton from 'components/TestTypeButton'
import CustomScriptModal from 'components/CustomScriptModal';

const PRE_DEFINED = "PRE"
const USER_MADE = "CUSTOM"



const TestList = () => {

  const [testList, setTestList] = useRecoilState(testListState)
  const [difficulty,] = useRecoilState(difficultyState)
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [open, setOpen] = useState(false);
  const [testMadeType, setTestMadeType] = useState(PRE_DEFINED)
  const { language } = useParams()

  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const fetchTestList = async () => {
    const testData = selectedLanguage === LANGUAGE.KOREAN || language === LANGUAGE.KOREAN ?
      await import("data/koreanTest.json") :
      await import("data/englishTest.json")

    let testList = testData.default
    localStorage.setItem('problemCount', testList.length)
    if (difficulty) {
      testList = testList.filter((test) => test?.difficulty === difficulty)
    }
    setTestList(testList)
  }

  useLayoutEffect(() => {
    setSelectedLanguage(selectedLanguage)
    fetchTestList()
  }, [difficulty, language,])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <div className="flex space-x-4">
        <TestTypeButton text="기본 예문" onClick={() => setTestMadeType(PRE_DEFINED)} isSelected={testMadeType === PRE_DEFINED} />
        <TestTypeButton text="사용자 제작 예문" onClick={() => setTestMadeType(USER_MADE)} isSelected={testMadeType === USER_MADE} />
      </div>
      <BaseCard className="test-list-wrapper block">
        <ul className="w-full">
          {testList?.map(testData => {
            const { id, text, difficulty, language } = testData
            return (
              <TestListItem
                id={id}
                text={text}
                difficulty={difficulty}
                key={uuidv4()} />
            )
          })}
        </ul>
      </BaseCard>
      <Fab sx={{ bottom: 100, right: 16, position: 'fixed' }} size="small" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomScriptModal />
      </Modal>
    </>
  )
}

export default TestList
