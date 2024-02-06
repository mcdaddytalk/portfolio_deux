import React, { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

export const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/kajecode',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ktalkington/',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/maybekbtalkin',
    },
] as const;

export const projectsData = [
    {   
        index: 'personal-portfolio',
        title: 'Personal Portfolio',
        description: 'My personal portfolio website.',
        tags: ['React', 'Next.js', 'Sanity'],
        link: 'https://portfolio.kaje.org',
        imageUrl: '/portfolio.png',
    },
    {
        index: 'personal-portfolio-deux',
        title: 'Personal Portfolio Deux',
        description: 'My personal portfolio website.',
        tags: ['React', 'Next.js', 'Sanity'],
        link: 'https://portfolio.kaje.org',
        imageUrl: '/portfolio.png',
    },
    {
        index: 'personal-portfolio-trois',
        title: 'Personal Portfolio Trois',
        description: 'My personal portfolio website.',
        tags: ['React', 'Next.js', 'Sanity'],
        link: 'https://portfolio.kaje.org',
        imageUrl: '/portfolio.png',
    },
] as const;

export const experienceData = [
    {
        index: 'google-software-engineer',
        company: 'Google',
        position: 'Software Engineer',
        description: 'I did stuff at Google',
        from: 'May 2020',
        to: 'Present',
        img: '/businessmen-use-smartphones-to-conduct-online-transactions.webp',
        tech: ['Next.js', 'React', 'Sanity'],
        summaryPoints: ['did stuff', 'did stuff', 'did stuff'],
        icon: createElement(CgWorkAlt) 
    },
    {
        index: 'amazon-software-engineer',
        company: 'Amazon',
        position: 'Software Engineer',
        description: 'Performed stuff at Amazon',
        from: 'May 2014',
        to: 'May 2020',
        img: '/businessmen-use-smartphones-to-conduct-online-transactions.webp',
        tech: ['Next.js', 'React', 'NestJS', 'Prisma', 'MongoDB'],
        summaryPoints: ['did stuff', 'did stuff', 'did stuff'],
        icon: createElement(CgWorkAlt) 
    },
    {
        index: 'microsoft-software-engineer',
        company: 'Microsoft',
        position: 'Software Engineer',
        description: 'Worked at Microsoft and produced stuff',
        from: 'May 2006',
        to: 'May 2014',
        img: '/businessmen-use-smartphones-to-conduct-online-transactions.webp',
        tech: ['Next.js', 'React', 'NestJS', 'Prisma', 'MongoDB'],
        summaryPoints: ['did stuff', 'did stuff', 'did stuff'],
        icon: createElement(CgWorkAlt) 
    },
    {
        index: 'graduated-university',
        company: 'University of Hard Knocks',
        position: 'Bachelor of Computer Science',
        description: 'Studied at University of Hard Knocks, earning a Bachelor of Computer Science',
        from: 'May 2000',
        to: 'May 2006',
        img: '/businessmen-use-smartphones-to-conduct-online-transactions.webp',
        tech: ['C++', 'Java', 'C#'],
        summaryPoints: ['studied stuff', 'studied stuff', 'studied stuff'],
        icon: createElement(LuGraduationCap) 
    },
] as const;

export const skillsData = [
    'React',
    'Next.js',
    'Sanity',
    'Tailwind',
    'Typescript',
    'Javascript',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'Prisma',
    'MongoDB',
    'Redux',
    'GraphQL',
    'Apollo',
    'Express',
    'PostgreSQL',
    'Python',
    'Django',
    'Framer Motion',
] as const;