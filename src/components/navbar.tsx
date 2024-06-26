import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const navItems = [
  {
    item: 'About Us',
    link: '/about'
  },
  {
    item: 'About Silent Book Club',
    link: '/aboutsbc'
  }
]

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-xl leading-6 font-mulish text-primary-200 hover:underline";

  return (
    <div className="fixed bg-white w-full border-b border-primary-slate">
      <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-4 flex justify-between items-center" >
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-16 inline-block" />
        </a>

        {/* Nav List for Desktop */}
        {matches && (
          <nav className="flex flex-row gap-6">
            { navItems.map((navItem) => {
              return (
                  <a href={navItem.link} className={linkStyle}>
                    {navItem.item}
                  </a>
              )
            })}
          </nav>
        )}

        {!matches && (
          <div
            onClick={() => setToggled(!toggled)}
            className="space-y-1 cursor-pointer"
          >
            <motion.span
              animate={{
                rotateZ: toggled ? 45 : 0,
                y: toggled ? 6 : 0,
                width: toggled ? 20: 20 
              }}
              className="block h-0.5 bg-primary-slate"
            ></motion.span>
            <motion.span
              animate={{ rotateZ: toggled ? -45 : 0,
                y: toggled ? 0 : 0,
                width: toggled ? 20 : 20, }}
              className="block h-0.5 bg-primary-slate"
            ></motion.span>
            <motion.span
              animate={{
                
                width: toggled ? 0 : 20,
              }}
              className="block h-0.5 bg-primary-slate"
            ></motion.span>
          </div>
        )}

        {toggled && !matches && (
          <motion.nav
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
          >
            <a href="/" className={linkStyle}>
              Home
            </a>

            { navItems.map((navItem) => {
              return (
                  <a href={navItem.link} className={linkStyle}>
                    {navItem.item}
                  </a>
              )
            })}
          </motion.nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
