"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import CasualAvatar from '@/public/brittani-burns-5In84nlp95o-unsplash.webp'
import { motion } from 'framer-motion'
import { PageInfo } from '@/lib/types'
import { urlFor } from '@/sanity/lib/image'

type Props = {
    pageInfo: PageInfo
}
export default function About({ pageInfo }: Readonly<Props>) {
  return (
    <section 
        id="about" 
        className="snap-center"
    >
        <motion.div 
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
            <SectionHeader title="About" />
            <motion.div 
                className="relative -mb-20 flex-shrink-0" 
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{
                    once: true
                }}
            >
                <Image 
                    src={urlFor(pageInfo?.profilePic).url()}
                    width={200} height={200} 
                    alt='Portrait Photo by Brittani Burns'
                    className="h-56 w-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-95 xl:w-[500px] xl:h-[600px]"
                />
                {/*className="rounded-full h-32 w-32 mx-auto object-cover mt-10 md:mt-0"*/}
            </motion.div>
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">Who is this guy?</h4>
                <p className="text-lg text-slate-400">
                    I am a full-stack developer who specializes in React. I am currently working at{' '}
                    <a
                        className="underline decoration-[#f7ab0a]/50"
                        href="https://www.1stdibs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        1stdibs
                    </a>
                    , where I am currently working on their new product. I am also a student at{' '}
                    <a
                        className="underline decoration-[#f7ab0a]/50"
                        href="https://www.learncodinganywhere.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Tech Academy
                    </a>
                    , where I am learning to code for fun!
                </p>
            </div>
        </motion.div>


    </section>
  )
}
