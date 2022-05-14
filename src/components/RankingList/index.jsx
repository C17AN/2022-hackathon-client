import RankingItem from 'components/RankingItem'
import React, { useEffect, useState } from 'react'
import { getUserRank } from 'apis/User/getUserRank';

const RankingList = () => {
  const [rankingList, setRankingList] = useState([])

  const rankingData = async () => {
    const data = await getUserRank()
    setRankingList(data)
  }

  useEffect(() => {
    rankingData()
  }, [])


  return (
    <div>
      <section className="flex justify-between text-xs px-4 mb-2 text-gray-500">
        <p>이름</p>
        <p>최고 점수</p>
      </section>
      <hr className="py-1 border-gray-200" />
      <ul>
        {Array.isArray(rankingList) && rankingList?.map(({ memberName, memberTotalScore }, index) => <RankingItem index={index + 1} name={memberName} score={memberTotalScore} />)}
      </ul >
    </div>
  )
}

export default RankingList