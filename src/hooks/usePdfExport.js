import { useCallback } from "react";

export function usePdfExport() {
  const exportToPdf = useCallback(async (elementId, filename = "export.pdf") => {
    const element = document.querySelector(`[data-export="pdf"]#${elementId}`) 
      || document.getElementById(elementId);
    
    if (!element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: [10, 10, 10, 10],
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: { 
        unit: "mm", 
        format: "a4", 
        orientation: "portrait" 
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    await html2pdf().set(opt).from(element).save();
  }, []);

  return { exportToPdf };
}
