"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import Frame from "./frame";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="min-h-24 sticky top-0 z-50 bg-[url('/bg/nav.webp')] bg-cover bg-center flex justify-between items-center p-4">
      <div className="ml-4">
        <Frame color="white">
          <Image
            src="/logo.svg"
            className="mx-4 my-1"
            alt="logo"
            height={150}
            width={150}
            draggable={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Frame>
      </div>
      <div>
        <ul className="flex gap-8 items-center font-gilroyMedium text-lg text-white max-md:hidden">
          <li className="hover:underline transition-all">
            <Link href="#home">Home</Link>
          </li>
          |
          <li className="hover:underline transition-all">
            <Link href="#about">About</Link>
          </li>
          <Frame color="white">
            <li className="bg-primaryBg text-xl px-4 py-1">Participate Now</li>
          </Frame>
        </ul>
        <RxHamburgerMenu
          onClick={() => setIsActive(!isActive)}
          className="text-white text-4xl md:hidden cursor-pointer"
        />
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isActive ? 0 : "100%" }}
        className="fixed md:hidden z-50 top-0 right-0 w-full min-h-screen bg-primaryBg"
      >
        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute top-8 right-8"
        >
          <MdCancel className="text-5xl text-white" />
        </button>
        <ul className="flex flex-col min-w-60 py-28 text-3xl lg:gap-10 gap-4 items-center text-white">
          <li className="cursor-pointer hover:underline">
            <Link href="#home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#about">About</Link>
          </li>
          <Frame color="white">
            <li className="bg-primaryBg text-xl px-4 py-1">Participate Now</li>
          </Frame>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Nav;
