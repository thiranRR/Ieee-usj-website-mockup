"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "Team", path: "/team" },
  { name: "Chapters", path: "/chapters", hasDropdown: true },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfdfd] border-b border-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logos/logo.png"
              alt="IEEE Student Branch - University of Sri Jayewardenepura"
              width={400}
              height={100}
              className="h-20 w-auto object-contain group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-ieee-blue ${
                    pathname === link.path || pathname?.startsWith(link.path + "/")
                      ? "text-ieee-blue"
                      : "text-[#68686c]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
                </Link>
                {/* Visual Indicator for Active Route */}
                {pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-7 left-0 right-0 h-0.5 bg-ieee-blue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#68686c] hover:text-ieee-blue transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-medium p-2 rounded-lg transition-colors ${
                    pathname === link.path
                      ? "bg-slate-50 text-ieee-blue"
                      : "text-[#68686c] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
