import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    motion
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textStructure mt-52 px-20 ">
        {["we  create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex   ">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}}  transition={{ease:[0.76,0,0.24,1],duration:1}} className="w-[9vw]  leading-[6vw] relative -top-[vw] bg-red-500 mr-[2vw]"></motion.div>
                )}
                <h1 className="uppercase text-[5.5vw] leading-[6vw]  tracking-tighter font-['Founder_Grotesk_X_Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-30 flex justify-between items-center py-5 px-20">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-1 font-light text-sm  uppercase border-zinc-400 rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex item-center justify-center border-1 py-2 border-zinc-400 rounded-full">
            <span className='rotate-45'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage