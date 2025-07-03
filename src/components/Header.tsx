"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialDropdown from "./SocialDropdown";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full px-8 py-6 flex justify-between items-center bg-secondary border-b border-border shadow-sm">
      <div className="text-xl font-medium flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-6 h-6 bg-neutral rounded-full flex items-center justify-center"></div>
            </div>
          </div>
          <span className="text-neutral font-bold">Portfolio</span>
        </Link>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="w-2 h-2 rounded-full bg-primary absolute left-[-10px]"></div>
        <nav className="flex items-center rounded-full bg-neutral px-2 py-2 shadow-md border border-border">
          <Link
            href="/work"
            className={`px-4 py-1 rounded-full text-sm transition-colors text-neutral ${
              isActive("/work") ? "font-medium bg-neutral text-secondary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-4 py-1 rounded-full text-sm transition-colors text-neutral ${
              isActive("/services")
                ? "font-medium bg-neutral text-secondary"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/approach"
            className={`px-4 py-1 rounded-full text-sm transition-colors text-neutral ${
              isActive("/approach")
                ? "font-medium bg-neutral text-secondary"
                : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`px-4 py-1 rounded-full text-sm transition-colors text-neutral ${
              isActive("/about") ? "font-medium bg-neutral text-secondary" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-1 rounded-full text-sm transition-colors text-neutral ${
              isActive("/contact")
                ? "font-medium bg-neutral text-secondary"
                : ""
            }`}
          >
            Resume
          </Link>
        </nav>
      </div>
      <SocialDropdown />
    </header>
  );
}
