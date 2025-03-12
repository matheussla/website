"use client"

import { useState } from 'react'
import { experiences } from './xp/experiences-us'

const skills = Array.from(
  new Set(experiences.flatMap((exp) => exp.skills))
)
export default function Page() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Matheus Abreu
      </h1>
      <h2 className="mb-8 text-lg text-gray-400">Senior Software Engineer</h2>
      <p className="mb-4">
        {`Experienced developer proficient in Node.js, MongoDB, Java, React, and AWS, adept at delivering high-performance and scalable solutions across diverse industries. Skilled in architecting and deploying RESTful and GraphQL APIs, proficiently managing databases on MongoDB, and leveraging AWS services for seamless application deployment and infrastructure management. Committed to staying abreast of the latest technologies and industry trends to drive innovation and growth. Passionate about leveraging expertise to contribute to impactful digital transformations and enhance organizational success. A dedicated crypto enthusiast, actively exploring blockchain technologies and decentralized applications (dApps) to integrate cutting-edge solutions into projects, driving forward the adoption and innovation within the cryptocurrency space.`}
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
        <h3 className="text-xl font-semibold mb-4">Experiences</h3>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="cursor-pointer" onClick={() => toggleAccordion(idx)}>
              <h4 className="font-semibold mb-1">{exp.title}</h4>
              <p className="text-sm text-gray-500">{exp.company} • {exp.date}</p>
              {openIndex === idx && (
                <div className="mt-2">
                  <p>{exp.description}</p>
                  <p className="mt-2 text-sm text-gray-400">
                    {exp.skills.join(', ')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <div className="space-y-2">
          <p className="font-semibold">System Analysis and Design</p>
          <p className="text-sm text-gray-500">Uniritter • 2018 – 2024</p>
        </div>
      </div>    

    </section>
  )
}