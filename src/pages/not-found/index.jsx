import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-extrabold text-navy">404</p>
      <h1 className="text-xl font-semibold text-slate-dark mt-4">
        Página não encontrada
      </h1>
      <p className="text-sm text-slate-light mt-2 max-w-md">
        O endereço que você acessou não existe ou foi removido.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-colors shadow-sm shadow-teal/25"
      >
        <Home size={16} />
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
