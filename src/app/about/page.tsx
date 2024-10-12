"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="bg-[#F5F5DC] min-h-screen text-black">
      <motion.header 
        className="py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center text-white text-center relative"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Empowering Minds, One Calculation at a Time</p>
        </div>
      </motion.header>

      <main className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.section className="mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-[#556B2F]">Our Story</h2>
            <p className="mb-4">
              Speedy Scholars was born out of a passion for nurturing young minds and a belief in the transformative power of mental math. Founded by Mrs. Nidhi, an accomplished educator with over a decade of experience in abacus training, our journey began with a simple yet powerful vision: to make learning math an engaging, fun, and rewarding experience for children.
            </p>
            <p>
              What started as a small, local initiative has now blossomed into a thriving community of learners, parents, and educators, all united by the goal of fostering academic excellence and cognitive development through the ancient art of abacus.
            </p>
          </motion.section>

          <motion.section className="mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-[#556B2F]">Our Mission</h2>
            <p>
              At Speedy Scholars, our mission is to empower children with the skills and confidence to excel not just in mathematics, but in all aspects of their academic and personal lives. We believe that by harnessing the power of abacus training, we can help students develop:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Lightning-fast mental calculation abilities</li>
              <li>Enhanced concentration and focus</li>
              <li>Improved memory and recall</li>
              <li>Strong problem-solving skills</li>
              <li>Boosted self-confidence and academic performance</li>
            </ul>
          </motion.section>

          <motion.section className="mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-[#556B2F]">What Sets Us Apart</h2>
            <ul className="space-y-4">
              <li>
                <strong>Experienced Instructors:</strong> Our team of dedicated teachers, led by Mrs. Nidhi, brings years of expertise in abacus training and child education.
              </li>
              <li>
                <strong>Personalized Approach:</strong> We recognize that every child is unique, and our curriculum is designed to adapt to individual learning styles and paces.
              </li>
              <li>
                <strong>Holistic Development:</strong> While our primary focus is on abacus and mental math, our program is structured to promote overall cognitive growth and academic success.
              </li>
              <li>
                <strong>Engaging Curriculum:</strong> We blend traditional abacus techniques with modern, interactive teaching methods to keep our students motivated and excited about learning.
              </li>
              <li>
                <strong>Supportive Community:</strong> We foster a nurturing environment where students can learn, grow, and celebrate their achievements together.
              </li>
            </ul>
          </motion.section>

          <motion.section className="mb-16" {...fadeInUp}>
            <div className="bg-[#556B2F] text-white p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nidhi Khariwal</h2>
                <p className="mb-4">
                  This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
                </p>
                <p>
                  Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company's values and personality.
                </p>
              </div>
              <div className="relative h-64 lg:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="People in yoga pose"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-[#556B2F]">Join the Speedy Scholars Family</h2>
            <p className="mb-4">
              Whether you're a parent looking to give your child a head start in mathematics or an educator interested in our innovative approach to learning, we invite you to be a part of the Speedy Scholars journey.
            </p>
            <p className="mb-6">
              Discover the joy of learning, the thrill of mental math mastery, and the confidence that comes with academic excellence. Let's embark on this exciting educational adventure together!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-block bg-[#556B2F] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#3e4f22] transition-colors duration-300">
                Contact Us to Learn More
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}