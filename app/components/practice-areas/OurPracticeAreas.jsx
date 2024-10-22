import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // React Icons arrow

const practiceAreas = [
  {
    title: "Adr & Advocacy",
    description:
      "We provide comprehensive corporate law services, ensuring your business operates within legal boundaries while maximizing growth opportunities.",
    image: "/assets/img/adr.jpg",
  },
  {
    title: "Transportation Law",
    description:
      "Our real estate experts handle all matters related to property transactions, disputes, and regulatory compliance with unmatched precision.",
    image: "/assets/img/road.jpg",
  },
  {
    title: "Banking and Finance",
    description:
      "Navigating employer-employee relations can be complex. Our practice in employment law provides guidance in maintaining compliance and resolving disputes.",
    image: "/assets/img/banking.jpg",
  },
  {
    title: "Capital Market",
    description:
      "Protecting your intellectual property is crucial in today’s market. Our lawyers help safeguard your creations, innovations, and trademarks.",
    image: "/assets/img/capital.jpg",
  },
  {
    title: "Communications Law",
    description:
      "When conflicts arise, our experienced litigators are ready to represent your interests and seek favorable outcomes.",
    image: "/assets/img/comms.jpg",
  },
  {
    title: "Energy and Environmental Law",
    description:
      "Our tax law experts help individuals and businesses navigate the complexities of tax regulations while minimizing liabilities.",
    image: "/assets/img/energy.jpg",
  },
];

export default function OurPracticeAreas() {
  const [hoveredArea, setHoveredArea] = useState(null);

  // Animation variants for on-scroll appearance
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative px-4 md:px-10 md:py-32 mx-auto max-w-7xl">
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
      >
        <motion.h2 className="text-3xl md:text-5xl font-black text-[#01553d] relative" variants={itemVariants}>
          Our Practice Areas
          <span className="absolute -left-5 -top-3 inline-block h-10 w-10 bg-orange-500 rounded-full opacity-70"></span>
        </motion.h2>
        <motion.div className="mt-4 md:mt-6" variants={itemVariants}>
          <a href="/all-practice-areas" className="flex items-center gap-2 text-xl font-medium text-[#01553d] underline">
            VIEW ALL PRACTICE AREAS <FiArrowRight />
          </a>
        </motion.div>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="mb-12 text-base md:text-lg text-gray-500"
      >
        Explore the core areas of our expertise where we offer top-tier legal services.
      </motion.p>

      {/* Practice Areas */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {practiceAreas.map((area, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row justify-between items-start md:items-center border-b py-6 cursor-pointer group"
            onMouseEnter={() => setHoveredArea(index)}
            onMouseLeave={() => setHoveredArea(null)}
            variants={itemVariants}
          >
            {/* Title */}
            <div className="md:w-3/4 w-full mb-2 md:mb-0">
              <h3 className="text-3xl md:text-6xl font-semibold text-[#01553d] group-hover:text-[#01553d] transition-colors duration-300">
                {area.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:w-3/4 w-full flex justify-between items-center md:items-start">
              <p className="text-gray-600 text-xl">{area.description}</p>

              {/* Hovered Image confined to section (larger screens only) */}
              {hoveredArea === index && (
                <motion.img
                  src={area.image}
                  alt={area.title}
                  className="hidden md:block w-32 h-32 object-cover rounded-lg shadow-lg pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
