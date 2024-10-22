"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import RealLogo from "../../assets/img/puc-logo.png";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (path: string) => {
    setActivePage(path);
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between h-20 px-5 bg-white z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => closeMenu("/")}>
          <Image src={RealLogo} alt="Logo" className="w-24 h-16" />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="z-30 md:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Nav Menu */}
        <ul
          className={`fixed top-20 left-0 w-full h-screen sm:bg-[#01553d] transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:static md:w-auto md:flex md:items-center md:bg-transparent md:h-auto md:translate-y-0`}>
          
          {["/firm", "/expertise", "/people", "/careers", "/contact"].map((path) => (
            <li className="mx-4 my-6 md:my-0" key={path}>
              <Link
                href={path}
                className={`text-3xl font-bold text-white md:text-[#01553d] hover:text-[#ffffff]/80 md:hover:text-[#01553d]/80 transition-colors ${
                  activePage === path ? "bg-green-500" : ""
                } md:bg-transparent md:hover:bg-transparent`}
                onClick={() => closeMenu(path)}>
                {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
