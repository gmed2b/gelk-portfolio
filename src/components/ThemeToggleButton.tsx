import React from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = React.useState(false)
  const [theme, setTheme] = React.useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-sky-200 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = theme === t
        return (
          <button
            key={t}
            className={`cursor-pointer rounded-3xl p-2 ${
              checked
                ? 'bg-sky-50 text-zinc-800'
                : 'text-sky-800 dark:text-zinc-200'
            }`}
            onClick={toggleTheme}
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
