"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [animate, setAnimate] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false); // dropdown desktop
  const [mobileMenu, setMobileMenu] = useState(false); // menu mobile
  const [mobileDropdown, setMobileDropdown] = useState(false); // dropdown mobile
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar ${animate ? "animate" : ""}`}>

      {/* ---------------- LOGO ---------------- */}
      <div className="navbar-logo">
        <Link href="/" className="logo-link">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={55}
            height={55}
            className="logo-img"
          />
        </Link>
      </div>

      {/* ---------------- MENU DESKTOP ---------------- */}
      <ul className="navbar-links">

        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            about
          </Link>
        </li>

        {/* DROPDOWN DESKTOP */}
        <li
          className="dropdown"
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
        >
          <span className={pathname.startsWith("/portfolio") ? "active" : ""}>
            portfolio ▾
          </span>

          <ul className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
            <li><Link href="/portfolio/life-is-strange">Life is Strange</Link></li>
            <li><Link href="/portfolio/yankee-candle">Yankee Candle</Link></li>
            <li><Link href="/portfolio/horizon-media">Horizon Media</Link></li>
          </ul>
        </li>

        <li>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            contact
          </Link>
        </li>
      </ul>

      {/* ---------------- HAMBURGER ---------------- */}
      <div
        className="navbar-hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ---------------- SPACER SOCIAL (VUOTO) ---------------- */}
      <div className="navbar-social"></div>

      {/* ---------------- MENU MOBILE ---------------- */}
      <div className={`navbar-mobile-menu ${mobileMenu ? "show" : ""}`}>

        <Link href="/about" onClick={() => setMobileMenu(false)}>
          about
        </Link>

        {/* DROPDOWN MOBILE */}
        <div
          className={`mobile-dropdown ${mobileDropdown ? "show" : ""}`}
        >
          <span onClick={() => setMobileDropdown(!mobileDropdown)}>
            portfolio ▾
          </span>

          <ul>
            <li>
              <Link href="/portfolio/life-is-strange" onClick={() => setMobileMenu(false)}>
                Life is Strange
              </Link>
            </li>

            <li>
              <Link href="/portfolio/yankee-candle" onClick={() => setMobileMenu(false)}>
                Yankee Candle
              </Link>
            </li>

            <li>
              <Link href="/portfolio/horizon-media" onClick={() => setMobileMenu(false)}>
                Horizon Media
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/contact" onClick={() => setMobileMenu(false)}>
          contact
        </Link>
      </div>

    </nav>
  );
}
