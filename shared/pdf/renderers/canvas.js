import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawHighlightBlock,
  drawNumberedList,
  drawFooterNote,
  ensureSpace,
  columnLayout,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
  PAGE_BOTTOM,
} from "../core.js";
import {
  blocks,
  metricas,
} from "../../data/canvas.js";

const colorMap = {
  teal: COLORS.teal,
  purple: COLORS.purple,
  coral: COLORS.coral,
  amber: COLORS.amber,
};

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Proposta de Valor (highlight)
  const highlight = blocks.find((b) => b.type === "highlight");
  if (highlight) {
    y = drawHighlightBlock(doc, y, highlight.content, {
      color: colorMap[highlight.color],
      fontSize: 8,
    });
  }

  // ── Row 1: Segmentos / Problema / Solucao (3 cols)
  const row1 = blocks.filter((b) =>
    ["Segmentos de Clientes", "Problema", "Solu\u00e7\u00e3o \u2014 MVP"].includes(b.title),
  );
  y = drawCardRow(doc, y, row1, 3);

  // ── Row 2: Canais / Relacionamento / Diferencial (3 cols)
  const row2 = blocks.filter((b) =>
    ["Canais", "Relacionamento com Clientes", "Diferencial Estrat\u00e9gico"].includes(b.title),
  );
  y = drawCardRow(doc, y, row2, 3);

  // ── Row 3: Fontes / Custos (2 cols)
  const row3 = blocks.filter((b) =>
    ["Fontes de Receita", "Estrutura de Custos"].includes(b.title),
  );
  y = drawCardRow(doc, y, row3, 2);

  // ── Metricas-Chave
  y = drawSectionHeader(doc, y, "M\u00e9tricas-Chave", COLORS.teal);

  doc
    .font("Helvetica")
    .fontSize(7)
    .fillColor(COLORS.slateLight)
    .text(
      "Objetivo Estrat\u00e9gico: Aumentar LTV por meio de decis\u00f5es baseadas em intelig\u00eancia consolidada",
      MARGIN.left,
      y,
      { width: CONTENT_WIDTH },
    );
  y = doc.y + 6;

  y = drawNumberedList(doc, y, metricas, { color: COLORS.teal });

  // ── Footer
  y = drawFooterNote(
    doc,
    y,
    "Este Canvas se integra ao Documento de MVP e \u00e0 Matriz de Riscos, " +
      "garantindo rastreabilidade entre vis\u00e3o estrat\u00e9gica e execu\u00e7\u00e3o operacional.",
  );

  addFooters(doc);
  return doc;
}

/* ── Helper: measure card height accurately ───────────── */

function measureCardHeight(doc, item, innerW) {
  const padding = 10;

  const titleH = doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .heightOfString(item.title, { width: innerW - 4 });

  let contentH = 0;
  if (typeof item.content === "string") {
    contentH = doc
      .font("Helvetica")
      .fontSize(7.5)
      .heightOfString(item.content, { width: innerW - 14, lineGap: 2 });
  } else if (Array.isArray(item.content)) {
    for (const line of item.content) {
      const lineH = doc
        .font("Helvetica")
        .fontSize(7.5)
        .heightOfString(line, { width: innerW - 14, lineGap: 2 });
      contentH += lineH + 6;
    }
  }

  return titleH + contentH + padding * 2 + 8;
}

/* ── Helper: draw a single card with fixed height ─────── */

function drawFixedCard(doc, x, y, item, width, height, color) {
  const padding = 10;
  const innerW = width - padding * 2;

  // Border
  doc
    .roundedRect(x, y, width, height, 4)
    .lineWidth(1)
    .strokeColor(color)
    .stroke();

  // Left accent
  doc.rect(x, y + 4, 3, height - 8).fill(color);

  // Title
  let textY = y + padding;
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(COLORS.navy)
    .text(item.title, x + padding + 4, textY, { width: innerW - 4 });
  textY = doc.y + 4;

  // Content
  if (typeof item.content === "string") {
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(item.content, x + padding + 4, textY, { width: innerW - 4, lineGap: 2 });
  } else if (Array.isArray(item.content)) {
    for (const line of item.content) {
      doc.circle(x + padding + 7, textY + 4, 1.5).fill(color);
      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(COLORS.slate)
        .text(line, x + padding + 14, textY, { width: innerW - 14, lineGap: 2 });
      textY = doc.y + 3;
    }
  }
}

/* ── Helper: draw a row of cards side by side ─────────── */

function drawCardRow(doc, y, items, cols) {
  if (!items.length) return y;

  const layout = columnLayout(cols, 8);
  const innerW = layout[0].width - 20;

  // Measure max height across all cards in this row
  let maxH = 0;
  for (const item of items) {
    const h = measureCardHeight(doc, item, innerW);
    if (h > maxH) maxH = h;
  }

  y = ensureSpace(doc, y, maxH + 4);

  // Draw cards with uniform height
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const c = colorMap[item.color] || COLORS.teal;
    const col = layout[i];
    drawFixedCard(doc, col.x, y, item, col.width, maxH, c);
  }

  return y + maxH + 8;
}
