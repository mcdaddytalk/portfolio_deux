"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
// import { experienceData } from '@/lib/data'
import ExperienceCard from './ExperienceCard'
import { WorkExperience } from '@/lib/types'

type Props = {
    experiences: WorkExperience[]
}

export default function WorkExperience({ experiences }: Readonly<Props>) {
  return (
    <section 
        id="experience"
        className="snap-center"
    >
        <motion.div
            className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            <SectionHeader title="Experience" />
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {
                    experiences?.map((item) => {
                        return <ExperienceCard key={item.index} experience={item} />
                    })
                }
            </div>
        </motion.div>
    </section>
  )
}
