"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Akila Wijethunga",
    position: "Branch Counselor",
    image: "/team/akila.jpg",
    linkedin: "#",
    email: "akila@ieee.org"
  },
  {
    id: 2,
    name: "Dheeshana Alagiyawanna",
    position: "Chairperson",
    image: "/team/dheeshana.jpg",
    linkedin: "#",
    email: "dheeshana@ieee.org"
  },
  {
    id: 3,
    name: "Sakindu Weenath",
    position: "Secretary",
    image: "/team/sakindu.jpg",
    linkedin: "#",
    email: "sakindu@ieee.org"
  },
  {
    id: 4,
    name: "Praveen Tharuka",
    position: "Treasurer",
    image: "/team/praveen.jpg",
    linkedin: "#",
    email: "praveen@ieee.org"
  },
  {
    id: 5,
    name: "Movindu Chandira",
    position: "Vice Chairperson",
    image: "/team/movindu.jpg",
    linkedin: "#",
    email: "movindu@ieee.org"
  },
  {
    id: 6,
    name: "Thiran Ranathunga",
    position: "Webmaster",
    image: "/team/thiran.jpg",
    linkedin: "#",
    email: "thiran@ieee.org"
  },
  {
    id: 7,
    name: "Chamodi Panadare",
    position: "Assistant Secretary",
    image: "/team/chamodi.jpg",
    linkedin: "#",
    email: "chamodi@ieee.org"
  },
  {
    id: 8,
    name: "Dahamci Wijesiriwardana",
    position: "Executive Committee Member",
    image: "/team/dahamci.jpg",
    linkedin: "#",
    email: "dahamci@ieee.org"
  },
  {
    id: 9,
    name: "Akshay Vijayakumar",
    position: "Project Coordinator",
    image: "/team/akshay.jpg",
    linkedin: "#",
    email: "akshay@ieee.org"
  }
];

export default function TeamPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight"
          >
            Meet the Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#68686c] leading-relaxed"
          >
            The dedicated individuals behind the IEEE Student Branch at the University of Sri Jayewardenepura. Our standing committee works tirelessly to bring you the best opportunities.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              variants={itemVariants}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group duration-300"
            >
              {/* Member Image */}
              <div className="aspect-square w-full relative overflow-hidden bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=006699&color=fff&size=500`;
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href={member.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-ieee-blue hover:scale-110 transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${member.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-ieee-blue hover:scale-110 transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-1 group-hover:text-ieee-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#68686c] uppercase tracking-widest">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
