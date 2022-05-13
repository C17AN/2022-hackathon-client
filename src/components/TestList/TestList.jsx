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
import { Box, Typography, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


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
  m: 1,
};

const TestList = () => {
  const [level, setLevel] = useState('');
  const [Lang, setLang] = useState('');
  const handlelevelchange = (event1) => {
    setLevel(event1.target.value);
  }
  const handlelangchange = (event) => {
    setLang(event.target.value)
  }
  const [testList, setTestList] = useRecoilState(testListState)
  const [difficulty,] = useRecoilState(difficultyState)
  const [category,] = useRecoilState(categoryState)
  const { language } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
  const [open, setOpen] = useState(false);
  const [testMadeType, setTestMadeType] = useState(PRE_DEFINED)
  const [content, setContent] = React.useState('');
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
          <h2>직접 말할 내용을 구현해 보세요.</h2>
          <FormControl sx={{ m: 1, minWidth: 120, width: 250, margintop: 20, spacing: 20, flexDirection: 'row' }} size="small">
            <InputLabel id="demo-select-small">Level</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="level"
              value={level}
              onChange={handlelevelchange}
              sx={{ margintop: 20, marginright: 10, width: 150 }}
            >
              <MenuItem>Hard</MenuItem>
              <MenuItem>Medium</MenuItem>
              <MenuItem>Easy</MenuItem>
            </Select>
            <InputLabel id="demo-select-small" >Language</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Lang"
              value={Lang}
              onChange={handlelangchange}
              sx={{ margintop: 20, width: 150 }}
            >
              <MenuItem>Korean</MenuItem>
              <MenuItem>English</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <FormControl sx={{ m: 1, minWidth: 120, margintop: 20 }} size="small">
            <TextField multiline rows={4} style={{ width: 250 }} id="outlined-basic" placeholder="문장을 입력하세요" size="big" />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120, width: 250, margintop: 20 }}>
            <Button size="small" variant="contained">전송</Button>
            <Button size="small" variant="outline">나가기</Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
}

export default TestList
