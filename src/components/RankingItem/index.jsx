import styled from '@emotion/styled'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import RankingModal from 'components/RankingModal';

const RankingItem = ({ name }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container
        onClick={handleOpen}
        className="rounded-md p-4 text-sm text-gray-500">
        {name}
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

const Container = styled.p`
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
`

export default RankingItem