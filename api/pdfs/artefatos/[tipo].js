import { registry } from "../../../shared/data/index.js";
import * as renderers from "../../../shared/pdf/renderers/index.js";

const VALID_TIPOS = ["canvas", "mvp", "roadmap", "riscos", "ciclo", "ia", "teoria", "readme"];

export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { tipo } = req.query;

  if (!VALID_TIPOS.includes(tipo)) {
    return res.status(400).json({ error: `Tipo inv\u00e1lido: ${tipo}` });
  }

  const meta = registry[tipo];
  const renderFn = renderers[tipo];

  if (!meta || !renderFn) {
    return res.status(404).json({ error: `Renderer n\u00e3o encontrado: ${tipo}` });
  }

  try {
    const doc = renderFn(meta);

    // Collect PDF buffer
    const chunks = [];
    doc.on("data", (chunk) => chunks.push(chunk));

    await new Promise((resolve, reject) => {
      doc.on("end", resolve);
      doc.on("error", reject);
      doc.end();
    });

    const pdfBuffer = Buffer.concat(chunks);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${meta.filename}"`,
    );
    res.setHeader("Content-Length", pdfBuffer.length);
    res.setHeader("Cache-Control", "no-store");

    return res.status(200).send(pdfBuffer);
  } catch (err) {
    console.error(`PDF generation failed for tipo=${tipo}: ${err.message}`);
    return res.status(500).json({ error: "Falha ao gerar PDF" });
  }
}
