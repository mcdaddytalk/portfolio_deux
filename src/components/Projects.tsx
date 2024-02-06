"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
// import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { Project } from '@/lib/types'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Readonly<Props>) {
    return (
        <section 
            id="projects" 
            className="snap-center"
        >
            <motion.div
                className="relative h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
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
                <SectionHeader title="Projects" />

                <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80">
                    {
                        projects?.map((project, i) => {
                            return <ProjectCard key={project.index} project={project} projectCount={projects.length} index={i}/>
                        })
                    }
                </div>
                <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
            </motion.div>
        </section>
      )
}
