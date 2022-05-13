import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import PageTitle from 'components/common/PageTitle'
import RankingList from 'components/RankingList'
import React from 'react'
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';

const Ranking = () => {
  return (
    <>
      <div className="flex items-center">
        <EmojiEventsSharpIcon color="primary" className="mb-2" />
        <BaseSubtitle text={"발음평가 랭킹"} className="ml-2" />
      </div>
      <hr className="mb-2" />
      <RankingList />
    </>
  )
}

export default Ranking