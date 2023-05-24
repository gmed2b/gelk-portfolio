import React from 'react'
import PillsFilterButton from './PillsFilterButton'

export default function PillsFilterButtons() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <PillsFilterButton title="All" />
      <PillsFilterButton title="1st year" />
      <PillsFilterButton title="2nd year" />
    </>
  )
}
