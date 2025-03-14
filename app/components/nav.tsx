"use client"

import Link from 'next/link'
import { Globe, Home, Printer } from 'lucide-react'
import { useLanguage } from './languageContext' 

const navItems = {
  '/': { icon: <Home size={20} /> }, 
}

export function Navbar() {
  const { language, toggleLanguage } = useLanguage()

  const handlePrint = () => {
    window.print() 
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 flex justify-between items-center">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { icon }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {icon} {}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-white py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            {language === 'en' ? 'PT' : 'EN'}
            <Globe size={16} />
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1 text-white py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            <Printer size={16} />
          </button>
        </div>
      </div>
    </aside>
  )
}