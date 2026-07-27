"use client";

import Link from "next/link";
import { Laptop, Network, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#e5f1f8]">
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            IEEE Student Branch
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-ieee-blue mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            University of Sri Jayewardenepura
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg text-[#68686c] mt-2 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Welcome to the IEEE Student Branch at the University of Sri Jayewardenepura. We are dedicated to promoting engineering excellence, innovation, and professional development.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/about"
              className="bg-ieee-blue hover:bg-ieee-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Join Our Community <ArrowRight size={18} />
            </Link>
            <Link
              href="/events"
              className="bg-white text-black px-8 py-3.5 rounded-full font-medium transition-all shadow-sm border border-slate-200 hover:border-ieee-blue hover:text-ieee-blue flex items-center justify-center"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Focus On Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">What We Focus On</h3>
            <p className="text-[#68686c] max-w-2xl mx-auto">
              Empowering students through technical knowledge, leadership opportunities, and community engagement.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-ieee-blue/10 text-ieee-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop size={24} />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Technical Growth</h4>
              <p className="text-[#68686c] leading-relaxed">
                We organize workshops, hackathons, and seminars that equip our members with the latest technical skills and industry insights.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-ieee-blue/10 text-ieee-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network size={24} />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Community Impact</h4>
              <p className="text-[#68686c] leading-relaxed">
                Building a strong network of engineers and innovators. We collaborate to solve real-world problems and uplift our local community.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-ieee-blue/10 text-ieee-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">Leadership</h4>
              <p className="text-[#68686c] leading-relaxed">
                Cultivating the next generation of leaders. We provide opportunities to lead impactful projects and student chapters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Next Event Section */}
      <section className="py-24 px-4 bg-[#e5f1f8]">
        <motion.div
          className="w-full bg-white border border-slate-200 shadow-sm rounded-3xl p-10 md:p-14 flex flex-col items-center text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-ieee-blue text-white rounded-full flex items-center justify-center mb-6 shadow-md">
            <Users size={32} />
          </div>
          <h3 className="text-3xl font-bold text-black mb-4">
            Join Our Next Event
          </h3>
          <p className="text-[#68686c] max-w-2xl text-lg leading-relaxed mb-8">
            Stay connected and participate in our upcoming technical events, chapter activities, and interactive sessions. Don&apos;t miss out on the opportunity to learn and network!
          </p>
          <Link
            href="/events"
            className="bg-ieee-blue text-white hover:bg-ieee-dark px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            View Upcoming Events
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
