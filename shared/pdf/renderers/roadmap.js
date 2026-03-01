import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawBulletList,
  drawFooterNote,
  ensureSpace,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
  A4,
} from "../core.js";
import { quarters, fases, gates } from "../../data/roadmap.js";

const colorMap = {
  teal: COLORS.teal,
  success: COLORS.success,
  purple: COLORS.purple,
  amber: COLORS.amber,
};

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Gantt timeline
  y = drawSectionHeader(doc, y, "Timeline \u2014 Gantt Simplificado", COLORS.slateDark);

  const ganttX = MARGIN.left;
  const ganttW = CONTENT_WIDTH;
  const colW = ganttW / 6;
  const barH = 18;

  // Quarter headers
  for (let i = 0; i < 6; i++) {
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(quarters[i], ganttX + i * colW, y, {
        width: colW,
        align: "center",
      });
  }
  y += 14;

  // Phase bars
  for (const fase of fases) {
    const c = colorMap[fase.color];
    const x = ganttX + (fase.startCol - 1) * colW;
    const w = fase.spanCols * colW - 4;

    doc.roundedRect(x, y, w, barH, 4).fill(c);

    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.white)
      .text(`Fase ${fase.id} \u2014 ${fase.periodo}`, x + 8, y + 5, {
        width: w - 16,
      });

    y += barH + 4;
  }

  // Gate markers
  y += 4;
  for (const gate of gates) {
    const c = colorMap[gate.color];
    const badge = `GATE ${gate.id}`;

    doc.circle(MARGIN.left + 8, y + 5, 3).fill(c);

    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(c)
      .text(badge, MARGIN.left + 16, y + 2);

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(`(${gate.posicao})`, MARGIN.left + 60, y + 2);

    y += 14;
  }
  y += 8;

  // ── Phase detail cards
  for (const fase of fases) {
    const c = colorMap[fase.color];

    y = ensureSpace(doc, y, 90);

    // Card border
    doc
      .roundedRect(MARGIN.left, y, CONTENT_WIDTH, 2, 0)
      .fill(c);

    y += 6;

    // Phase title
    doc.circle(MARGIN.left + 5, y + 5, 4).fill(c);

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.navy)
      .text(
        `Fase ${fase.id} \u2014 ${fase.titulo}`,
        MARGIN.left + 16,
        y + 1,
        { width: CONTENT_WIDTH - 100 },
      );

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(fase.periodo, A4.width - MARGIN.right - 40, y + 2, {
        width: 40,
        align: "right",
      });

    y = doc.y + 6;

    // Objetivo
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text("OBJETIVO", MARGIN.left + 16, y);
    y = doc.y + 2;

    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(fase.objetivo, MARGIN.left + 16, y, {
        width: CONTENT_WIDTH - 16,
        lineGap: 2,
      });
    y = doc.y + 6;

    // Entregaveis
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text("ENTREG\u00c1VEIS PRINCIPAIS", MARGIN.left + 16, y);
    y = doc.y + 3;

    y = drawBulletList(doc, y, fase.entregaveis, {
      dotColor: c,
      indent: 16,
      fontSize: 7.5,
    });

    // Indicador (phase 2 only)
    if (fase.indicador) {
      y = ensureSpace(doc, y, 20);

      doc
        .roundedRect(MARGIN.left + 16, y, CONTENT_WIDTH - 32, 18, 3)
        .fill(COLORS.ice);

      doc
        .font("Helvetica-Bold")
        .fontSize(7)
        .fillColor(COLORS.success)
        .text("Indicador esperado: ", MARGIN.left + 22, y + 5, {
          continued: true,
        });

      doc
        .font("Helvetica")
        .fillColor(COLORS.slate)
        .text(fase.indicador);

      y += 26;
    }

    y += 8;
  }

  // ── Gate detail cards
  for (const gate of gates) {
    const c = colorMap[gate.color];

    y = ensureSpace(doc, y, 50);

    // Gate card
    doc
      .roundedRect(MARGIN.left, y, CONTENT_WIDTH, 2, 0)
      .fill(c);

    y += 6;

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.navy)
      .text(gate.titulo, MARGIN.left + 4, y, {
        width: CONTENT_WIDTH - 80,
      });

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(gate.posicao, A4.width - MARGIN.right - 60, y + 1, {
        width: 60,
        align: "right",
      });

    y = doc.y + 4;

    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(gate.criterio, MARGIN.left + 4, y, {
        width: CONTENT_WIDTH - 8,
        lineGap: 2,
      });

    y = doc.y + 12;
  }

  // ── Valor Executivo por Fase
  y = drawSectionHeader(doc, y, "Valor Executivo por Fase", COLORS.teal);

  for (const fase of fases) {
    const c = colorMap[fase.color];
    y = ensureSpace(doc, y, 20);

    doc.circle(MARGIN.left + 5, y + 4, 3).fill(c);

    doc
      .font("Helvetica-Bold")
      .fontSize(7.5)
      .fillColor(COLORS.slateDark)
      .text(`Fase ${fase.id}: `, MARGIN.left + 14, y + 1, { continued: true });

    doc
      .font("Helvetica")
      .fillColor(COLORS.slate)
      .text(fase.valor, { width: CONTENT_WIDTH - 20 });

    y = doc.y + 4;
  }

  y += 6;

  // ── Footer
  y = drawFooterNote(
    doc,
    y,
    "O Roadmap foi estruturado para entregar valor incremental com risco controlado, " +
      "garantindo que a evolu\u00e7\u00e3o para intelig\u00eancia avan\u00e7ada ocorra apenas sobre uma base " +
      "segura e validada.",
  );

  addFooters(doc);
  return doc;
}
