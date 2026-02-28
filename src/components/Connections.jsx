import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/config/navigation";

export function Connections({ links = [] }) {
  if (!links.length) return null;

  const items = links
    .map((path) => navItems.find((n) => n.path === path))
    .filter(Boolean);

  return (
    <div className="mt-10 pt-8 border-t border-slate-dark/[0.08]">
      <p className="text-xs font-semibold text-slate-light uppercase tracking-wider mb-4">
        Artefatos relacionados
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-dark/[0.08] bg-white text-sm text-slate hover:text-teal hover:border-teal/30 transition-all duration-200 group"
          >
            <item.icon size={15} className="text-slate-light group-hover:text-teal transition-colors" />
            <span className="font-medium">{item.label}</span>
            <ArrowRight size={13} className="text-slate-light/50 group-hover:text-teal group-hover:translate-x-0.5 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
