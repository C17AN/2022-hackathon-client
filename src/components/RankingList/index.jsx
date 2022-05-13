import RankingItem from 'components/RankingItem'
import React from 'react'

const RankingList = () => {
  const rankingData = [{ name: "chanmin" }]
  return (
    <ul>
      {
        rankingData.map(({ name }) => <RankingItem name={name} />)
      }
    </ul >
  )
}

export default RankingList