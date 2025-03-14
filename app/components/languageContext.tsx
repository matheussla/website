"use client"

import { createContext, useContext, useState, useEffect } from 'react'

// Define the context
const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
})

// Language Provider Component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  // Toggle language and store in localStorage
  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'en' ? 'pt' : 'en'
      localStorage.setItem('language', newLang)
      return newLang
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook to use language context
export function useLanguage() {
  return useContext(LanguageContext)
}