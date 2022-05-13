import React from 'react'
import ScenarioTag from './ScenarioTag'

const Scenario = ({ text, title, id, difficulty, language }) => {
  return (
    <>
      <section className="flex justify-start w-full items-center space-x-3 mb-2">
      </section>
      <div className="w-full px-4 py-2 mb-4 border-l-8 bg-gray-50 shadow-md rounded-md border-indigo-800">
        <h2 className="text-gray-400 font-semibole text-sm mb-2 w-full text-left">[예문]</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Scenario
