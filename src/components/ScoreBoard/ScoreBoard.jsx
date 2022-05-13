import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import ScoreRecord from 'components/ScoreRecord/ScoreRecord'
import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = () => {
  return (
    <>
      <BaseSubtitle text="실시간 채점 기록 (DEMO)" />
      <BaseCard className={[styles['scoreboard-container'], "justify-start"].join(" ")}>
        <ScoreRecord id = "1" score = "82.4"/>
        <ScoreRecord id = "2" score = "66.8"/>
        <ScoreRecord id = "3" score = "72.1"/>
      </BaseCard>
    </>
  )
}

export default ScoreBoard
