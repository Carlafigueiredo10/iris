import { NavLink, Link } from "react-router-dom";
import {
  X,
  ArrowLeft,
  LayoutGrid,
  StickyNote,
  Target,
  Route,
  AlertTriangle,
  BookOpen,
  FileText,
  Video,
  ExternalLink,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NAV = [
  { label: "Dashboard", path: "/painel", icon: LayoutGrid },

  // Vídeo Pitch
  {
    label: "Vídeo Pitch",
    path: "https://drive.google.com/file/d/1EbwX5x_L7xE733Q2pS8ERj_CXpAdtHcT/view?usp=sharing",
    icon: Video,
    external: true,
  },

  // Parte Teórica
  { label: "Parte Teórica", path: "/teoria", icon: BookOpen },

  // Parte Prática – Artefatos
  { label: "Canvas de Visão de Produto", path: "/canvas", icon: StickyNote },
  { label: "Documento de MVP", path: "/mvp", icon: Target },
  { label: "Roadmap Visual", path: "/roadmap", icon: Route },
  { label: "Matriz de Riscos", path: "/riscos", icon: AlertTriangle },

  // Complementares
  { label: "README", path: "/readme", icon: FileText },
];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "h-screen w-[268px] shrink-0",
          "bg-[#F3F4F6] text-slate-900",
          "border-r border-slate-900/10",
          "fixed top-0 left-0 z-50",
          "md:sticky md:top-0 md:z-auto",
          "flex flex-col",
          "transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Mobile close */}
        <div className="flex justify-end px-5 pt-4 md:hidden">
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Back to landing */}
        <div className="px-4 pt-6 md:pt-8">
          <Link
            to="/"
            onClick={onClose}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Página Principal
          </Link>
        </div>

        {/* Nav */}
        <nav className="px-3 pt-5 flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(15,23,42,0.12)_transparent]">
          <ul className="space-y-1.5 pb-6">
            {NAV.map(({ label, path, icon: Icon, external }) => (
              <li key={path}>
                {external ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className={cn(
                      "group relative flex items-center gap-3",
                      "rounded-xl px-4 py-3",
                      "transition-colors",
                      "border border-blue-400/30",
                      "text-slate-700 hover:text-slate-900"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                        "border border-blue-400/30",
                        "bg-white/55 backdrop-blur-[2px]",
                        "transition",
                        "group-hover:border-blue-400/50 group-hover:bg-white"
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4 opacity-90" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium tracking-tight">
                        {label}
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-[0.26em] text-blue-500">
                        Entrega Final
                      </div>
                    </div>

                    <ExternalLink className="h-3.5 w-3.5 text-blue-400" />
                  </a>
                ) : (
                  <NavLink
                    to={path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        "group relative flex items-center gap-3",
                        "rounded-xl px-4 py-3",
                        "transition-colors",
                        isActive
                          ? "text-slate-900"
                          : "text-slate-700 hover:text-slate-900"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active scan line */}
                        <span
                          className={cn(
                            "absolute left-0 top-2 bottom-2 w-[2px] rounded-full",
                            isActive ? "bg-slate-900" : "bg-transparent"
                          )}
                          aria-hidden="true"
                        />

                        {/* Icon */}
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                            "border border-slate-900/10",
                            "bg-white/55 backdrop-blur-[2px]",
                            "transition",
                            isActive
                              ? "border-slate-900/15 bg-white"
                              : "group-hover:border-slate-900/15 group-hover:bg-white"
                          )}
                          aria-hidden="true"
                        >
                          <Icon className="h-4 w-4 opacity-90" />
                        </span>

                        {/* Label */}
                        <div className="min-w-0">
                          <div className="text-sm font-medium tracking-tight">
                            {label}
                          </div>
                          <div className="mt-0.5 text-[10px] uppercase tracking-[0.26em] text-slate-500">
                            {isActive ? "Ativo" : "Explorar"}
                          </div>
                        </div>

                        {/* Right micro indicator */}
                        <span
                          className={cn(
                            "ml-auto h-1.5 w-1.5 rounded-full",
                            isActive ? "bg-teal-500/70" : "bg-slate-900/10"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </aside>
    </>
  );
}
