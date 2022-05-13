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
import { Box, Typography } from '@mui/material'

const PRE_DEFINED = "PRE"
const USER_MADE = "CUSTOM"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TestList = () => {
  const [testList, setTestList] = useRecoilState(testListState)
  const [difficulty,] = useRecoilState(difficultyState)
  const [category,] = useRecoilState(categoryState)
  const { language } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [open, setOpen] = useState(false);
  const [testMadeType, setTestMadeType] = useState(PRE_DEFINED)
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const fetchTestList = async () => {
    setSelectedLanguage(language)
    const testData = selectedLanguage === LANGUAGE.KOREAN || language === LANGUAGE.KOREAN ?
      await import("data/koreanTest.json") :
      await import("data/englishTest.json")

    let testList = testData.default
    localStorage.setItem('problemCount', testList.length)
    if (category || difficulty) {
      testList = testList.filter((test) => test?.category === category || test?.difficulty === difficulty)
    }
    if (category && difficulty) {
      testList = testList.filter((test) => test?.category === category && test?.difficulty === difficulty)
    }
    setTestList(testList)
  }

  useLayoutEffect(() => {
    fetchTestList()
  }, [category, difficulty])

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
            const { id, text, difficulty, language, category } = testData
            return (
              <TestListItem
                id={id}
                text={text}
                difficulty={difficulty}
                category={category}
                key={uuidv4()} />
            )
          })}
        </ul>
      </BaseCard>
      <Fab sx={{ bottom: 100, right: 16, position: 'absolute' }} size="small" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          모달 본문입니다.
        </Box>
      </Modal>
    </>
  )
}

export default TestList
