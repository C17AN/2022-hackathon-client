import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import PageTitle from 'components/common/PageTitle'
import RankingList from 'components/RankingList'
import React, { useEffect } from 'react'
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import { getUserRank } from 'apis/User/getUserRank';


const Ranking = () => {

  const initData = async () => {
    const data = await getUserRank()
    console.log(data)
  }

  useEffect(() => {
    initData()
  }, [])

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