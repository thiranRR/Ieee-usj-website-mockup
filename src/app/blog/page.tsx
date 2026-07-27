"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Plus, Edit2, Trash2, ArrowRight, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const mockPosts = [
  {
    id: "1",
    title: "The Future of AI in Software Engineering",
    excerpt: "Explore how artificial intelligence is shaping the landscape of software development and what it means for future engineers.",
    date: "Oct 12, 2026",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    content: "Full content of the blog post goes here... Artificial Intelligence is no longer just a buzzword, it represents a fundamental shift in how we approach computing and problem-solving..."
  },
  {
    id: "2",
    title: "10 Tips for Your First Hackathon",
    excerpt: "Nervous about your first 24-hour coding challenge? Here are ten practical tips to help you survive and thrive.",
    date: "Sep 28, 2026",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    content: "Hackathons can be intimidating for first-timers, but they are also incredibly rewarding. From getting enough sleep beforehand to setting realistic goals..."
  },
  {
    id: "3",
    title: "Demystifying Quantum Computing",
    excerpt: "A beginner's guide to understanding the core concepts of quantum computing without the complex math.",
    date: "Sep 15, 2026",
    author: "Alice Johnson",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80",
    content: "Quantum computing promises to solve certain types of problems exponentially faster than classical computers. But what exactly is a qubit?"
  }
];

export default function BlogPage() {
  const { isAdmin } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-black mb-3 tracking-tight">Our Blog</h1>
            <p className="text-[#68686c] text-lg max-w-2xl">
              Insights, tutorials, and stories from our engineering community.
            </p>
          </div>
          {isAdmin && (
            <button className="bg-ieee-blue hover:bg-ieee-dark text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-colors shadow-sm shrink-0">
              <Plus size={20} /> Add New Post
            </button>
          )}
        </div>

        {/* Blog Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg flex flex-col relative group"
            >
              {/* Admin Controls */}
              {isAdmin && (
                <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white text-[#68686c] hover:text-ieee-blue hover:bg-slate-100 rounded-full shadow-md transition-colors" title="Edit">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 bg-white text-[#68686c] hover:text-red-600 hover:bg-slate-100 rounded-full shadow-md transition-colors" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}

              {/* Cover Image */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-[#68686c] mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-black mb-3 leading-tight group-hover:text-ieee-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-[#68686c] mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-ieee-blue font-semibold hover:text-ieee-dark transition-colors mt-auto w-fit"
                >
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
