"use client"

import React from 'react'
import { motion } from 'framer-motion'
import TechIcon from './TechIcon';
// import { experienceData } from '@/lib/data';
import { WorkExperience } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';

type ExperienceCardProps = {
    experience: WorkExperience
}

// type Experience = typeof experienceData[number];

export default function ExperienceCard({ experience }: Readonly<ExperienceCardProps>) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience.image).url()}
            alt='experience'
        />
        <div className="px-0 md:px-10">
            <h4 className='text-4xl font-light'>{experience.position}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {
                    experience.tech?.map((tech) => (
                        <TechIcon key={`${experience.index}-${tech.slug}`} tech={tech} />
                    ))
                }
            </div>
            <p className='uppercase py-5 text-slate-300'>
                {experience.from} - {experience.to}
            </p>
            <p>{experience.description}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {
                    experience.summaryPoints.map((item, i) => (
                        <li key={`${experience.index}-summary-${i}`}>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}
