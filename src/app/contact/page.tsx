"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (Mock Action)");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#68686c] leading-relaxed"
          >
            We'd love to hear from you. Have a question about events, memberships, or collaborations? Reach out below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          
          {/* Contact Information & Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-ieee-blue text-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-ieee-light mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Our Location</h4>
                    <p className="text-ieee-light/90 leading-relaxed">
                      Faculty of Engineering,<br />
                      University of Sri Jayewardenepura,<br />
                      Gangodawila, Nugegoda, Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-ieee-light mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Address</h4>
                    <a href="mailto:contact@ieeeusj.example.com" className="text-ieee-light/90 hover:text-white transition-colors">
                      contact@ieeeusj.example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-ieee-light mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone Number</h4>
                    <a href="tel:+94771234567" className="text-ieee-light/90 hover:text-white transition-colors">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-ieee-light mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Working Hours</h4>
                    <p className="text-ieee-light/90">
                      Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-black/20 rounded-2xl h-48 w-full border border-white/10 flex items-center justify-center p-4 text-center">
              <p className="text-white/80 font-medium text-sm leading-relaxed">
                [ Google Maps Integration Placeholder ]<br/>
                <span className="text-xs text-white/50 block mt-2">Replace with iframe embed code in Phase 2</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#68686c] mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#68686c] mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#68686c] mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#68686c] mb-2">Subject</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="How can we help you?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#68686c] mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-ieee-blue text-white hover:bg-ieee-dark font-bold rounded-xl flex justify-center items-center gap-2 transition-all shadow-md hover:-translate-y-0.5">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
