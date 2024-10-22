import React from 'react';
import Image from 'next/image';

export default function OurTeam() {
  return (
    <section className="py-24 bg-[#01553d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20 gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl text-white font-bold leading-[4rem] mb-2 text-left">
              Our leading, strong & goal oriented team
            </h2>
            <p className="text-xl text-white mb-8 text-left">
              These people work on making our product best Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate?.
            </p>
            <button className="text-xl cursor-pointer py-5 px-8 w-60 border text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-white hover:text-[#01553d] lg:mx-0">
              Join our team
            </button>
          </div>
          <div className="w-full lg:w-2/2 lg:mt-0 md:mt-40 mt-16 max-w-4xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-12">
              <Image
                src="/assets/img/PP.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                width={288} // Set the width of the image
                height={240} // Set the height of the image
              />
              <Image
                src="/assets/img/Alj.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                width={288}
                height={240}
              />
              <Image
                src="/assets/img/kabi.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                width={288}
                height={240}
              />
              <Image
                src="/assets/img/MP.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                width={288}
                height={240}
              />
              <Image
                src="/assets/img/chi.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                width={288}
                height={240}
              />
              {/* <Image
                src="/assets/img/chi.jpg"
                alt="Team tailwind section"
                className="w-72 h-60 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                width={288}
                height={240}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
