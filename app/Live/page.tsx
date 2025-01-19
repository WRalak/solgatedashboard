import React from 'react'
import Live from '../components/Live'
import CheckBoxes from '../components/CheckBoxes'

const Page = () => {
  return (
    <div className="flex  lg:space-x-[10px]">
      <Live />
      <CheckBoxes />
    </div>
  )
}

export default Page


