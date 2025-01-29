import { useTheme } from "../UI/ThemeContext";
import ThemeToggle from "../UI/ThemeToggle";
import { useState, useEffect } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx("fixed top-0 w-full flex items-center justify-between p-4 transition-all z-50", isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100")}>
      
      <Link href="/" className="text-xl font-bold">
        Mind-pal
      </Link>
      
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <FaUserCircle className="text-2xl" />
      </div>
      <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-md p-4 rounded-md md:hidden">
          <ThemeToggle />
          <button className="block w-full text-left py-2">Profile</button>
        </div>
      )}
    </nav>
  );
}