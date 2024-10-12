"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#9aa586]">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          variants={itemVariants}
        >
          Our Plans
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Demo Class */}
          <motion.div 
            className="bg-[#95a082] border-2 border-white p-8 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Demo Class</h3>
            <div className="text-white mb-2">₹</div>
            <div className="text-6xl font-bold text-white mb-4">0</div>
            <p className="text-white mb-4">First 45 Mins Abacus Class is on us.</p>
            <Button className="w-full bg-transparent hover:bg-white hover:text-[#556B2F] text-white border-2 border-white transition-colors duration-300">
              Select
            </Button>
          </motion.div>


          {/* Pay-As-You-Go Class */}
          <motion.div 
            className="bg-[#afbf93] border-2 border-white p-8 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Pay-As-You-Go Class</h3>
            <div className="text-white mb-2">₹</div>
            <div className="text-6xl font-bold text-white mb-4">1,600</div>
            <p className="text-white mb-4">Experience flexible learning with our Single Session Pass for a 45-minute class.</p>
            <Button className="w-full bg-transparent hover:bg-white hover:text-[#556B2F] text-white border-2 border-white transition-colors duration-300">
              Select
            </Button>
            <div className="mt-6 text-sm text-white">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Get familiarised with basic concepts of abacus.</span>
              </div>
            </div>
          </motion.div>

          {/* 10-Class Value Pack */}
          <motion.div 
            className="bg-[#94a07f] border-2 border-white p-8 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">10-Class Value Pack</h3>
            <div className="text-white mb-2">₹</div>
            <div className="text-6xl font-bold text-white mb-4">12,500</div>
            <p className="text-white mb-4">Embark on a transformative journey with our Abacus Mastery Package of 10 class</p>
            <Button className="w-full bg-transparent hover:bg-white hover:text-[#556B2F] text-white border-2 border-white transition-colors duration-300">
              Select
            </Button>
            <div className="mt-6 text-sm text-white">
              {[
                "Structured Learning Path: A levels based learning program",
                "Consistent Progress: Ensuring steady improvement",
                "Weekly classes",
                "Resources: Exclusive access to all books and worksheets",
                "Priority assistance from instructors outside of class hours"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start mb-2">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>          
        </div>
      </motion.div>
    </section>
  )
}