"use client"

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import MyAvatar from '@/public/brittani-burns-5In84nlp95o-unsplash.webp'
import Link from 'next/link'
import { PageInfo } from '@/lib/types'
import { urlFor } from '@/sanity/lib/image'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Readonly<Props>) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, My Name is ${pageInfo?.name}`,
          "dude-who-loves-coffee.tsx",
          "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <section id="hero" className="snap-start">
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
            <BackgroundCircles />
            <Image src={urlFor(pageInfo?.heroImage).url()} width={200} height={200} alt='Portrait Photo by Brittani Burns' className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
            <div className='z-20'>
                <h2 className="text-sm uppercase text-slate-500 pb-2 tracking-[15px]">{pageInfo?.role}</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
