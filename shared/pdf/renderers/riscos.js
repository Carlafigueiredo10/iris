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
import {
  riscos,
  getSeveridade,
  severidadeColors,
  legendaItems,
} from "../../data/riscos.js";

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Section title
  y = drawSectionHeader(doc, y, "7 Riscos Identificados", COLORS.coral);

  // ── Risk table
  const columns = [
    { key: "risco", label: "Risco", width: 0.22 },
    { key: "probabilidade", label: "Probabilidade", width: 0.1, align: "center" },
    { key: "impacto", label: "Impacto", width: 0.1, align: "center" },
    { key: "mitigacao", label: "Plano de Mitiga\u00e7\u00e3o", width: 0.34 },
    { key: "responsavel", label: "Respons\u00e1vel", width: 0.14 },
  ];

  // Build display rows (probabilidade/impacto kept as text for table)
  const rows = riscos.map((r) => ({
    risco: r.risco,
    probabilidade: r.probabilidade,
    impacto: r.impacto,
    mitigacao: r.mitigacao,
    responsavel: r.responsavel,
  }));

  y = drawTable(doc, y, {
    columns,
    rows,
    options: {
      leftBorderKey: "impacto",
      leftBorderColorFn: (row) => {
        const sev = getSeveridade(row.impacto, row.probabilidade);
        return severidadeColors[sev]?.border || COLORS.slateLight;
      },
    },
  });

  y += 12;

  // ── Legend
  y = ensureSpace(doc, y, 30);
  const legendX = MARGIN.left;
  let lx = legendX;

  for (const item of legendaItems) {
    const colors = severidadeColors[item.level];

    // Badge
    const badge = drawBadge(doc, lx, y, item.level, colors.bg, colors.text);

    // Description text
    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(item.desc, lx + badge.width + 4, y + 3, { width: 160 });

    lx += badge.width + 4 + 165;
  }

  y += 24;

  // ── Synthesis footer
  y = drawFooterNote(
    doc,
    y,
    "O gerenciamento de riscos do IRIS est\u00e1 estruturado para proteger a organiza\u00e7\u00e3o em tr\u00eas " +
      "dimens\u00f5es: regulat\u00f3ria, t\u00e9cnica e estrat\u00e9gica. A evolu\u00e7\u00e3o para modelos avan\u00e7ados de IA " +
      "somente ocorrer\u00e1 ap\u00f3s consolida\u00e7\u00e3o segura da base e valida\u00e7\u00e3o executiva.",
  );

  // ── Stamp footers and return
  addFooters(doc);
  return doc;
}
