"use client";

import { motion } from "framer-motion";
import { Globe, Lightbulb, Shield } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-lg text-[#68686c] leading-relaxed">
            Learn more about the Institute of Electrical and Electronics Engineers and how our Student Branch is making an impact at the University of Sri Jayewardenepura.
          </p>
        </motion.div>
      </section>

      {/* What is IEEE Section */}
      <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-black mb-6">What is IEEE?</h2>
            <div className="space-y-4 text-[#68686c] text-lg leading-relaxed">
              <p>
                The Institute of Electrical and Electronics Engineers (IEEE) is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
              </p>
              <p>
                IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted &quot;voice&quot; for engineering, computing, and technology information around the globe.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-ieee-blue/5 border border-ieee-blue/10 p-8 flex items-center justify-center min-h-[300px]"
          >
            {/* Image Placeholder */}
            <div className="text-center">
              <Globe size={48} className="text-ieee-blue mx-auto mb-4" />
              <p className="text-[#68686c] font-medium">Global Network of Engineers</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Our Student Branch Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Our Student Branch</h2>
            <p className="max-w-3xl mx-auto text-lg text-[#68686c] leading-relaxed">
              Established with the vision of promoting engineering excellence, the IEEE Student Branch of the University of Sri Jayewardenepura acts as a central hub for innovative thinkers, future engineers, and tech enthusiasts.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-ieee-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
            <p className="text-[#68686c]">
              To foster technological innovation and excellence for the benefit of humanity by bridging the gap between academia and the professional world.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-ieee-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Our Vision</h3>
            <p className="text-[#68686c]">
              To be the most dynamic and impactful student-led technical organization, empowering our members to lead and shape the future of technology globally.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-ieee-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Core Values</h3>
            <p className="text-[#68686c]">
              Integrity, Teamwork, Excellence, and Inclusivity. We build a community where every idea is respected and every member thrives.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
