"use client"

import React from 'react'
import Image from 'next/image'
import { Tech } from '@/lib/types';

type TechIconProps = {
    tech: Tech;
}

export default function TechIcon({ tech }: Readonly<TechIconProps>) {
    return (
        <Image src={`/tech/${tech.slug}.svg`} alt={tech.title} width={10} height={10} className='w-10 h-10 rounded-full' />
    )
}
