import BaseCard from 'components/common/BaseCard/BaseCard'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import TestListItem from 'components/TestListItem/TestListItem'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { categoryState, difficultyState, languageState, testListState } from 'store/store'
import "./TestList.css"
import LANGUAGE from 'constants/language'
import { v4 as uuidv4 } from "uuid"
import { useParams } from 'react-router'
import CATEGORY from 'constants/category'

const TestList = () => {
  const [testList, setTestList] = useRecoilState(testListState)
  const [difficulty,] = useRecoilState(difficultyState)
  const [category,] = useRecoilState(categoryState)
  const { language } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)

  const fetchTestList = async () => {
    setSelectedLanguage(language)
    const testData = selectedLanguage === LANGUAGE.KOREAN || language === LANGUAGE.KOREAN ?
      await import("data/koreanTest.json") :
      await import("data/englishTest.json")

    let testList = testData.default
    localStorage.setItem('problemCount', testList.length)
    if (category || difficulty) {
      testList = testList.filter((test) => test?.category === category || test?.difficulty === difficulty)
    }
    if (category && difficulty) {
      testList = testList.filter((test) => test?.category === category && test?.difficulty === difficulty)
    }
    setTestList(testList)
  }

  useLayoutEffect(() => {
    fetchTestList()
  }, [category, difficulty])

  return (
    <>
      <BaseSubtitle text="예문 목록" />
      <BaseCard className="test-list-wrapper block">
        <ul className="w-full">
          {testList?.map(testData => {
            const { id, text, difficulty, language, category } = testData
            return (
              <TestListItem
                id={id}
                text={text}
                difficulty={difficulty}
                category={category}
                key={uuidv4()} />
            )
          })}
        </ul>
      </BaseCard>
    </>
  )
}

export default TestList
