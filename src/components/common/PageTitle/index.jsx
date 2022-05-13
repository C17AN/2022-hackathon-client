import React from 'react'

const PageTitle = ({ text }) => {
  return (
    <>
      <h1 className="text-xl font-semibold">{text}</h1>
      <hr className="border mt-2 mb-4" />
    </>
  )
}

export default PageTitle