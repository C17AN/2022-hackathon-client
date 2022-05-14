import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { usernameAtom } from 'store/store';
import { useRecoilState } from 'recoil';
import { postCustomProblem } from 'apis/Problem/postCustomProblem';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CustomScriptModal = ({ handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #cdcdcd',
    borderRadius: 4,
    boxShadow: 24,
    p: 3,
    m: 1,
  };

  const [level, setLevel] = useState('');
  const [lang, setLang] = useState('');
  const [script, setScript] = useState('');
  const [username, setUsername] = useRecoilState(usernameAtom)

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  }
  const handleLangChange = (event) => {
    setLang(event.target.value)
  }

  const handleScriptChange = (e) => {
    setScript(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    postCustomProblem({ username, content: script, language: lang, tier: level })
    handleClose()
    toast('데이터가 전송되었습니다!')
  }

  return (
    <Box sx={style}>
      <h2 className="text-xl font-semibold mb-1">스크립트 추가</h2>
      <p className="text-sm text-gray-500 mb-4">직접 말할 내용을 구현해 보세요.</p>
      <FormControl sx={{ m: 1, width: 250, margintop: 20, spacing: 20, flexDirection: 'row', }} size="small">
        <FormControl sx={{ marginRight: 4, paddingY: 0 }}>
          <InputLabel id="level">난이도</InputLabel>
          <Select
            labelId="level"
            id="demo-select-small"
            label="level"
            value={level}
            onChange={handleLevelChange}
            sx={{ margintop: 20, marginright: 30, width: 110 }}
          >
            <MenuItem value="HARD">어려움</MenuItem>
            <MenuItem value="NORMAL">보통</MenuItem>
            <MenuItem value="EASY">쉬움</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="language">언어</InputLabel>
          <Select
            labelId="language"
            id="demo-select-small"
            label="lang"
            value={lang}
            onChange={handleLangChange}
            sx={{ margintop: 20, width: 110, padding: 0 }}
          >
            <MenuItem value="KOREAN">한글</MenuItem>
            <MenuItem value="ENGLISH">영어</MenuItem>
          </Select>
        </FormControl>
      </FormControl>
      <Divider />
      <FormControl sx={{ m: 1, margintop: 20 }} size="small">
        <TextField multiline rows={4} style={{ width: 250 }} id="outlined-basic" placeholder="문장을 입력하세요" size="big" onChange={handleScriptChange} />
      </FormControl>
      <FormControl sx={{ display: "flex", gap: 2, m: 1, minWidth: 120, width: 250, margintop: 20 }}>
        <Button size="small" variant="contained" onClick={handleSubmitForm} sx={{ backgroundColor: "#abd0e0", color: "#333" }}>전송</Button>
        <Button size="small" variant="contained" onClick={handleClose} sx={{ backgroundColor: "#de9b9b", color: "#333" }}>나가기</Button>
      </FormControl>
    </Box >
  )
}

export default CustomScriptModal;