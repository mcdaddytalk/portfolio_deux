"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '@/lib/types'

type Props = { 
  socials: Social[]
}

export default function Header({ socials }: Readonly<Props>) {
  return (
    <header className="sticky top-0 z-50 flex items-start justify-between mx-auto p-5 max-w-7xl xl:items-center">
      {/* <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"> */}
      <motion.div 
        className="flex flex-row items-center"
        initial={{
          x: -500, 
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {
          socials?.map(({ title, url }) => <li key={title}><SocialIcon url={url} fgColor='grey' bgColor='transparent' /></li>)
        }
        
        </ul>
      </motion.div>
        <motion.div 
          className="flex flex-row items-center text-slate-300 cursor-pointer"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5  
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }} 
        >
          <SocialIcon
            className="cursor-pointer"
            network='email'
            fgColor='grey'
            bgColor='transparent'
            url='#contact'
          />
          <Link href="#contact" className="ml-1">
            <p className="uppercase hidden md:inline-flex text-sm text-slate-400">
              Get In Touch          
            </p>
          </Link>
        </motion.div>
    </header>
  )
}
