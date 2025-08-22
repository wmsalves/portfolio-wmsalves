"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="min-h-[calc(100vh-64px)] w-full max-w-6xl mx-auto px-6 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-purple-600">CONTACT</span> ME
          </h2>
          <p className="text-gray-500 mt-2">
            Let&apos;s talk about opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                I&apos;m looking for opportunities to develop my skills and
                contribute to challenging projects. Get in touch to discuss
                possible collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-purple-700">
                  <Mail />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">dev.wmsalves@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-purple-700">
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
      </div>
    </motion.section>
  );
}
