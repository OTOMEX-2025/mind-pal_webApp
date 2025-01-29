import { useTheme } from "../UI/ThemeContext";
import ThemeToggle from "../UI/ThemeToggle";
import { useState, useEffect } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import logo from "./../../public/MindPalLogo.png";
import Image from "next/image";
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full flex items-center justify-between p-1 transition-all z-50",
        isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100",
        theme === "light"
          ? "bg-paleTurquoise text-blue-900"
          : "bg-darkTeal text-mutedOlive"
      )}
    >
      <Link href="/" className="text-lg font-bold">
        <Image
          src={logo}
          width={120} 
          height={120} 
          className={clsx(
            styles.logoImage,
            theme === "light" ? styles.logoImageLight : styles.logoImageDark
          )}
        />
      </Link>

      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <FaUserCircle className="text-lg" />
      </div>

      <button className="md:hidden text-lg" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      {menuOpen && (
        <div className="absolute top-14 right-3 bg-white dark:bg-gray-800 shadow-md p-3 rounded-md md:hidden">
          <ThemeToggle />
          <button className="block w-full text-left py-1">Profile</button>
        </div>
      )}
    </nav>
  );
}
