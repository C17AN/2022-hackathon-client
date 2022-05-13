import React from 'react'

const ScenarioTag = ({ text }) => {
  return (
    <div className="flex items-center justify-center rounded-md px-4 py-2 border border-gray-300 shadow-sm text-sm">
      {text}
    </div>
  )
}

export default ScenarioTag
