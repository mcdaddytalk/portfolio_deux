"use client"

import React from 'react'
// import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import { Skill } from '@/lib/types'
import { urlFor } from '@/sanity/lib/image'

type SkillIconProps = {
    skill: Skill
    directionLeft?: boolean
}

// type Skill = typeof skillsData[number];
export default function SkillIcon({ skill, directionLeft }: Readonly<SkillIconProps>) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0  
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            src={urlFor(skill?.image).url()}
            alt={skill?.title}
            className="rounded-full border border-slate-500 object-cover w-24 h-24  md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}
