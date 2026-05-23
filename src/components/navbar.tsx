import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const navItems = [
  { item: "About Us", link: "/about" },
  { item: "About Silent Book Club", link: "/aboutsbc" },
  // { item: "SBC Fave Books", link: "/sbcfavebooks" },
];

const navLinkClass =
  "text-xl leading-[1.5] font-mulish text-primary-slate hover:underline focus-ring rounded-sm";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const mobileMenuId = "mobile-nav-menu";

  return (
    <header className="fixed bg-white w-full border-b border-primary-slate z-50">
      <div className="page-container page-section-x w-full py-4 flex justify-between items-center">
        <a href="/" className="focus-ring rounded-sm" aria-label="Silent Book Club Stourbridge home">
          <img src="/logo.jpg" alt="" className="h-16 inline-block" role="presentation" />
        </a>

        {matches ? (
          <nav aria-label="Main navigation" className="flex flex-row gap-6">
            {navItems.map((navItem) => (
              <a key={navItem.link} href={navItem.link} className={navLinkClass}>
                {navItem.item}
              </a>
            ))}
          </nav>
        ) : (
          <button
            type="button"
            onClick={() => setToggled(!toggled)}
            className="space-y-1 cursor-pointer p-2 focus-ring rounded-sm"
            aria-expanded={toggled}
            aria-controls={mobileMenuId}
            aria-label={toggled ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={{
                rotateZ: toggled ? 45 : 0,
                y: toggled ? 6 : 0,
                width: 20,
              }}
              className="block h-0.5 bg-primary-slate"
              aria-hidden="true"
            />
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? 0 : 0,
                width: 20,
              }}
              className="block h-0.5 bg-primary-slate"
              aria-hidden="true"
            />
            <motion.span
              animate={{ width: toggled ? 0 : 20 }}
              className="block h-0.5 bg-primary-slate"
              aria-hidden="true"
            />
          </button>
        )}

        {toggled && !matches && (
          <motion.nav
            id={mobileMenuId}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            aria-label="Main navigation"
            className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] bottom-0 left-0 gap-6 items-center justify-center pt-20"
          >
            <a href="/" className={navLinkClass} onClick={() => setToggled(false)}>
              Home
            </a>
            {navItems.map((navItem) => (
              <a
                key={navItem.link}
                href={navItem.link}
                className={navLinkClass}
                onClick={() => setToggled(false)}
              >
                {navItem.item}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
