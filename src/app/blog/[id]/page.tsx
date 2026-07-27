"use client";

import { useState, use } from "react";
import Link from "next/link";
import { User, Calendar, ArrowLeft, MessageSquare, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { mockPosts } from "../page";
import { useAuth } from "@/contexts/AuthContext";

type Comment = {
  id: string;
  author: string;
  text: string;
  date: string;
};

export default function SingleBlogPost({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params conceptually since Next.js 15 requires awaiting params
  const { id } = use(params);
  const { isAdmin } = useAuth();
  
  const post = mockPosts.find(p => p.id === id) || mockPosts[0];

  const [comments, setComments] = useState<Comment[]>([
    { id: "c1", author: "Anonymous", text: "Great read! This was very informative.", date: "Oct 13, 2026" },
    { id: "c2", author: "Sarah Lee", text: "I completely agree. The future of AI is bright.", date: "Oct 14, 2026" }
  ]);

  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: newCommentName.trim() || "Anonymous",
      text: newCommentText,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    setComments([newComment, ...comments]); // Sort latest to oldest
    setNewCommentName("");
    setNewCommentText("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#68686c] hover:text-ieee-blue transition-colors mb-12 font-medium">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm mb-12"
        >
          {/* Cover Image */}
          <div className="h-64 md:h-96 w-full bg-slate-200 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#68686c] mb-6">
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full"><Calendar size={16} />{post.date}</span>
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full"><User size={16} />{post.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-[#68686c] leading-relaxed">
              <p className="text-xl text-[#68686c] mb-8 border-l-4 border-ieee-blue pl-6 italic">
                {post.excerpt}
              </p>
              
              <h3 className="text-2xl font-bold mt-12 mb-4 text-black">The Changing Paradigm</h3>
              <p className="mb-6">The advancement of AI tools has drastically changed how we write, test, and deploy code. By automating repetitive tasks, engineers can now focus on complex architectural decisions and innovative problem-solving.</p>
              <h3 className="text-2xl font-bold mt-12 mb-4 text-black">Conclusion</h3>
              <p>As we look to the future, embracing these tools rather than fearing them will be the key differentiator for successful software developers.</p>
            </div>

            {/* Reactions */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${hasLiked ? "bg-ieee-blue/10 text-ieee-blue" : "bg-slate-100 text-[#68686c] hover:bg-slate-200"}`}
              >
                <ThumbsUp size={20} className={hasLiked ? "fill-ieee-blue" : ""} />
                {likes} Likes
              </button>
              
              {isAdmin && (
                <div className="flex gap-4">
                  <span className="text-sm font-medium text-[#68686c]">Admin Controls: Active</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare size={28} className="text-ieee-blue" />
            <h2 className="text-3xl font-bold text-black">Comments ({comments.length})</h2>
          </div>

          {/* Comment Form */}
          <form className="mb-12 bg-slate-50 p-6 rounded-2xl border border-slate-200" onSubmit={handlePostComment}>
            <h3 className="text-lg font-semibold text-black mb-4">Leave a Reply</h3>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Name (optional - defaults to Anonymous)" 
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ieee-blue text-black"
              />
            </div>
            <div className="mb-4">
              <textarea 
                placeholder="What are your thoughts?" 
                required
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ieee-blue text-black resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-ieee-blue hover:bg-ieee-dark text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List (Latest to Oldest) */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <User size={24} className="text-[#68686c]" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-bold text-black text-lg">{comment.author}</h4>
                    <span className="text-xs text-[#68686c] font-medium">{comment.date}</span>
                  </div>
                  <p className="text-[#68686c] leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
            
            {comments.length === 0 && (
              <p className="text-center text-[#68686c] py-8">No comments yet. Be the first to share your thoughts!</p>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
