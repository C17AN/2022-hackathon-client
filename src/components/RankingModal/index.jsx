import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


function RankingModal() {
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



  return (
    <Box sx={style}>
      <h2>이 사람의 정보</h2>
    </Box>
  )
}

export default RankingModal