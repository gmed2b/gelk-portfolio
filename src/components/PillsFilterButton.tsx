import React from 'react'

interface Props {
  title: string
}

export default function PillsFilterButton(props: Props) {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <button
      className={`${
        isActive ? 'bg-sky-700' : 'bg-transparent border-sky-700 border-2'
      } text-white p-1 px-3 rounded-full text-sm`}
      onClick={() => setIsActive(!isActive)}
    >
      {props.title}
    </button>
  )
}
