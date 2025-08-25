"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";

const socials = [
  { name: "GitHub", icon: SiGithub, url: "https://github.com/wmsalves" },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/wmsalves",
  },
];

export default function ContactSocials() {
  return (
    <div>
      <p className="font-semibold mb-3 text-gray-900">Social Media</p>
      <div className="flex gap-3">
        {socials.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="bg-white border border-gray-200 p-3 rounded-full shadow-sm hover:bg-purple-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
