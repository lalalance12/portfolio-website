"use client";

import { useState } from "react";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { site } from "@/data/site";

const CHANNELS = [
  {
    label: "LinkedIn",
    value: "in/xerxes-lompon",
    href: site.socials.linkedin,
    Icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "@lalalance12",
    href: site.socials.github,
    Icon: FiGithub,
  },
  {
    label: "Resume",
    value: "PDF, one page",
    href: site.resume,
    Icon: FiFileText,
  },
];

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — mailto link below still works
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-paper shadow-xl shadow-ink/5">
      {/* Email row with copy action */}
      <div className="flex items-center gap-4 border-b border-hairline px-5 py-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
          <FiMail size={17} />
        </span>
        <a href={`mailto:${site.email}`} className="min-w-0 flex-1 transition-opacity hover:opacity-70">
          <p className="text-sm font-semibold">Email</p>
          <p className="truncate text-sm text-muted">{site.email}</p>
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all ${
            copied
              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
              : "bg-ink text-paper hover:opacity-80"
          }`}
        >
          {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {CHANNELS.map(({ label, value, href, Icon }, i) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-ink/5 ${
            i < CHANNELS.length - 1 ? "border-b border-hairline" : ""
          }`}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
            <Icon size={17} />
          </span>
          <span className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{label}</p>
            <p className="truncate text-sm text-muted">{value}</p>
          </span>
          <FiArrowUpRight
            size={17}
            className="shrink-0 text-ink/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
          />
        </a>
      ))}
    </div>
  );
}
