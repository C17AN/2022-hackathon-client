import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import PageTitle from 'components/common/PageTitle'
import RankingList from 'components/RankingList'
import React from 'react'

const Ranking = () => {
  return (
    <>
      <BaseSubtitle text={"발음평가 랭킹"} />
      <RankingList />
    </>
  )
}

export default Ranking