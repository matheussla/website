'use client'

import Link from 'next/link'
import { Globe, Home, Printer, Moon, Sun } from 'lucide-react'
import { useLanguage } from './languageContext'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navItems = {
  '/': { icon: <Home size={20} /> },
}

export function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrint = () => {
    window.dispatchEvent(new CustomEvent('expandAllAccordions'))
    setTimeout(() => window.print(), 100)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 flex justify-between items-center">
        <nav className="flex flex-row items-start px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { icon }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {icon}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-200">
            <span className="absolute left-1 text-[10px]">🇺🇸</span>
            <span className="absolute right-1 text-[10px]">🇧🇷</span>
            <button
              onClick={toggleLanguage}
              className={`${
                language === 'pt' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 flex items-center justify-center text-[10px]`}
              aria-label={language === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
            >
              {language === 'en' ? '🇺🇸' : '🇧🇷'}
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <Printer size={16} />
          </button>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}