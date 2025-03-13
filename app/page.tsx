"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react';
import { experiences } from './text/xp'
import { summary } from './text/summary'

const skills = Array.from(
  new Set(experiences.flatMap((exp) => exp.skills))
)
export default function Page() {
  const [openIndex, setOpenIndex] = useState(0)
  const [language, setLanguage] = useState('en')

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))
  }

  return (
    <section>
      <nav className="flex justify-end py-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-white py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200"
        >
          {language === 'en' ? 'PT' : 'EN'}
          <Globe size={16} />
        </button>
      </nav>

      <div className="flex items-center justify-between mb-4">
        <Image
          src="/images/photo.jpeg"
          alt="Matheus Abreu"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <div className="text-right">
          <h1 className="text-2xl font-semibold tracking-tighter">Matheus Abreu</h1>
          <h2 className="text-lg text-gray-600">Senior Software Engineer</h2>
        </div>
      </div>

      <p className="mb-4">
        {`${summary[language]}`}
      </p>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Principal Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="cursor-pointer" onClick={() => toggleAccordion(idx)}>
              <h4 className="font-semibold">{exp.title}</h4>
              <p className="text-sm text-gray-500">{exp.company} • {exp.date}</p>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-2">{exp.description[language]}</p>
                  <p className="mt-2 text-sm text-gray-400">
                    {exp.skills.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <div className="space-y-2">
          <p className="font-semibold">{language === 'en' ? "System Analysis and Design" : 'Análise e Desenvolvimento de Sistemas'}</p>
          <p className="text-sm text-gray-500">Uniritter • 2018 – 2024</p>
        </div>
      </div>    

    </section>
  )
}