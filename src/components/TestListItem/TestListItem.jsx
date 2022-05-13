import { motion } from 'framer-motion'
import "./TestListItem.scss"
import { difficultyClassNameSetter } from 'utils/classNameSetter'
import { Link, useParams } from "react-router-dom"
import { parseDifficultyName } from 'utils/parseDifficultyName'
import styled from '@emotion/styled'

const TestListItem = ({ index, id, text, category, difficulty, topMemberName, madeUserName }) => {
  const { language } = useParams()

  return (
    <Link to={`/${language}/${id}`}>
      <motion.li
        transition={{
          duration: 0.2
        }}
        whileHover={{
          scale: 1.005,
        }
        }
        className="flex flex-col justify-between my-4 p-2 pl-4 border border-gray-100 hover:bg-blue-50 transition-colors shadow-sm rounded-md cursor-pointer">
        <div className="flex text-list-text-container">
          <p className="pr-1 font-semibold text-gray-600">{index}.</p>
          <p className="pl-1 test-list-text text-left font-semibold text-gray-600">{text}</p>
        </div>
        <section className="flex justify-between space-x-4">
          {/* <p className={`${categoryClassNameSetter(category)} rounded-md p-1 px-2 text-sm`}>{parseCategoryName(category)}</p> */}
          <p className={`${difficultyClassNameSetter(difficulty)} rounded-md p-1 px-2 text-xs`}>{parseDifficultyName(difficulty)}</p>
          <MaxScoreUser className={"text-xs mt-1 text-gray-500"}>문제 제작자 : <span className="bg-blue-50 rounded-md ml-1 p-1 px-2">{madeUserName}</span></MaxScoreUser>
        </section>
      </motion.li >
    </Link>
  )
}

const MaxScoreUser = styled.p`
  font-size: 0.625rem;
`

export default TestListItem
