import { Download, ExternalLink } from "lucide-react";

export function PageHeader({ title, subtitle, action, onAction }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-navy">{title}</h1>
        {subtitle && (
          <p className="text-slate-light text-sm mt-1.5 max-w-2xl">{subtitle}</p>
        )}
      </div>
      {action && (
        <button
          onClick={onAction}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
            action.variant === "coral"
              ? "bg-coral text-white hover:bg-coral/90 shadow-sm shadow-coral/25"
              : "bg-teal text-white hover:bg-teal-dark shadow-sm shadow-teal/25"
          }`}
        >
          {action.variant === "coral" && action.label.includes("PDF") && <Download size={16} />}
          {action.variant === "coral" && action.label.includes("Pitch") && <ExternalLink size={16} />}
          {action.label}
        </button>
      )}
    </div>
  );
}
