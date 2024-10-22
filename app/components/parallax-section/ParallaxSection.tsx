import React from 'react'

export default function ParallaxSection() {
    return (
        <div
            className="bg-center bg-cover bg-no-repeat bg-body-img bg-fixed container flex items-center justify-center h-screen w-[100%] mx-auto">
            <blockquote
                className="bg-white transition duration-300 shadow-xl rounded-2xl mx-4 p-4 text-center text-gray-800 md:p-24">
                <p className="font-bold italic text-5xl">
                &ldquo;We pride ourselves as a <span className='text-[#01553d]'>LEADING LAW FIRM IN NIGERIA.</span>&rdquo;
                </p>
            </blockquote>
        </div>
    )
}
