import React from 'react'

const ScenarioTag = ({ text }) => {
  return (
    <div className="flex text-2xl font-semibold items-center justify-center rounded-md px-4 py-2 shadow-sm">
      {text}
    </div>
  )
}

export default ScenarioTag
