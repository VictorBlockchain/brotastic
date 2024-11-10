'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import confetti from 'canvas-confetti'
import { Orbitron, Roboto } from 'next/font/google'
import Image from 'next/image'
import Header from '@/app/components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faDumbbell, faPalette, faMap, faStar } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

const orbitron = Orbitron({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export default function Home() {
  const [broCount, setBroCount] = useState(0)
  const [showCar, setShowCar] = useState(false)
  const [currentCarIndex, setCurrentCarIndex] = useState(0)
  
  const carImages = [
    "/lambo1.gif?height=600&width=800&text=Sports+Car+1",
    "/lambo2.gif?height=600&width=800&text=Sports+Car+2",
    "/lambo3.gif?height=600&width=800&text=Sports+Car+1",
    "/lambo4.gif?height=600&width=800&text=Sports+Car+1",
    "/lambo5.gif?height=600&width=800&text=Sports+Car+1",
    "/lambo6.gif?height=600&width=800&text=Sports+Car+1",
    "/lambo7.gif?height=600&width=800&text=Sports+Car+1",
    "/money1.gif?height=600&width=800&text=Sports+Car+1",
    "/money2.gif?height=600&width=800&text=Sports+Car+9",
    "/girl1.gif?height=600&width=800&text=Sports+Car+10",
  ]
  
  useEffect(() => {
    if (broCount >= 10 && broCount % 10 === 0) {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carImages.length)
      setShowCar(true)
      setTimeout(() => setShowCar(false), 3000) // Hide car after 3 seconds
    }
  }, [broCount, carImages.length])
  
  const contractAddress = "launching soon..."

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white ${roboto.className}`}>
      <Header />

      <main className="container mx-auto px-6 py-12">
        <section id="home" className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center">
              <motion.h2 
                className={`text-6xl font-extrabold mb-6 ${orbitron.className}`} style={{lineHeight:'83px'}}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                The Ultimate Crypto Bro Meme Coin
              </motion.h2>
              <motion.p 
                className="text-xl mb-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                Join the brotherhood of crypto bros and ride the wave to the moon!
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-purple-800 font-bold py-4 px-8 rounded-full text-2xl hover:bg-yellow-300 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setBroCount(broCount + 1)}
              >
                Bro Fist Bump ({broCount})
              </motion.button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Image src="/elon.png" width={400} height={400} alt="Brotastic Meme" className="w-full h-auto rounded-lg shadow-lg border-4 border-white" />
            </div>
          </div>
        </section>
        
        <AnimatePresence>
          {showCar && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={carImages[currentCarIndex]}
                width={800}
                height={600}
                alt={`Sports Car ${currentCarIndex + 1}`}
                className="rounded-lg shadow-lg border-4 border-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="divider my-20 flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 w-1/3"></div>
          <span className="mx-4 text-4xl">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 w-1/3"></div>
        </div>

        <section id="video" className="mb-20">
        <h2 className={`text-4xl font-bold mb-6 text-center ${orbitron.className}`}>this is BROTASTIC!</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe width="315" height="560"
              src="https://www.youtube.com/embed/PbLgU5H-tXc"
              title="YouTube video player"
              frameBorder="0"
              style={{display:'block', margin:'0 auto', border:'none'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <p className="mt-4 text-center text-xl">Watch how Brotastic is changing the game!</p>
        </section>

        <div className="divider my-20 flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 w-1/3"></div>
          <span className="mx-4 text-4xl">
            <FontAwesomeIcon icon={faRocket} />
          </span>
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 w-1/3"></div>
        </div>

        <section id="buy" className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-md mb-6">
                <h3 className="text-2xl font-bold mb-2">Contract Address</h3>
                <p className="font-mono break-all">{contractAddress}</p>
              </div>
              <ol className="list-decimal list-inside space-y-2">
              <li>Set up a Sui wallet</li>
                <li>Buy SUI from an exchange (like changenow.io</li>
                <li>Transfer SUI to your wallet</li>
                <li>Use a Sui DEX to swap for Brotastic</li>
                <li>HODL and enjoy the ride, bro!</li>
              </ol>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 ml-6">
              <Image src="/brotastic1.png" width={400} height={300} alt="Bros Buying Crypto" className="w-full h-auto rounded-lg shadow-lg border-4 border-white" />
            </div>
          </div>
        </section>
      
        
        <div className="divider my-20 flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 w-1/3"></div>
          <span className="mx-4 text-4xl">
            <FontAwesomeIcon icon={faPalette} />
          </span>
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 w-1/3"></div>
        </div>
        
        <section id="merch" className="mb-20">
          <h2 className={`text-4xl font-bold mb-6 text-center ${orbitron.className}`}>Merch & NFT&apos;s <br/><small>coming soon...</small></h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
            <Image src="/brotastic2.png" width={400} height={300} alt="Brotastic NFT Collection" className="w-full h-auto rounded-lg shadow-lg border-4 border-white" />

            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 ml-3">
              <Image src="/brotastic3.png" width={400} height={300} alt="Brotastic NFT Collection" className="w-full h-auto rounded-lg shadow-lg border-4 border-white" />
            </div>
          </div>
        </section>

        <div className="divider my-20 flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 w-1/3"></div>
          <span className="mx-4 text-4xl">
            <FontAwesomeIcon icon={faMap} />
          </span>
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 w-1/3"></div>
        </div>

        <section id="roadmap" className="mb-20">
          <h2 className={`text-4xl font-bold mb-6 text-center ${orbitron.className}`}>Roadmap</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
            {[
              { phase: "Phase 1", title: "10x", description: "Initial token launch and community building" },
              { phase: "Phase 2", title: "20x", description: "Partnerships and exchange listings" },
              { phase: "Phase 3", title: "50x", description: "Launch Brotastic DeFi products" },
              { phase: "Phase 4", title: "100x", description: "Global domination of the meme coin market" }
            ].map((item, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
                  <h3 className="text-2xl font-bold mb-2">{item.phase}: {item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-purple-600"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider my-20 flex items-center justify-center">
          <div className="h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 w-1/3"></div>
          <span className="mx-4 text-4xl">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 w-1/3"></div>
        </div>
        
        {/* <section id="babes" className="mb-20">
          <h2 className={`text-4xl font-bold mb-6 ${orbitron.className}`}>Crypto Babes</h2>
          <p className="text-xl mb-6">Crypto Babes You Should Get To Know</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Crypto Cathy', 'Blockchain Barbie', 'DeFi Daisy'].map((babe, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-md">
                <Image src="/placeholder.svg" width={300} height={300} alt={babe} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{babe}</h3>
                <p>AI-generated crypto enthusiast</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center">Note: These are AI-generated images and do not represent real individuals.</p>
        </section> */}
      </main>

      <footer className="text-center py-6">
        <p>&copy; 2024 Brotastic. All rights reserved, bro.</p>
      </footer>
    </div>
  )
}