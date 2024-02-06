"use client"

import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}
export default function Contact() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData)
        //
        // formData
        //     .post('/api/contact')
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    return (
        <section 
            id="contact"
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
                    duration: 1.2
                }}
            >
                <SectionHeader title="Contact" />
                <div className="flex flex-col space-y-10">
                    <h4 className="text-4xl font-semibold text-center mt-10">
                        I&apos;m currently looking for new opportunities.{' '}
                        <span className="underline decoration-[#F7AB0A]/50">
                            Let&apos;s Talk
                        </span>
                    </h4>
                    <div className="space-y-10">
                        <div className="flex items-center space-x-5 justify-center">
                            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center space-x-5 justify-center">
                            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">XtVXt@example.com</p>
                        </div>
                        <div className="flex items-center space-x-5 justify-center">
                            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">123 Main St, Anytown USA</p>
                        </div>
                    </div>
                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex space-y-2">
                            <input className="contactInput" type="text" placeholder="Name" {...register('name')}/>
                            <input className="contactInput" type="email" placeholder="Email" {...register('email')} />
                        </div>
                        <input className="contactInput" type="text" placeholder="Subject" {...register('subject')}/>
                        <textarea className="contactInput" placeholder="Message" {...register('message')}/>
                        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>
                </div>

                
            </motion.div>
        </section>
      )
}
