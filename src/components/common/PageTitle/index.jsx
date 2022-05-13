import React from 'react'
import { useRecoilState } from "recoil";
import { usernameAtom } from "store/store";

const PageTitle = ({ text }) => {
  const username = useRecoilState(usernameAtom);
  return (
    <>
      <h1 className="text-xl font-semibold">{text}</h1>
      <hr className="border mt-2 mb-4" />
      <h2>안녕하세요, {username} 님!</h2>
    </>
  )
}

export default PageTitle