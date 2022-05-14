import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import PageTitle from 'components/common/PageTitle'
import RankingList from 'components/RankingList'
import React, { useEffect } from 'react'
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';


const Ranking = () => {

  return (
    <>
      <div className="flex items-center mb-2">
        <EmojiEventsSharpIcon color="primary" className="mb-2" />
        <BaseSubtitle text={"발음평가 랭킹"} className="ml-2" hasBottomLine={false} />
      </div>
      <RankingList />
    </>
  )
}

export default Ranking