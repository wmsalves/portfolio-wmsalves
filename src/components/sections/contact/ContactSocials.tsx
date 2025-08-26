"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/wmsalves",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/wmsalves",
  },
];

export default function ContactSocials() {
  return (
    <div>
      <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Social Media
      </p>
      <div className="flex gap-3">
        {socials.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="p-3 rounded-full border shadow-sm transition-colors
                       bg-white border-gray-200 hover:bg-purple-600 hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-purple-300
                       dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-purple-700 dark:focus:ring-purple-500"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
