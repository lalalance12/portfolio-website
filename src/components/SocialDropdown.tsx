"use client";
import { useState } from "react";

interface SocialDropdownProps {
  isMobile?: boolean;
}

export default function SocialDropdown({
  isMobile = false,
}: SocialDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const buttonClasses = isMobile
    ? "text-sm font-medium flex items-center justify-center gap-2 rounded-lg transition-all duration-200 w-full px-4 py-3 border-2 border-neutral text-neutral bg-transparent hover:bg-neutral/5"
    : "text-sm font-medium inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 w-10 h-10 p-0 border-2 border-neutral text-neutral bg-transparent hover:bg-neutral/5 xl:w-auto xl:h-auto xl:px-4 xl:py-2 xl:rounded-lg xl:border-0 xl:text-neutral/80 xl:hover:text-neutral xl:hover:bg-neutral/5";

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={buttonClasses}
        title="Connect with me"
        aria-label="Connect with me"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            isMobile
              ? "w-4 h-4 flex-shrink-0"
              : "w-5 h-5 xl:w-4 xl:h-4 flex-shrink-0"
          }
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span className={isMobile ? "inline" : "hidden xl:inline"}>
          Connect with me
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${
            isMobile ? "block" : "hidden xl:block"
          } ${isDropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute top-full mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50 ${
            isMobile ? "left-1/2 -translate-x-1/2" : "right-0"
          }`}
        >
          <a
            href="mailto:lompon.xerxeslancelaurenz@gmail.com"
            title="Send email to Xerxes Lompon"
            className="flex items-center gap-3 px-4 py-2 text-sm text-neutral/80 hover:text-secondary hover:bg-primary/10 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
          <a
            href="https://linkedin.com/in/xerxes-lompon"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Xerxes Lompon's LinkedIn profile"
            className="flex items-center gap-3 px-4 py-2 text-sm text-neutral/80 hover:text-secondary hover:bg-primary/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/.grindh1412"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with Xerxes Lompon on Discord"
            className="flex items-center gap-3 px-4 py-2 text-sm text-neutral/80 hover:text-secondary hover:bg-primary/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
            </svg>
            Discord
          </a>
        </div>
      )}
    </div>
  );
}
