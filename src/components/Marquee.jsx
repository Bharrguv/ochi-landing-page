import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] overflow-hidden">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // ⏳ slower & smoother (was 5)
          }}
          className="flex"
        >
          <h1 className="text-[17vw] leading-none font-['Founders_Grotesk_x'] uppercase font-semibold pr-[5vw]">
            We are ochi
          </h1>
          <h1 className="text-[17vw] leading-none font-['Founders_Grotesk_x'] uppercase font-semibold pr-[5vw]">
            We are ochi
          </h1>
          <h1 className="text-[17vw] leading-none font-['Founders_Grotesk_x'] uppercase font-semibold pr-[5vw]">
            We are ochi
          </h1>
          <h1 className="text-[17vw] leading-none font-['Founders_Grotesk_x'] uppercase font-semibold pr-[5vw]">
            We are ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
