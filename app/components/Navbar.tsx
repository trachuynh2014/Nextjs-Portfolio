"use client";

import { close, menu } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div onClick={scrollToTop} className="flex items-center">
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            &nbsp; Finn &nbsp;
            <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
            >
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? menu : close}
            alt="menu"
            height={28}
            width={28}
            className="cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] cursor-pointer font-medium`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
