import styled from '@emotion/styled'
import React from 'react'

const TestTypeButton = ({ text, onClick, isSelected }) => {
  return (
    <Container className="flex-1" isSelected={isSelected} onClick={onClick}>{text}</Container>
  )
}

const Container = styled.button`
  border-radius: 0.5rem;
  background-color: ${({ isSelected }) => isSelected ? "#bbd5eb" : "rgba(0,0,0,0.05)"};
  color: ${({ isSelected }) => isSelected ? "white" : "#666"};
  padding: 0.25rem 0.5rem;
  transition: 0.2s ease-in-out all;
`

export default TestTypeButton