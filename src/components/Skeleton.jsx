export function Skeleton({ rows = 4 }) {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg border border-slate-dark/[0.06] p-6">
          <div className="h-4 bg-ice-warm rounded w-1/3 mb-3" />
          <div className="space-y-2">
            <div className="h-3 bg-ice-warm rounded w-full" />
            <div className="h-3 bg-ice-warm rounded w-5/6" />
            <div className="h-3 bg-ice-warm rounded w-4/6" />
          </div>
        </div>
      ))}
    </div>
  );
}
