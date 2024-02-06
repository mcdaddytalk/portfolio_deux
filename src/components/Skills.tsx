"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon'
// import { skillsData } from '@/lib/data'
import { Skill } from '@/lib/types'

type Props = {
    skills: Skill[]
}

export default function Skills({ skills }: Readonly<Props>) {
    return (
        <section 
            id="skills"
            className="snap-center"
        >
            <motion.div
                className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
            >
                <SectionHeader title="Skills" />

                <h3 className="absolute top-36 uppercase tracking-[3px] text-slate-500 text-sm">
                    Hover over a skill for current proficiency
                </h3>

                <div className="mt-40 w-full grid grid-cols-4 xl:grid-cols-8 gap-5">
                    {skills?.slice(0, skills.length / 2).map((skill) => <SkillIcon key={skill.title} skill={skill} />)}
                    {skills?.slice(skills.length / 2, skills.length).map((skill) => <SkillIcon key={skill.title} skill={skill} directionLeft={true} />)}
                </div>
            </motion.div>
        </section>
      )
}
