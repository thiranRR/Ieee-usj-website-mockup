"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdfdfd] text-[#68686c] py-12 border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand/About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-ieee-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
                IE
              </div>
              <span className="font-bold text-black text-lg leading-tight">
                IEEE USJ
              </span>
            </div>
            <p className="text-sm text-[#68686c] mb-6 leading-relaxed">
              Advancing Technology for Humanity. We are dedicated to promoting engineering excellence, innovation, and professional development at the University of Sri Jayewardenepura.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#68686c] hover:text-ieee-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#68686c] hover:text-ieee-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#68686c] hover:text-ieee-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#68686c] hover:text-ieee-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-ieee-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-ieee-blue transition-colors">Upcoming Events</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-ieee-blue transition-colors">Latest News</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-ieee-blue transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ieee-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-black font-semibold mb-4">Connect</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ieee-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  University of Sri Jayewardenepura<br />
                  Gangodawila, Nugegoda<br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <Mail size={18} className="text-ieee-blue shrink-0" />
                <a href="mailto:contact@ieeeusj.example.com" className="hover:text-ieee-blue transition-colors">
                  contact@ieeeusj.example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-black font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-[#68686c] mb-4">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white text-black text-sm rounded-l-md px-4 py-2 w-full border border-slate-300 focus:outline-none focus:border-ieee-blue"
              />
              <button
                type="submit"
                className="bg-ieee-blue hover:bg-ieee-light text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#68686c]">
          <p>&copy; {currentYear} IEEE Student Branch - University of Sri Jayewardenepura. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-ieee-blue transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ieee-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
