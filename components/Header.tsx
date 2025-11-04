"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/champignons", label: "Nos Champignons" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C10.896 2 10 2.896 10 4C10 4.738 10.402 5.376 11 5.723V7C11 7.552 11.448 8 12 8C12.552 8 13 7.552 13 7V5.723C13.598 5.376 14 4.738 14 4C14 2.896 13.104 2 12 2ZM7 8C5.343 8 4 9.343 4 11C4 12.302 4.839 13.402 6 13.816V15C6 16.657 7.343 18 9 18H15C16.657 18 18 16.657 18 15V13.816C19.161 13.402 20 12.302 20 11C20 9.343 18.657 8 17 8H16C15.448 8 15 8.448 15 9C15 9.552 15.448 10 16 10H17C17.552 10 18 10.448 18 11C18 11.552 17.552 12 17 12C16.448 12 16 12.448 16 13V15C16 15.552 15.552 16 15 16H9C8.448 16 8 15.552 8 15V13C8 12.448 7.552 12 7 12C6.448 12 6 11.552 6 11C6 10.448 6.448 10 7 10H8C8.552 10 9 9.552 9 9C9 8.448 8.552 8 8 8H7Z"/>
              </svg>
            </div>
            <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-earth-darkgreen" : "text-white"
            }`}>
              Champisphère
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:text-primary relative group ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-b-2xl shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
