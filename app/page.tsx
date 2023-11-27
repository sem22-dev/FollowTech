"use client"

import AboutUs from '@/components/about'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import HowItWorks from '@/components/howToBuy'
import RoadMap from '@/components/roadmap'
import Image from 'next/image'
import {motion} from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black">
        <Hero />
          <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                }}
                viewport={{ once: true }}
                
            >
                      <AboutUs />
            </motion.div>
  
        <RoadMap />
        <HowItWorks />
        <Footer />
    </main>
  )
}
