"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Mrs. Nidhi is an excellent abacus teacher! My child's confidence in math has grown tremendously, and she now loves solving problems. The classes are engaging and well-structured, and I highly recommend them to any parent!",
    author: "Hanna M, 36"
  },
  {
    text: "Speedy Scholars has been a game-changer for my son. Mrs. Nidhi is patient and makes learning the abacus fun and interactive. His mental calculation skills have improved so much in just a few months!",
    author: "Jordan H, 34"
  },
  {
    text: "The abacus classes by Mrs. Nidhi are fantastic. My daughter not only improved her math skills but also her concentration and problem-solving abilities. We are so thankful for the wonderful guidance and support.",
    author: "Tara S, 28"
  },
  {
    text: "Mrs. Nidhi brings out the best in every student. My son's mental arithmetic skills have developed rapidly, and he looks forward to the abacus class every week. We are grateful for the positive impact these classes have had on him.",
    author: "Joel G, 41"
  }
]

export function TestimonialSectionComponent() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="border-2 border-black p-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              WHAT PEOPLE<br />ARE SAYING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 border border-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-sm mb-4 text-black">{testimonial.text}</p>
                  <p className="text-right font-semibold text-black">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative h-[600px] overflow-hidden border-2 border-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Children dressed as astronauts"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}