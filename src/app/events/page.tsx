"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, MapPin, X, Plus, Edit2, Trash2, Clock } from "lucide-react";

// Mock Data
const mockEvents = [
  {
    id: 1,
    title: "Intro to React & Next.js Workshop",
    date: "Oct 15, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Auditorium - Faculty of Engineering",
    description: "Join us for a beginner-friendly workshop on building modern web applications using React and Next.js. We will cover the basics of components, state, routing, and deploy the application live.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "IEEE Xtreme 24.0 Programming Competition",
    date: "Oct 24, 2026",
    time: "24 Hours",
    location: "Computer Labs 1 & 2",
    description: "The ultimate 24-hour coding challenge. Form a team, solve complex algorithmic problems, and compete against students globally for exclusive IEEE prizes and global recognition.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Women in Robotics Summit",
    date: "Nov 5, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Main Hall",
    description: "A full day dedicated to empowering women in the field of robotics and automation. Featuring keynote speakers from leading tech industries, panel discussions, and a networking lunch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
  }
];

export default function EventsPage() {
  const { isAdmin } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState<typeof mockEvents[0] | null>(null);

  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-black mb-3 tracking-tight">Upcoming Events</h1>
            <p className="text-[#68686c] text-lg max-w-2xl">
              Discover and register for our latest technical workshops, competitions, and networking sessions.
            </p>
          </div>
          {isAdmin && (
            <button className="bg-ieee-blue hover:bg-ieee-dark text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors shadow-sm shrink-0">
              <Plus size={20} /> Add New Event
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg flex flex-col relative group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              {isAdmin && (
                <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                  <button className="p-2 bg-white text-[#68686c] hover:text-ieee-blue hover:bg-slate-100 rounded-full shadow-md transition-colors" title="Edit">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 bg-white text-[#68686c] hover:text-red-600 hover:bg-slate-100 rounded-full shadow-md transition-colors" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}

              {/* Event Image */}
              <div className="h-52 w-full relative overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-0"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-ieee-blue shadow-sm">
                  {event.date}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col gap-2 text-sm text-[#68686c] mb-4">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-ieee-blue" />{event.time}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-ieee-blue" />{event.location}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-ieee-blue transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#68686c] line-clamp-2 mb-6 flex-grow text-sm leading-relaxed">
                  {event.description}
                </p>

                <button
                  className="w-full py-3 bg-slate-50 text-ieee-blue font-semibold rounded-xl group-hover:bg-ieee-blue group-hover:text-white transition-colors border border-slate-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                  }}
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup for Event Details & Registration */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#e5f1f8]/80 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-200 relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition z-10 backdrop-blur-md hidden md:block"
                onClick={closeModal}
              >
                <X size={20} />
              </button>

              {/* Left Side: Image & Info */}
              <div className="w-full md:w-2/5 relative">
                <button
                  className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition z-10 backdrop-blur-md md:hidden"
                  onClick={closeModal}
                >
                  <X size={20} />
                </button>
                <div className="h-64 md:h-full w-full bg-slate-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 right-6 z-10text-white">
                    <div className="bg-ieee-blue text-white w-max px-3 py-1 rounded-md text-xs font-bold mb-3">
                      {selectedEvent.date}
                    </div>
                    <h2 className="text-2xl font-bold text-white shadow-sm leading-tight">{selectedEvent.title}</h2>
                  </div>
                </div>
              </div>

              {/* Right Side: Form & Full Details */}
              <div className="w-full md:w-3/5 p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex flex-col gap-3 text-[#68686c] mb-6">
                  <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Clock size={18} className="text-ieee-blue shrink-0" />
                    <span className="font-medium text-sm">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <MapPin size={18} className="text-ieee-blue shrink-0" />
                    <span className="font-medium text-sm">{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="text-[#68686c] leading-relaxed mb-8 text-sm">
                  {selectedEvent.description}
                </p>

                <div className="border-t border-slate-200 pt-8 mt-4">
                  <h3 className="text-xl font-bold text-black mb-6">Register for this Event</h3>
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Registration successful! (Mock up)"); closeModal(); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#68686c] uppercase tracking-wider mb-2">Full Name</label>
                        <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-slate-50 text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#68686c] uppercase tracking-wider mb-2">Email</label>
                        <input type="email" required className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-slate-50 text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#68686c] uppercase tracking-wider mb-2">University / Organization</label>
                      <input type="text" defaultValue="University of Sri Jayewardenepura" className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-slate-50 text-black focus:ring-2 focus:ring-ieee-blue outline-none transition-shadow" />
                    </div>
                    <button type="submit" className="w-full py-4 mt-2 bg-ieee-blue hover:bg-ieee-dark text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      Confirm Registration
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
