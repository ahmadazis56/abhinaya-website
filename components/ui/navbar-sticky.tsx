"use client";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
export default function NavbarSticky() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white px-4 md:px-8 h-16 shadow-lg bg-abhi-navy">
      <div className="flex items-center h-full w-full justify-between">
        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 mr-2"
          aria-label="Open Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all"></span>
          <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all"></span>
          <span className="block w-7 h-0.5 bg-white rounded transition-all"></span>
        </button>
        {/* Logo & Brand Centered on Mobile, Left on Desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <Logo />
          </span>
        </div>
        {/* Navigation */}
        <ul
          className={`
            ${open ? "flex" : "hidden"}
            flex-col absolute top-16 left-0 w-full bg-abhi-navy md:bg-transparent md:static md:flex md:flex-row md:items-center md:gap-8 gap-4 text-base font-medium md:ml-0 transition-all duration-200
            md:relative md:top-0 md:left-0 md:w-auto md:h-auto
            `}
        >
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/company-profile">Company Profile</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/news">News</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/events">Events</Link>
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            className="relative hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button className="flex items-center">
              Our Team
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-abhi-navy shadow-lg rounded-md">
                <li>
                  <Link
                    href="/our-team/management"
                    className="block px-4 py-2 hover:bg-abhi-lemon/20"
                  >
                    Team Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team/abhinaya-techno"
                    className="block px-4 py-2 hover:bg-abhi-lemon/20"
                  >
                    Team Abhinaya Techno
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team/abhinaya-publisher"
                    className="block px-4 py-2 hover:bg-abhi-lemon/20"
                  >
                    Team Abhinaya Publisher
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team/abhinaya-creative"
                    className="block px-4 py-2 hover:bg-abhi-lemon/20"
                  >
                    Team Abhinaya Creative
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team/abhinaya-marketing"
                    className="block px-4 py-2 hover:bg-abhi-lemon/20"
                  >
                    Team Abhinaya Marketing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-abhi-lemon transition cursor-pointer px-4 py-2 md:p-0">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
