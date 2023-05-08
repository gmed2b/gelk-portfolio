import React from 'react'

interface Props {
  title: string
}

export default function PillsFilterButton(props: Props) {
  const [isActive, setIsActive] = React.useState(false)

  const handleClick = () => {
    console.log('clicked')
  }

  return <button onClick={handleClick}>{props.title}</button>
}
