"use client";

import { close, logo, menu } from "@/public/assets";
import { styles } from "@/styles";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            onClick={() => router.push("/")}
            alt="logo"
            className="cursor-pointer md:block object-contain"
            height={50}
            width={50}
            src={logo}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            &nbsp; Finn &nbsp;
            <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              key={link.id}
              onClick={() => {
                router.push(link.id);
                setActive(link.title);
              }}
            >
              {link.title}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
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
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] cursor-pointer font-medium`}
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                    router.push(link.id);
                  }}
                >
                  {link.title}
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
