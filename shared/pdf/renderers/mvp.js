import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawTable,
  drawBadge,
  drawFooterNote,
  ensureSpace,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
} from "../core.js";
import { blocos, prioridadeInfo } from "../../data/mvp.js";

const colorMap = {
  teal: COLORS.teal,
  purple: COLORS.purple,
  amber: COLORS.amber,
};

const prioridadeColors = {
  P1: { bg: COLORS.teal, text: COLORS.white },
  P2: { bg: COLORS.amber, text: COLORS.white },
  P3: { bg: COLORS.slateLight, text: COLORS.white },
};

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Render each block
  for (const bloco of blocos) {
    const c = colorMap[bloco.color] || COLORS.teal;

    // Block header
    y = ensureSpace(doc, y, 50);

    // Colored dot + title
    doc.circle(MARGIN.left + 5, y + 5, 4).fill(c);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.navy)
      .text(
        `Bloco ${bloco.id} \u2014 ${bloco.titulo}`,
        MARGIN.left + 16,
        y + 1,
        { width: CONTENT_WIDTH - 16 },
      );
    y = doc.y + 4;

    // Contextual note
    if (bloco.nota) {
      doc
        .font("Helvetica-Oblique")
        .fontSize(7)
        .fillColor(COLORS.slateLight)
        .text(bloco.nota, MARGIN.left + 16, y, { width: CONTENT_WIDTH - 16 });
      y = doc.y + 6;
    }

    // Feature table
    const columns = [
      { key: "nome", label: "Funcionalidade", width: 0.3 },
      { key: "prioridade", label: "Prio", width: 0.08, align: "center" },
      { key: "tecnico", label: "Crit\u00e9rio T\u00e9cnico", width: 0.31 },
      { key: "executivo", label: "Crit\u00e9rio Executivo", width: 0.31 },
    ];

    const rows = bloco.funcionalidades.map((f) => ({
      nome: f.nome,
      prioridade: f.prioridade,
      tecnico: f.tecnico,
      executivo: f.executivo,
    }));

    y = drawTable(doc, y, { columns, rows });
    y += 10;
  }

  // ── Priority legend
  y = ensureSpace(doc, y, 30);
  let lx = MARGIN.left;
  for (const [key, info] of Object.entries(prioridadeInfo)) {
    const pc = prioridadeColors[key];
    const badge = drawBadge(doc, lx, y, info.label, pc.bg, pc.text);

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(info.tooltip, lx + badge.width + 4, y + 3, { width: 180 });

    lx += badge.width + 4 + 185;
  }
  y += 24;

  // ── Footer note
  y = drawFooterNote(
    doc,
    y,
    "O MVP do IRIS foi estruturado para garantir governan\u00e7a, consolida\u00e7\u00e3o e gera\u00e7\u00e3o de valor " +
      "estrat\u00e9gico antes da evolu\u00e7\u00e3o para modelos probabil\u00edsticos avan\u00e7ados. A intelig\u00eancia \u00e9 " +
      "constru\u00edda sobre base segura e rastre\u00e1vel.",
  );

  addFooters(doc);
  return doc;
}
