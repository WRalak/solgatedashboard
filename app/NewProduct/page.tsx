import React from 'react'
import HeroTwo from '../components/HeroTwo'
import CheckBoxes from '../components/CheckBoxes'

const page = () => {
  return (
    <div className="flex gap-6 lg:w-full">
    <div className="flex-1">
      <HeroTwo />
    </div>
    <div className="flex-1">
      <CheckBoxes />
    </div>
  </div>
  
  )
}

export default page