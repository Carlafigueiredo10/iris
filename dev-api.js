/**
 * Local dev API server — emulates Vercel Serverless Functions.
 * Runs on port 3001, Vite proxies /api/* to here.
 */
import { createServer } from "http";
import { registry } from "./shared/data/index.js";
import * as renderers from "./shared/pdf/renderers/index.js";

const VALID_TIPOS = ["canvas", "mvp", "roadmap", "riscos", "ciclo", "ia", "teoria", "readme"];
const PORT = 3001;

const server = createServer(async (req, res) => {
  // CORS headers for local dev
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Match /api/pdfs/artefatos/:tipo
  const match = req.url.match(/^\/api\/pdfs\/artefatos\/(\w+)/);
  if (!match) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const tipo = match[1];

  if (!VALID_TIPOS.includes(tipo)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: `Tipo inv\u00e1lido: ${tipo}` }));
    return;
  }

  const meta = registry[tipo];
  const renderFn = renderers[tipo];

  if (!meta || !renderFn) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: `Renderer n\u00e3o encontrado: ${tipo}` }));
    return;
  }

  try {
    const start = Date.now();
    const doc = renderFn(meta);

    const chunks = [];
    doc.on("data", (chunk) => chunks.push(chunk));

    await new Promise((resolve, reject) => {
      doc.on("end", resolve);
      doc.on("error", reject);
      doc.end();
    });

    const pdfBuffer = Buffer.concat(chunks);
    const elapsed = Date.now() - start;

    console.log(`[PDF] ${tipo} → ${pdfBuffer.length} bytes in ${elapsed}ms`);

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${meta.filename}"`,
      "Content-Length": pdfBuffer.length,
      "Cache-Control": "no-store",
    });
    res.end(pdfBuffer);
  } catch (err) {
    console.error(`[PDF] ERRO tipo=${tipo}: ${err.message}`);
    console.error(err.stack);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Falha ao gerar PDF" }));
  }
});

server.listen(PORT, () => {
  console.log(`\n  API dev server rodando em http://localhost:${PORT}`);
  console.log(`  Endpoints disponíveis:`);
  VALID_TIPOS.forEach((t) => {
    console.log(`    POST /api/pdfs/artefatos/${t}`);
  });
  console.log();
});
