import React from 'react'

const ScenarioTag = ({ text, maxScoreUser }) => {
  return (
    <div className="w-full">
      <h2 className="flex text-2xl w-full text-left font-semibold items-center justify-start rounded-md px-2 py-2 shadow-sm">
        {text}
      </h2>
      <p>{maxScoreUser}</p>
    </div>
  )
}

export default ScenarioTag
