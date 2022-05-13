import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const CustomScriptModal = () => {
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
    p: 4,
    m: 1,
  };

  const [level, setLevel] = useState('');
  const [Lang, setLang] = useState('');
  const handlelevelchange = (event) => {
    setLevel(event.target.value);
  }
  const handlelangchange = (event) => {
    setLang(event.target.value)
  }

  return (
    <Box sx={style}>
      <h2 >직접 말할 내용을 구현해 보세요.</h2>
      <FormControl sx={{ m: 1, width: 250, margintop: 20, spacing: 20, flexDirection: 'row', }} size="small">
        <FormControl sx={{ marginright: 30 }}>
          <InputLabel id="level">난이도</InputLabel>
          <Select
            labelId="level"
            id="demo-select-small"
            label="level"
            value={level}
            onChange={handlelevelchange}
            sx={{ margintop: 20, marginright: 30, width: 110 }}
          >
            <MenuItem>Hard</MenuItem>
            <MenuItem>Medium</MenuItem>
            <MenuItem>Easy</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginleft: 30 }}>
          <InputLabel id="language">언어</InputLabel>
          <Select
            labelId="language"
            id="demo-select-small"
            label="Lang"
            value={Lang}
            onChange={handlelangchange}
            sx={{ margintop: 20, width: 110 }}
          >
            <MenuItem>Korean</MenuItem>
            <MenuItem>English</MenuItem>
          </Select>
        </FormControl>
      </FormControl>
      <Divider />
      <FormControl sx={{ m: 1, margintop: 20 }} size="small">
        <TextField multiline rows={4} style={{ width: 250 }} id="outlined-basic" placeholder="문장을 입력하세요" size="big" />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, width: 250, margintop: 20 }}>
        <Button size="small" variant="contained">전송</Button>
        <Button size="small" variant="outline">나가기</Button>
      </FormControl>
    </Box>
  )
}

export default CustomScriptModal;