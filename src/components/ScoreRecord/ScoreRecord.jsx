import React from 'react'

const ScoreRecord = ({ id, score}) => {
  return (
    <li className="list-none m-2 border border-gray-50 rounded-md shadow px-4 py-3 w-11/12">
      <section className="flex justify-between text-sm">
        <div className="bg-blue-200 rounded-md w-10 h-10 flex items-center justify-center text-white">영어</div>
        <div>
          <div>아이디 : <span className="text-gray-500">ETRI-{id}</span></div>
          <p>최고 점수 : {score}점</p>
        </div>
      </section>
    </li>
  )
}

export default ScoreRecord
