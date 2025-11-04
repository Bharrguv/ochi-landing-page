import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#004D43] text-white py-20 px-10 md:px-20 font-['Neue_Montreal']"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-600 pb-16 gap-10">
        {/* Big Heading */}
        <div className="flex flex-col items-start gap-3 leading-none">
          <h1 className="text-[15vw] md:text-[10vw] font-semibold tracking-tighter">
            EYE-
          </h1>
          <h1 className="text-[15vw] md:text-[10vw] font-semibold tracking-tighter">
            OPENING
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-lg opacity-80">Got a project in mind?</p>
          <a
            href="mailto:hello@ochi.design"
            className="text-2xl md:text-3xl font-medium hover:text-[#B9FF66] transition-colors duration-300"
          >
            hello@ochi.design
          </a>
          <p className="text-lg opacity-70">London, UK</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 text-sm md:text-base gap-6 md:gap-0">
        {/* Navigation Links */}
        <div className="flex gap-8 md:gap-12">
          {["Work", "About", "Services", "Contact"].map((link, i) => (
            <a
              key={i}
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B9FF66] hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Center Logo + Copyright */}
        <div className="flex items-center gap-3 text-center">
          {/* <img
            src="https://ochi.design/wp-content/themes/ochi/assets/images/logo-white.svg"
            alt="Ochi Logo"
            className="w-6 h-6"
          /> */}
          <span className="uppercase tracking-widest">© 2025 Ochi Design</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {["Instagram", "LinkedIn", "Twitter"].map((platform, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-[#B9FF66] transition-colors duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
