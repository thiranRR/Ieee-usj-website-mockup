"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { isAdmin, loginAsAdmin, logout } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    loginAsAdmin();
    router.push("/events");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white border border-slate-200 p-8 rounded-2xl w-full max-w-sm text-center shadow-sm">
        <div className="w-16 h-16 bg-ieee-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold">
          ADMIN
        </div>
        <h1 className="text-2xl font-bold text-black mb-6">Admin Access (Mock)</h1>
        
        {isAdmin ? (
          <div>
            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 text-sm font-medium">
              You are currently logged in as an Admin. Admin controls will now appear on Events and Blog pages.
            </div>
            <button onClick={handleLogout} className="w-full bg-slate-200 hover:bg-slate-300 text-black rounded-lg py-3 font-medium transition-colors">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p className="text-[#68686c] mb-6 text-sm">
              Click below to simulate logging in as an admin. This will enable Edit/Delete views across the site for Phase 1.
            </p>
            <button onClick={handleLogin} className="w-full bg-ieee-blue hover:bg-ieee-dark transition-colors text-white rounded-lg py-3 font-medium shadow-sm">
              Simulate Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
