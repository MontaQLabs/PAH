"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Inter } from "next/font/google";
import { Unbounded } from "next/font/google";
import Link from "next/link";

// Font configuration
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Polkadot color palette
const COLORS = {
  PINK: "#FF2670",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  LIME: "#E4FF07",
  CYAN: "#07FFFF",
  VIOLET: "#7916F3",
  STORM_200: "#DCE2E9",
  STORM_400: "#AEB7CB",
  STORM_700: "#6E7391",
};

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

// Create a component for the Register button with link
const RegisterButton = ({ className = "", style = {} }) => (
  <Link
    href="https://dorahacks.io/hackathon/polkadot"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{
        scale: 1.05,
        backgroundColor: COLORS.WHITE,
        color: COLORS.PINK,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`font-inter font-bold py-3 sm:py-4 px-8 sm:px-12 md:px-16 rounded-none text-lg sm:text-xl transition-all shadow-lg ${className}`}
      style={{
        backgroundColor: COLORS.PINK,
        color: COLORS.WHITE,
        border: `2px solid ${COLORS.BLACK}`,
        ...style,
      }}
    >
      REGISTER NOW
    </motion.button>
  </Link>
);

// Create a component for the Discord button with link
const DiscordButton = ({ className = "", style = {} }) => (
  <Link
    href="https://discord.gg/BZWkdy5w5b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{
        scale: 1.05,
        backgroundColor: "#5865F2", // Discord blue
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`font-inter font-bold py-3 sm:py-4 px-8 sm:px-12 md:px-16 rounded-none text-lg sm:text-xl transition-all shadow-lg ${className}`}
      style={{
        backgroundColor: "#7289DA", // Discord color
        color: COLORS.WHITE,
        border: `2px solid ${COLORS.BLACK}`,
        ...style,
      }}
    >
      JOIN DISCORD
    </motion.button>
  </Link>
);

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    });
  }, [controls]);

  return (
    <main
      className={`min-h-screen bg-black text-white ${unbounded.variable} ${inter.variable}`}
    >
      {/* Hero Section with enhanced image and animations */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="/ahh.jpeg"
              alt="Hackathon Banner"
              className="object-cover w-full h-full object-center"
              style={{
                objectPosition: "center 25%",
                height: "100%",
                width: "100%",
              }}
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${COLORS.BLACK}`, opacity: 0.85 }}
          />

          {/* Polkadot-inspired dot pattern overlay - reduced for better performance */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute w-full h-full"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 30 + 10,
                    height: Math.random() * 30 + 10,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: i % 2 === 0 ? COLORS.PINK : COLORS.WHITE,
                    opacity: i % 2 === 0 ? 0.8 : 0.5,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: i % 2 === 0 ? 0.8 : 0.5,
                    scale: 1,
                    x: [0, Math.random() * 15 - 7],
                    y: [0, Math.random() * 15 - 7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-[90%] md:max-w-3xl lg:max-w-4xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.2,
            }}
            className="mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="overflow-hidden"
            >
              <h1 className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block mb-6 flex flex-col items-center justify-center"
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src="/polkadot_full.png"
                    alt="Polkadot Full Logo"
                    className="h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-w-full mb-4"
                  />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block"
                  style={{ color: COLORS.PINK }}
                >
                  AssetHub Hackathon
                </motion.span>
              </h1>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-white/70 mt-4"
            >
              June 2025, Goa - India
            </motion.span>
          </motion.div>

          {/* Register CTA Button in Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <RegisterButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 md:mb-10"
          >
            {/* Organized By Section */}
            <div className="flex flex-col items-center justify-center mb-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="font-inter text-sm sm:text-base text-white uppercase tracking-wider mb-2 font-bold"
                style={{ color: COLORS.PINK }}
              >
                Organized By
              </motion.p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <motion.img
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    src="/edge.png"
                    alt="EdgeDistributor Logo"
                    width={20}
                    height={20}
                    className="opacity-90"
                  />
                  <span className="text-white text-xs sm:text-sm">
                    EdgeDistributor Subdao
                  </span>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-white/50 mx-1"
                >
                  +
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <motion.img
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    src="/montaq.jpeg"
                    alt="MontaQ Labs Logo"
                    width={20}
                    height={20}
                    className="opacity-90 rounded-full"
                  />
                  <span className="text-white text-xs sm:text-sm">
                    MontaQ Labs
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Powered By Section */}
            <div className="flex flex-col items-center justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="font-inter text-sm sm:text-base text-white uppercase tracking-wider mb-2 font-bold"
                style={{ color: COLORS.PINK }}
              >
                Powered By
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <motion.img
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  src="/polkadot.png"
                  alt="Polkadot Logo"
                  width={35}
                  height={35}
                  className="opacity-90"
                />
                <span className="text-white text-xs sm:text-sm">
                  Polkadot Events Bounty
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto p-4 sm:p-6 rounded-none border-2 border-white"
                style={{
                  backgroundColor: COLORS.PINK,
                  color: COLORS.WHITE,
                  borderColor: COLORS.BLACK,
                }}
              >
                <h3 className="font-space text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
                  Eliminator Round
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg">
                  30th May - 6th June
                </p>
                <p className="font-inter text-xs sm:text-sm text-white/80">
                  Online
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-transparent text-white p-4 sm:p-6 rounded-none border-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: COLORS.PINK,
                  color: COLORS.WHITE,
                }}
              >
                <h3 className="font-space text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
                  Finale
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg">
                  14th - 16th June
                </p>
                <p className="font-inter text-xs sm:text-sm text-white/70">
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
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
                backgroundColor: [
                  "rgba(255,255,255,0.6)",
                  COLORS.PINK,
                  "rgba(255,255,255,0.6)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Hackathon Details Section with emojis and excitement */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{ backgroundColor: COLORS.BLACK }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute w-full h-full"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 10 + 4,
                  height: Math.random() * 10 + 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: COLORS.PINK,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
              The <span style={{ color: COLORS.PINK }}>Epic</span> Hackathon
              Experience 🚀
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 mx-auto mb-8"
              style={{ backgroundColor: COLORS.PINK }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 sm:p-8 md:p-10 mb-12 border-l-4 rounded-r-lg"
            style={{ borderColor: COLORS.PINK }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-inter text-base sm:text-lg md:text-xl text-white leading-relaxed"
            >
              <span className="text-2xl">💥</span> Polkadot AssetHub Hackathon
              is{" "}
              <span className="font-bold" style={{ color: COLORS.PINK }}>
                first of its kind
              </span>{" "}
              hybrid hackathon scheduled on the occasion of the upcoming Hub
              launch which lower the entry barrier and opens up the
              opportunities for solidity developers to enter the Polkadot
              ecosystem more natively than ever before!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-space text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
              This hackathon is divided into two{" "}
              <span style={{ color: COLORS.PINK }}>exciting</span> stages:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Online Eliminator Round */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: COLORS.PINK,
                }}
                className="bg-white/5 p-6 sm:p-8 border-2 border-white/20 rounded-lg relative"
              >
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: COLORS.PINK }}
                >
                  1️⃣
                </div>
                <h4 className="font-space text-xl sm:text-2xl font-bold mb-4 text-white">
                  Online Eliminator Round 🔥
                </h4>
                <ul className="space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">⏱️</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">1 week</span> to
                      build an MVP
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">🛟</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">Lifelines</span>{" "}
                      for everyone: Mini-workshop, live AMA and on-demand
                      mentoring
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">🏆</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">Top 12 teams</span>{" "}
                      will be selected for the Finalè Round
                    </p>
                  </motion.li>
                </ul>
              </motion.div>

              {/* In-person Finalè Round */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: COLORS.PINK,
                }}
                className="bg-white/5 p-6 sm:p-8 border-2 border-white/20 rounded-lg relative"
              >
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: COLORS.PINK }}
                >
                  2️⃣
                </div>
                <h4 className="font-space text-xl sm:text-2xl font-bold mb-4 text-white">
                  In-person Finalè Round in Goa 🏝️
                </h4>
                <ul className="space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">🏡</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">2 days</span> to
                      refine and deploy the project live in one of the biggest
                      villas in Goa with sponsored stay & food
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">💰</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">
                        Guaranteed $200 USD
                      </span>{" "}
                      rewards per team at minimum
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">💸</span>
                    <p className="font-inter text-white/90">
                      <span className="font-bold text-white">
                        Top 3 team rewards:
                      </span>{" "}
                      $1500, $1000, $700 USD
                    </p>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/10 p-3 sm:p-4 rounded-lg border border-white/20">
              <p className="font-inter text-base sm:text-lg text-white">
                <span className="text-xl mr-2">🌟</span>
                <span className="font-bold" style={{ color: COLORS.PINK }}>
                  Don&apos;t miss this chance!
                </span>{" "}
                Build on Polkadot and win big!
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-4 justify-center">
                <RegisterButton
                  className="text-base sm:text-lg"
                  style={{
                    backgroundColor: COLORS.PINK,
                    color: COLORS.WHITE,
                    border: `2px solid ${COLORS.BLACK}`,
                  }}
                />
                <DiscordButton
                  className="text-base sm:text-lg"
                  style={{
                    border: `2px solid ${COLORS.BLACK}`,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-white"
          style={{
            backgroundColor: COLORS.WHITE,
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute w-full h-full"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-black/5"
                style={{
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: "blur(40px)",
                  backgroundColor:
                    i % 3 === 0 ? COLORS.PINK : COLORS.BLACK + "10",
                }}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: i % 3 === 0 ? 0.15 : 0.05,
                  x: [0, Math.random() * 20 - 10],
                  y: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5,
                }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <h2 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight text-black">
              Tracks 🛤️
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-black mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: COLORS.PINK }}
            />
            <p className="font-inter text-base sm:text-lg md:text-xl text-black/70 font-normal tracking-wide">
              Choose your path to innovation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          >
            {[
              {
                title: "Infrastructure 🛠️",
                subtitle: "Category 1",
                description: "Polkadot ecological developer tools",
                icon: "🔧",
              },
              {
                title: "Hot 🔥",
                subtitle: "Category 2",
                description: "Smart Contract, DeFi, AI, Layer2, DePIN, etc",
                icon: "⚡",
              },
              {
                title: "Open Topic 💡",
                subtitle: "Category 3",
                description: "Your innovative ideas",
                icon: "🧠",
              },
            ].map((track, index) => (
              <motion.div
                key={track.title}
                variants={fadeInUp}
                custom={index}
                whileHover={{
                  scale: 1.02,
                  borderColor: COLORS.PINK,
                  transition: { duration: 0.2 },
                }}
                className="group bg-transparent p-6 sm:p-8 md:p-10 border-2 border-black text-black relative overflow-hidden"
              >
                <motion.div
                  initial={{ height: "0%", opacity: 0 }}
                  whileHover={{
                    height: "100%",
                    opacity: 0.05,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute inset-0 w-full bg-black pointer-events-none"
                  style={{ originY: 0 }}
                />

                <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0"
                  >
                    {track.icon}
                  </motion.span>
                  <div>
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 tracking-wide text-black"
                    >
                      {track.title}
                    </motion.h3>
                    <motion.p
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="font-inter text-xs sm:text-sm md:text-base font-normal"
                      style={{ color: COLORS.PINK }}
                    >
                      {track.subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="font-inter text-xs sm:text-sm md:text-base text-black/70 font-normal leading-relaxed"
                    >
                      {track.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-black"
          style={{
            backgroundColor: COLORS.BLACK,
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute w-full h-full"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 300 + i * 100,
                  height: 300 + i * 100,
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                  border: `2px solid ${COLORS.PINK}`,
                  opacity: 0.2 - i * 0.05,
                }}
                initial={{ scale: 0.8 }}
                whileInView={{
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                viewport={{ once: true }}
              />
            ))}

            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute rounded-full z-0"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: COLORS.PINK,
                }}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight text-white">
              Rewards 💰
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: COLORS.PINK }}
            />
            <p className="font-inter text-base sm:text-lg md:text-xl text-white/70 font-normal tracking-wide">
              Build. Win. Innovate. 🚀
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* First Place (now first in order) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: COLORS.BLACK,
                  color: COLORS.WHITE,
                  borderColor: COLORS.PINK,
                  transition: { duration: 0.2 },
                }}
                className="bg-white p-6 sm:p-8 md:p-10 text-black relative z-10 border-2 border-transparent"
                style={{ backgroundColor: COLORS.WHITE, color: COLORS.BLACK }}
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold py-1 px-3 sm:px-4"
                  style={{ backgroundColor: COLORS.PINK, color: "white" }}
                >
                  GRAND PRIZE
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
                >
                  🏆
                </motion.div>
                <h3 className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                  1st Place
                </h3>
                <p className="font-inter text-xl sm:text-2xl md:text-3xl font-normal">
                  $1,500
                </p>
              </motion.div>

              {/* Second Place */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: COLORS.PINK,
                  transition: { duration: 0.2 },
                }}
                className="bg-transparent p-6 sm:p-8 md:p-10 border-2 border-white text-white relative group"
                style={{ borderColor: COLORS.PINK, opacity: 0.9 }}
              >
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
                >
                  🥈
                </motion.div>
                <h3 className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                  2nd Place
                </h3>
                <p className="font-inter text-xl sm:text-2xl md:text-3xl font-normal">
                  $1,000
                </p>
              </motion.div>

              {/* Third Place */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: COLORS.PINK,
                  transition: { duration: 0.2 },
                }}
                className="bg-transparent p-6 sm:p-8 md:p-10 border-2 border-white text-white relative group"
                style={{ borderColor: COLORS.PINK, opacity: 0.8 }}
              >
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
                >
                  🥉
                </motion.div>
                <h3 className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                  3rd Place
                </h3>
                <p className="font-inter text-xl sm:text-2xl md:text-3xl font-normal">
                  $500
                </p>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-inter text-base sm:text-lg md:text-xl text-white/70 mt-8 sm:mt-10 font-normal"
            >
              Total Prize Pool:{" "}
              <span style={{ color: COLORS.PINK }}>$3,000 💸</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 bg-white text-black relative overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: COLORS.PINK }}
          />
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-full h-1"
            style={{ backgroundColor: COLORS.PINK }}
          />

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 8 + 4,
                  height: Math.random() * 8 + 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: "#000",
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
              Rules & Guidelines
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-black mx-auto mb-4 sm:mb-8"
              style={{ backgroundColor: COLORS.PINK }}
            />
            <p className="font-inter text-base sm:text-lg md:text-xl text-black/70 font-normal tracking-wide">
              What you need to know
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: COLORS.PINK,
                transition: { duration: 0.2 },
              }}
              className="bg-transparent p-6 sm:p-8 md:p-10 border-2 border-black relative group"
            >
              <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <h3 className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 tracking-wide">
                Project Requirements
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Projects must be new and not previously developed",
                  "All code must be open source and properly documented",
                  "Teams must use the Polkadot SDK for relevant categories",
                  "Projects must be submitted before the deadline",
                ].map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <span className="text-black mt-1">•</span>
                    <span className="font-inter text-xs sm:text-sm md:text-base text-black/80 font-normal leading-relaxed">
                      {rule}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: COLORS.PINK,
                transition: { duration: 0.2 },
              }}
              className="bg-transparent p-6 sm:p-8 md:p-10 border-2 border-black relative group"
            >
              <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <h3 className="font-space text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 tracking-wide">
                Submission Process
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="font-inter text-xs sm:text-sm md:text-base text-black/80 font-normal leading-relaxed"
                >
                  Submit your project by creating a Pull Request to our
                  submissions GitHub repository. More details about the
                  submission process will be provided soon.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/5 p-4 sm:p-6"
                >
                  <p className="font-inter text-xs sm:text-sm text-black/70 font-normal">
                    Stay tuned for the official submission repository
                    announcement
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using ahh.jpeg more prominently */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        />

        {/* Using ahh.jpeg as background more prominently */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/ahh.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </motion.div>

        {/* Animated content */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left side: Image in a frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative border-4 sm:border-8 border-pink shadow-2xl mx-auto md:mx-0 max-w-[80%] md:max-w-full overflow-hidden"
              style={{ borderColor: COLORS.PINK }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/ahh.jpeg"
                alt="Hackathon Experience"
                className="w-full h-auto object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-black"
                style={{ backgroundColor: COLORS.BLACK, opacity: 0.9 }}
              >
                <p className="text-white text-xs sm:text-sm font-medium">
                  Experience the vibrant Goa hackathon atmosphere
                </p>
              </motion.div>
            </motion.div>

            {/* Right side: CTA content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left mt-6 md:mt-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white"
              >
                Ready to Build the Future? 🚀
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-inter text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-white/70 font-normal tracking-wide"
              >
                Join us in creating innovative solutions on the Polkadot
                ecosystem
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <RegisterButton
                  className="text-base sm:text-lg"
                  style={{
                    backgroundColor: COLORS.PINK,
                    color: COLORS.WHITE,
                    border: `2px solid ${COLORS.WHITE}`,
                  }}
                />
                <span className="inline-block w-4"></span>
                <DiscordButton
                  className="text-base sm:text-lg mt-4 sm:mt-0"
                  style={{
                    border: `2px solid ${COLORS.WHITE}`,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 bg-black">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-[2px] w-full"
          style={{ backgroundColor: COLORS.PINK }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <motion.img
                whileHover={{ rotate: 10, scale: 1.1 }}
                src="/polkadot.png"
                alt="Polkadot Logo"
                width={60}
                height={60}
                className="opacity-90"
              />
              <span
                className="text-white/80 text-lg font-medium"
                style={{ color: COLORS.PINK }}
              >
                Polkadot AssetHub Hackathon ✨
              </span>
            </div>
            <p className="font-inter text-xs sm:text-sm md:text-base text-white/50 font-normal tracking-wide">
              © 2025 Polkadot AssetHub Hackathon. All rights reserved.
            </p>
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[2px] mt-4 sm:mt-6 w-full"
              style={{ backgroundColor: COLORS.PINK }}
            />
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
