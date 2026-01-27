"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="fixed top-0 w-full bg-(--color-bg) shadow-md z-50">
      <div className="custom-container">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-(--color-text)">
            Alif
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/projects"
              className="text-(--color-text) hover:text-(--color-accent)"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-(--color-text) hover:text-(--color-accent)"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-(--color-text) hover:text-(--color-accent)"
            >
              Contact
            </Link>
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
  );
}