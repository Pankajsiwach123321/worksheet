"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-black py-5">
      <div className=" mx-auto px-3">
        <div className="flex justify-between items-center">
          <ul className=" flex gap-5 items-center">
            <li>
              <Link href="/" className=" text-white">
                WORKSHEET 2024
              </Link>
            </li>
          </ul>
          <ul>
            <li className="relative z-[1] group">
              <a href="#" className="text-white">
                <div className=" p-2 rounded-full border-2 border-[#9046ff]">
                  PANKAJ 385
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
