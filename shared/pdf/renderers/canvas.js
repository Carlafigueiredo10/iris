import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawHighlightBlock,
  drawCard,
  drawNumberedList,
  drawFooterNote,
  ensureSpace,
  columnLayout,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
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

/* ── Helper: draw a row of cards side by side ─────────── */

function drawCardRow(doc, y, items, cols) {
  if (!items.length) return y;

  const layout = columnLayout(cols);

  // Measure max card height
  let maxH = 0;
  const heights = items.map((item) => {
    const c = colorMap[item.color] || COLORS.teal;
    const w = layout[0].width;
    const innerW = w - 24;

    const titleH = doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .heightOfString(item.title, { width: innerW });

    let contentH = 0;
    if (typeof item.content === "string") {
      contentH = doc
        .font("Helvetica")
        .fontSize(7.5)
        .heightOfString(item.content, { width: innerW });
    } else if (Array.isArray(item.content)) {
      contentH = item.content.length * 14;
    }

    const h = titleH + contentH + 28;
    if (h > maxH) maxH = h;
    return h;
  });

  y = ensureSpace(doc, y, maxH + 4);

  // Draw cards
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const c = colorMap[item.color] || COLORS.teal;
    const col = layout[i];

    drawCard(doc, y, {
      title: item.title,
      content: item.content,
      color: c,
      width: col.width,
      x: col.x,
    });
  }

  return y + maxH + 8;
}
