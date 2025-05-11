"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-black text-white overflow-hidden ${spaceGrotesk.variable} ${inter.variable}`}
    >
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ahh.jpeg"
            alt="Hackathon Banner"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
        </div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 md:mb-12"
          >
            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">
              Polkadot AssetHub
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light">
                Hackathon 2025
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/polkadot.png"
                  alt="Polkadot Logo"
                  width={24}
                  height={24}
                  className="opacity-70"
                />
                <p className="font-inter text-sm md:text-base text-gray-400 tracking-wider uppercase">
                  powered by
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/edge.png"
                  alt="EdgeDistributor Logo"
                  width={24}
                  height={24}
                  className="opacity-70"
                />
                <span className="text-gray-300">EdgeDistributor Subdao</span>
              </div>
              <span className="text-gray-400">×</span>
              <div className="flex items-center gap-3">
                <Image
                  src="/montaq.jpeg"
                  alt="MontaQ Labs Logo"
                  width={24}
                  height={24}
                  className="opacity-70 rounded-full"
                />
                <span className="text-gray-300">MontaQ Labs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <h3 className="font-space text-lg md:text-xl font-medium mb-3 text-purple-400 tracking-wide">
                  Eliminator Round
                </h3>
                <p className="font-inter text-base md:text-lg text-gray-300 font-light">
                  30th May - 6th June
                </p>
                <p className="font-inter text-sm md:text-base text-gray-400 font-light">
                  Online
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <h3 className="font-space text-lg md:text-xl font-medium mb-3 text-purple-400 tracking-wide">
                  Finale
                </h3>
                <p className="font-inter text-base md:text-lg text-gray-300 font-light">
                  14th - 16th June
                </p>
                <p className="font-inter text-sm md:text-base text-gray-400 font-light">
                  Goa, India
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-white/30 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Tracks Section */}
      <section className="py-24 md:py-40 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-space text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Tracks
            </h2>
            <p className="font-inter text-lg md:text-xl text-gray-400 font-light tracking-wide">
              Choose your path to innovation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              {
                title: "Infrastructure",
                subtitle: "Category 1",
                description: "Polkadot ecological developer tools",
                icon: "🛠️",
              },
              {
                title: "Hot",
                subtitle: "Category 2",
                description: "Smart Contract, DeFi, AI, Layer2, DePIN, etc",
                icon: "🔥",
              },
              {
                title: "Chain",
                subtitle: "Category 3",
                description: "Building a blockchain based on Polkadot SDK",
                icon: "⛓️",
              },
              {
                title: "Open Topic",
                subtitle: "Category 4",
                description: "Your innovative ideas",
                icon: "💡",
              },
            ].map((track) => (
              <motion.div
                key={track.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl md:text-5xl">{track.icon}</span>
                  <div>
                    <h3 className="font-space text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                      {track.title}
                    </h3>
                    <p className="font-inter text-sm md:text-base text-purple-400 mb-3 font-light tracking-wide">
                      {track.subtitle}
                    </p>
                    <p className="font-inter text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-24 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-space text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Rewards & Prizes
            </h2>
            <p className="font-inter text-lg md:text-xl text-gray-400 font-light tracking-wide">
              Build. Win. Innovate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl mb-4">🥈</div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                  2nd Place
                </h3>
                <p className="font-inter text-2xl md:text-3xl text-gray-300 font-light">
                  $1,000
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl mb-4">🏆</div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                  1st Place
                </h3>
                <p className="font-inter text-2xl md:text-3xl text-gray-300 font-light">
                  $1,500
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl mb-4">🥉</div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                  3rd Place
                </h3>
                <p className="font-inter text-2xl md:text-3xl text-gray-300 font-light">
                  $500
                </p>
              </motion.div>
            </div>
            <p className="font-inter text-base md:text-lg text-gray-400 mt-8 font-light">
              Total Prize Pool: $3,000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-24 md:py-40 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-space text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Rules & Guidelines
            </h2>
            <p className="font-inter text-lg md:text-xl text-gray-400 font-light tracking-wide">
              What you need to know
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10"
            >
              <h3 className="font-space text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                Project Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "Projects must be new and not previously developed",
                  "All code must be open source and properly documented",
                  "Teams must use the Polkadot SDK for relevant categories",
                  "Projects must be submitted before the deadline",
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="font-inter text-sm md:text-base text-gray-300 font-light leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10"
            >
              <h3 className="font-space text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide">
                Submission Process
              </h3>
              <div className="space-y-6">
                <p className="font-inter text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  Submit your project by creating a Pull Request to our
                  submissions GitHub repository. More details about the
                  submission process will be provided soon.
                </p>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <p className="font-inter text-xs md:text-sm text-gray-400 font-light">
                    Stay tuned for the official submission repository
                    announcement
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="font-space text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Build the Future?
            </h2>
            <p className="font-inter text-lg md:text-xl mb-12 text-gray-400 font-light tracking-wide">
              Join us in creating innovative solutions on the Polkadot ecosystem
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="font-inter bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-4 md:py-5 px-12 md:px-16 rounded-full text-base md:text-lg transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 tracking-wide"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 text-center relative">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10">
          <p className="font-inter text-sm md:text-base text-gray-400 font-light tracking-wide">
            © 2025 Polkadot AssetHub Hackathon. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
