import { useCallback, useState } from "react";

/**
 * PDF export via Vercel Serverless Function.
 * POST /api/pdfs/artefatos/:tipo → application/pdf stream.
 * Zero dependencia de DOM/canvas — PDF gerado programaticamente no backend.
 */
export function usePdfExport() {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState(null);

  const exportToPdf = useCallback(async ({ tipo, filename }) => {
    if (!tipo) {
      console.error("usePdfExport: tipo is required");
      return;
    }

    setIsExporting(true);
    setError(null);

    try {
      const response = await fetch(`/api/pdfs/artefatos/${tipo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Falha ao gerar PDF (${response.status})`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "iris-export.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message);
      console.error("PDF export failed:", err);
    } finally {
      setIsExporting(false);
    }
  }, []);

  return { exportToPdf, isExporting, error };
}
