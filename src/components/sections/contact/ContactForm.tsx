"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // honeypot simples anti-bot
  const [website, setWebsite] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (website) return; // se o honeypot foi preenchido, ignora
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:wemersoncontas22@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <motion.section
      id="contact-form"
      className="max-w-xl w-full mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold text-gray-900">Send a Message</h3>
      <p className="text-gray-500">
        Feel free to drop me a line—I’ll get back to you as soon as I can!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Your Name</span>
          <input
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Your Name"
            className="px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Your Email</span>
          <input
            type="email"
            placeholder="jane@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Your Email"
            className="px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">
            Your Message
          </span>
          <textarea
            placeholder="Tell me about your project…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            aria-label="Your Message"
            className="px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </label>
      </form>
    </motion.section>
  );
}
