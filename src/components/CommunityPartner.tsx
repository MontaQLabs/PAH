import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const partnersData = [
  {
    href: "https://x.com/weareWeb3Mumbai",
    src: "/web3mumbai.png",
    alt: "Web3 Mumbai",
  },
  {
    href: "https://x.com/agentsclan2",
    src: "/agents.png",
    alt: "Agent's Clan",
  },
  {
    href: "https://x.com/lucknow_dao",
    src: "/lucknow_dao.jpg",
    alt: "Lucknow DAO",
  },
  {
    href: "https://x.com/Dot_Delhi",
    src: "/Polkadot_Delhi.png",
    alt: "Polkadot Delhi",
  },
  {
    href: "https://x.com/99_thFloor",
    src: "/99th_Floor.png",
    alt: "99th Floor",
  },
  {
    href: "https://x.com/hyderabaddao",
    src: "/hyderabad_dao.jpg",
    alt: "Hyderabad DAO",
  },

  {
    href: "https://x.com/Bengaluru_DAO",
    src: "/BLRDAO.jpg",
    alt: "Bengaluru DAO",
  },
  {
    href: "https://x.com/Delhi_NCR_DAO",
    src: "/Delhi_NCR_DAO.jpg",
    alt: "Delhi NCR DAO",
  },
  {
    href: "https://x.com/CodingCatalystt",
    src: "/CodingCatalystt.png",
    alt: "Coding Catalyst",
  },
  {
    href: "https://x.com/Web3_Bhopal",
    src: "/Web3_Bhopal.jpg",
    alt: "Web3_Bhopal",
  },
  {
    href: "https://www.instagram.com/wncc.iitb/",
    src: "/WNCC_Logo.png",
    alt: "WNCC",
  },
  {
    href: "https://x.com/dotgraphic1",
    src: "/Dotgraphics.jpg",
    alt: "Dotgraphic",
  },
];

const CommunityPartner = () => {
  return (
    <section
      id="community-partners"
      className="py-12 sm:py-16 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            Community Partners
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mx-auto mb-8 sm:mb-10"
            style={{ backgroundColor: COLORS.PINK }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 place-items-center"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-2 sm:p-4 flex justify-center items-center"
            >
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Link to ${partner.alt}`}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain max-w-full"
                  loading="lazy"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPartner;
