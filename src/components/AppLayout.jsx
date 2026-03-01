import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F4F6] relative">
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="flex relative">
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        {/* Mobile top bar */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#F3F4F6] border-b border-slate-900/10 flex items-center px-5 h-14 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg text-slate-900 hover:bg-slate-900/5 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
          <div className="ml-3">
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
              Planning
            </div>
            <div className="text-sm font-medium tracking-tight leading-tight">
              Console
            </div>
          </div>
        </div>

        <main className="flex-1 min-h-screen pt-14 md:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
