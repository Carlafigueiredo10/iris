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
import { etapas } from "../../data/ciclo.js";

const colorMap = {
  teal: COLORS.teal,
  success: COLORS.success,
  amber: COLORS.amber,
  purple: COLORS.purple,
};

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Horizontal timeline
  y = drawSectionHeader(doc, y, "Ciclo de Vida \u2014 Vis\u00e3o Geral", COLORS.slateDark);

  const circleR = 12;
  const spacing = (CONTENT_WIDTH - circleR * 2 * etapas.length) / (etapas.length + 1);
  const timelineY = y + circleR + 2;

  for (let i = 0; i < etapas.length; i++) {
    const etapa = etapas[i];
    const c = colorMap[etapa.color];
    const cx = MARGIN.left + spacing * (i + 1) + circleR * (2 * i + 1);

    // Circle
    doc.circle(cx, timelineY, circleR).fill(c);

    // Number inside
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.white)
      .text(String(etapa.id), cx - 5, timelineY - 5, {
        width: 10,
        align: "center",
      });

    // Label below
    doc
      .font("Helvetica")
      .fontSize(6)
      .fillColor(COLORS.slateDark)
      .text(etapa.titulo, cx - 35, timelineY + circleR + 4, {
        width: 70,
        align: "center",
        lineGap: 1,
      });

    // Arrow between circles
    if (i < etapas.length - 1) {
      const nextCx = MARGIN.left + spacing * (i + 2) + circleR * (2 * (i + 1) + 1);
      const arrowStartX = cx + circleR + 2;
      const arrowEndX = nextCx - circleR - 2;

      doc
        .moveTo(arrowStartX, timelineY)
        .lineTo(arrowEndX, timelineY)
        .strokeColor(COLORS.slateLight)
        .lineWidth(1)
        .stroke();

      // Arrowhead
      doc
        .moveTo(arrowEndX, timelineY)
        .lineTo(arrowEndX - 4, timelineY - 3)
        .lineTo(arrowEndX - 4, timelineY + 3)
        .fill(COLORS.slateLight);
    }
  }

  y = timelineY + circleR + 24;

  // ── Etapa detail cards
  for (const etapa of etapas) {
    const c = colorMap[etapa.color];

    y = ensureSpace(doc, y, 100);

    // Top accent line
    doc.rect(MARGIN.left, y, CONTENT_WIDTH, 2).fill(c);
    y += 6;

    // Number badge + title
    doc.roundedRect(MARGIN.left, y, 18, 18, 4).fill(c);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.white)
      .text(String(etapa.id), MARGIN.left + 2, y + 4, {
        width: 14,
        align: "center",
      });

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.navy)
      .text(etapa.titulo, MARGIN.left + 24, y + 3, {
        width: CONTENT_WIDTH - 120,
      });

    // Connection label
    doc
      .font("Helvetica")
      .fontSize(6)
      .fillColor(COLORS.slateLight)
      .text(etapa.conexao, A4.width - MARGIN.right - 180, y + 5, {
        width: 180,
        align: "right",
      });

    y += 22;

    // Special note badge (etapa 4)
    if (etapa.nota) {
      doc
        .roundedRect(MARGIN.left + 24, y, 180, 14, 3)
        .fill(COLORS.ice);

      doc
        .font("Helvetica-Bold")
        .fontSize(6.5)
        .fillColor(c)
        .text(etapa.nota, MARGIN.left + 30, y + 3, { width: 170 });

      y += 20;
    }

    // 3-column layout: Objetivo / Criterios / Resultado
    const colW = (CONTENT_WIDTH - 24 - 20) / 3;
    const colStart = MARGIN.left + 24;
    const columns = [
      { label: "OBJETIVO", text: etapa.objetivo },
      { label: "CRIT\u00c9RIOS DE AVAN\u00c7O", list: etapa.criterios },
      { label: "RESULTADO ESPERADO", text: etapa.resultado },
    ];

    let colMaxY = y;

    for (let ci = 0; ci < 3; ci++) {
      const col = columns[ci];
      const cx = colStart + ci * (colW + 10);
      let cy = y;

      // Column label
      doc
        .font("Helvetica-Bold")
        .fontSize(6)
        .fillColor(COLORS.slateLight)
        .text(col.label, cx, cy, { width: colW });
      cy = doc.y + 3;

      if (col.text) {
        doc
          .font("Helvetica")
          .fontSize(7.5)
          .fillColor(COLORS.slate)
          .text(col.text, cx, cy, { width: colW, lineGap: 2 });
        cy = doc.y;
      }

      if (col.list) {
        for (const item of col.list) {
          doc.circle(cx + 3, cy + 4, 1.5).fill(c);
          doc
            .font("Helvetica")
            .fontSize(7.5)
            .fillColor(COLORS.slate)
            .text(item, cx + 10, cy, { width: colW - 10, lineGap: 2 });
          cy = doc.y + 3;
        }
      }

      if (cy > colMaxY) colMaxY = cy;
    }

    y = colMaxY + 12;
  }

  // ── Footer
  y = drawFooterNote(
    doc,
    y,
    "O ciclo de vida do IRIS est\u00e1 alinhado ao Roadmap estrat\u00e9gico de 18 meses, " +
      "garantindo coer\u00eancia entre evolu\u00e7\u00e3o t\u00e9cnica, gera\u00e7\u00e3o de valor e controle de risco.",
  );

  addFooters(doc);
  return doc;
}
