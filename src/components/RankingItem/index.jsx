import styled from '@emotion/styled'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import RankingModal from 'components/RankingModal';

const RankingItem = ({ index, name, score }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container
        onClick={handleOpen} className="flex py-2 pr-4 rounded-md justify-between">
        <span className="flex items-center px-4 text-sm">
          {index}. {name}
        </span>
        <span className="px-1">
          {score}
        </span>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <RankingModal />
      </Modal>
    </>
  )
}

const Container = styled.li`
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
  :nth-child(1) {
    color: #ed544a;
    font-weight: bold;
  }

  :nth-child(2) {
    color: #4aed9b;
    font-weight: bold;
  }

  :nth-child(3) {
    color: #4a7ded;
    font-weight: bold;
  }
`

export default RankingItem