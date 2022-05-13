import React from 'react'

const TestListItemButton = ({ text, onClick, id }) => {
  return (
      <button onClick={onClick} className="p-1 px-3 bg-indigo-50 rounded-md text-sm">
        {text}
      </button>
  )
}

export default TestListItemButton
