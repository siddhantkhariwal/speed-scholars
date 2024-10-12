"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LearnWithUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-8 bg-[#b6b69e]">
      <motion.div 
        className="max-w-8xl mx-auto border-2 border-white overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center text-white py-2 border-b-2 border-white"
          variants={itemVariants}
        >
          Learn with Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div className="relative border-b-1 md:border-b-0 md:border-r-2 border-white p-4" variants={itemVariants}>
            <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/abacus.jpeg"
                alt="Abacus"
                width={600}
                height={450}
                className="w-full h-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center border-t-2 border-white rounded-b-lg">
              <span className="text-2xl font-semibold">Abacus</span>
              <Button 
                asChild 
                className="bg-[#F5F5DC] text-black hover:bg-[#E6E6CA] transition-all duration-300 hover:scale-105"
              >
                <Link href="/classes/abacus">
                  Explore Classes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div className="relative p-4" variants={itemVariants}>
            <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/english.jpeg"
                alt="English"
                width={600}
                height={450}
                className="w-full h-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center border-t-2 border-white rounded-b-lg">
              <span className="text-2xl font-semibold">English</span>
              <Button 
                asChild 
                className="bg-[#F5F5DC] text-black hover:bg-[#E6E6CA] transition-all duration-300 hover:scale-105"
              >
                <Link href="/classes/english">
                  Explore Classes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}