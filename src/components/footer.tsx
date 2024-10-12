"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email, isSubscribed)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.footer 
      className="bg-[#F5F5DC] text-[#556B2F] py-16 px-4 md:px-8 lg:px-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-2">Speedy Scholars</h2>
          <p className="text-xl">Abacus & English Studio</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2 text-2xl font-bold">
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">FACEBOOK</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">YOUTUBE</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">INSTAGRAM</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">The Studio</h3>
            <ul className="space-y-2 text-2xl font-bold">
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">ABOUT</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">MEMBERSHIP</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">CONTACT</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Join</h3>
            <ul className="space-y-2 text-2xl font-bold">
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">CLASSES</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">EVENTS</Link>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="hover:underline">BOOK A CLASS</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6">Begin Your Journey with Us</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Input
                type="email"
                placeholder="Enter Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-b-2 border-[#556B2F] rounded-none px-0 py-2 focus:ring-0 focus:border-[#556B2F] text-lg"
              />
            </motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Checkbox
                id="subscribe"
                checked={isSubscribed}
                onCheckedChange={(checked) => setIsSubscribed(checked as boolean)}
                className="border-[#556B2F] text-[#556B2F]"
              />
              <label htmlFor="subscribe" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Yes, subscribe me to your newsletter.
              </label>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" className="w-full bg-[#556B2F] text-white hover:bg-[#3e4f22] text-lg py-6">
                Subscribe
              </Button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div 
          className="border-t border-[#556B2F] pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          variants={itemVariants}
        >
          <div className="space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Refund Policy</Link>
            <Link href="#" className="hover:underline">Accessibility Statement</Link>
          </div>
          <div>
            © 2024 by Speedy Scholars.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}