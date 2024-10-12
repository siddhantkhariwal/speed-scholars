"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function UpcomingEventsComponent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#8D8D6E]">
      <motion.div 
        className="max-w-7xl mx-auto border-2 border-white p-8 md:p-12 lg:p-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Upcoming Events</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              EXPLORE OUR UPCOMING WORKSHOPS AND SPECIAL EVENTS.
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/events" className="inline-flex items-center text-white hover:underline">
                Explore
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[300px] md:h-[400px] rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Person working at a creative desk"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}