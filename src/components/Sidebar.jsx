import { NavLink } from "react-router-dom";
import { navItems } from "@/config/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-navy-deep flex flex-col z-50 transition-all duration-300 ${
        collapsed ? "w-[68px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-white/[0.06]">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
          <span className="text-white font-extrabold text-sm tracking-tight">IR</span>
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">IRIS</h1>
            <p className="text-slate-light text-[10px] leading-tight mt-0.5 whitespace-nowrap">
              Inteligência de Relacionamento
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                    isActive
                      ? "bg-teal/15 text-teal"
                      : "text-slate-light hover:text-white hover:bg-white/[0.04]"
                  }`
                }
              >
                <item.icon size={18} className="flex-shrink-0" />
                {!collapsed && (
                  <span className="truncate font-medium">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-3 mb-3 p-2 rounded-lg text-slate-light hover:text-white hover:bg-white/[0.04] transition-colors"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/[0.06]">
        {!collapsed && (
          <p className="text-[11px] text-slate-light/50 font-mono">IRIS v1.0</p>
        )}
      </div>
    </aside>
  );
}
