"use client"

// import { projectsData } from '@/lib/data';
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import TechIcon from './TechIcon';

type ProjectCardProps = {
    index: number;
    project: Project;
    projectCount: number;
}

// type Project = typeof projectsData[number];

export default function ProjectCard({ index, project, projectCount }: Readonly<ProjectCardProps>) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
            initial={{
                y: -300,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-72 h-72"
            src={urlFor(project?.image).url()}
            alt={project?.title}
        />
        <div className='flex space-x-2 my-2'>
            {
                project.tech?.map((tech) => (
                    <TechIcon key={`${project.index}-${tech.slug}`} tech={tech} />
                ))
            }
        </div>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                    Case study {index + 1} of {projectCount}:
                </span>{" "}
                {project?.title}
            </h4>
            <p className="text-lg text-center md:text-left">
                {project?.description}
            </p>
        </div>
    </div>
  )
}
