"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-(--color-bg) shadow-md z-50">
        <div className="custom-container">
          <div className=" flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-(--color-text)">
              Alif
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-(--color-text) "
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${pathname === link.href ? "text-(--color-accent) font-semibold" : "text-(--color-text) hover:text-(--color-accent) "}`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="bg-(--color-bg) border-2 border-gray-300 dark:border-slate-600 p-2 rounded-lg hover:opacity-80 transition-all"
              >
                {theme === "dark" ? (
                  <LuSunMedium size={20} className="text-(--color-accent)" />
                ) : (
                  <FaMoon size={20} className="text-(--color-text)" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-(--color-bg) z-50 md:hidden transform transition-transform duration-300 shadow-xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full pt-16 px-6">
          <button
            onClick={closeMobileMenu}
            className="mb-6 p-3 self-end text-(--color-text) active:opacity-80 transition-opacity "
          >
            <HiX size={24} />
          </button>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`transition-colors ${pathname === link.href ? "text-(--color-accent) font-semibold" : "text-(--color-text) active:text-(--color-accent) "}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={toggleTheme}
              className="bg-(--color-bg) border-2 border-gray-300 dark:border-slate-600 p-3 rounded-lg active:opacity-80 transition-all"
            >
              {theme === "dark" ? (
                <LuSunMedium size={24} className="text-(--color-accent)" />
              ) : (
                <FaMoon size={24} className="text-(--color-text)" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
