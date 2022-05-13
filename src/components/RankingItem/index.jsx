import styled from '@emotion/styled'
import React from 'react'

const RankingItem = ({ name }) => {
  return (
    <Container className="rounded-md p-4 text-sm text-gray-500">{name}</Container>
  )
}

const Container = styled.p`
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
`

export default RankingItem