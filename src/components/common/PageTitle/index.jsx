import React from 'react'
import { usernameAtom } from "store/store";
import { useRecoilState } from "recoil";

const PageTitle = ({ text }) => {
  const [username, setUsername] = useRecoilState(usernameAtom)
  return (
    <>
      <h1 className="text-xl font-semibold">{text}</h1>
      <hr className="border mt-2 mb-4" />
      <h2>안녕하세요, 님</h2>
    </>
  )
}

export default PageTitle