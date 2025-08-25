"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="
        w-full scroll-mt-24 max-w-6xl mx-auto
        min-h-[calc(100svh-56px)] lg:min-h-screen
        px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-purple-600">CONTACT</span>{" "}
          <span className="text-gray-900">ME</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Let&apos;s talk about opportunities and collaborations
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
        {/* Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m looking for opportunities to develop my skills and
              contribute to challenging projects. Get in touch to discuss
              possible collaborations.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-200 transition">
                <Mail />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">dev.wmsalves@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-200 transition">
                <MapPin />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">Belo Horizonte, Brazil</p>
              </div>
            </div>
          </div>

          <ContactSocials />
        </motion.div>

        {/* Form */}
        <ContactForm />
      </div>
    </motion.section>
  );
}
