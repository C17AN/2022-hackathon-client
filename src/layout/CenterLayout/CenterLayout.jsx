import Hero from 'components/Hero/Hero'
import SelectStudyMode from 'components/SelectStudyMode/SelectStudyMode'
import TestDetail from 'components/TestDetail/TestDetail'
import TestList from 'components/TestList/TestList'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { accessTokenAtom, difficultyState, languageState, problemTypeAtom, studyModeState } from 'store/store'
import { AnimatePresence } from 'framer-motion'
import styles from "./CenterLayout.module.css"
import Menu from 'components/Menu/Menu'
import RankingPage from 'pages/RankingPage'
import MyProfilePage from 'pages/MyProfilePage'
import ListPage from 'pages/ListPage'

const CenterLayout = () => {
  const [problemType] = useRecoilState(problemTypeAtom)
  const accessToken = sessionStorage.getItem("accessToken")


  return (
    <div className={styles['layout-center']}>
      <AnimatePresence>
        {/* 메인 페이지 */}
        <Routes>
          <Route path="/" element={!accessToken ? <Hero /> : <Menu />} />
          <Route path="/menu" element={<Menu />} />
          {/* 타입 선택 페이지 */}
          <Route path="/tests/" element={<SelectStudyMode />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/setting" element={<MyProfilePage />} />
          <Route path="/test" element={<ListPage />} />
          {/* 문제 목록 페이지 */}
          <Route path="/:language" element={<TestList />} />
          {/* 문제 상세 페이지 */}
          <Route path="/:language/:id" element={<TestDetail problemType={problemType} />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default CenterLayout
