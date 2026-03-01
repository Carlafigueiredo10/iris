import PDFDocument from "pdfkit";
import { LOGO_PNG_BASE64 } from "./logo.js";

/* ── Design tokens (IRIS) ──────────────────────────────── */

export const COLORS = {
  navy: "#0A192F",
  navyLight: "#112240",
  teal: "#00B4D8",
  tealDark: "#0096B4",
  coral: "#FF6B6B",
  amber: "#FFC107",
  purple: "#7B2CBF",
  success: "#2DCE89",
  slate: "#495057",
  slateDark: "#343A40",
  slateLight: "#868E96",
  ice: "#F8F9FA",
  iceWarm: "#F1F3F5",
  white: "#FFFFFF",
};

/* ── A4 layout constants (points, 72pt = 1in) ─────────── */

export const A4 = { width: 595.28, height: 841.89 };
export const MARGIN = { top: 50, bottom: 60, left: 50, right: 50 };
export const CONTENT_WIDTH = A4.width - MARGIN.left - MARGIN.right;
export const CONTENT_START_Y = MARGIN.top + 60; // after header
export const PAGE_BOTTOM = A4.height - MARGIN.bottom;

/* ── Document factory ──────────────────────────────────── */

export function createDocument(meta = {}) {
  const doc = new PDFDocument({
    size: "A4",
    autoFirstPage: false,
    bufferPages: true,
    margins: MARGIN,
    info: {
      Title: meta.title || "IRIS Document",
      Author: "IRIS Platform",
      Subject: meta.subtitle || "",
      Creator: "IRIS PDF Generator v1",
      Producer: "PDFKit",
    },
  });
  return doc;
}

/* ── Logo buffer (from base64) ─────────────────────────── */

let _logoBuffer = null;
function getLogoBuffer() {
  if (!_logoBuffer) {
    _logoBuffer = Buffer.from(LOGO_PNG_BASE64, "base64");
  }
  return _logoBuffer;
}

/* ── Header ────────────────────────────────────────────── */

export function addHeader(doc, { title, subtitle }) {
  const date = new Date().toLocaleDateString("pt-BR");
  const y = MARGIN.top;

  // Background bar
  doc
    .roundedRect(MARGIN.left, y, CONTENT_WIDTH, 44, 4)
    .fill(COLORS.ice);

  // Teal bottom accent line
  doc
    .rect(MARGIN.left, y + 42, CONTENT_WIDTH, 2)
    .fill(COLORS.teal);

  // Title text
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(COLORS.navy)
    .text(title, MARGIN.left + 12, y + 10, {
      width: CONTENT_WIDTH - 100,
    });

  // Subtitle
  if (subtitle) {
    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(subtitle, MARGIN.left + 12, y + 25, {
        width: CONTENT_WIDTH - 100,
      });
  }

  // Date (right-aligned)
  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slateLight)
    .text(date, A4.width - MARGIN.right - 70, y + 10, {
      width: 60,
      align: "right",
    });

  return CONTENT_START_Y;
}

/* ── Footer (stamped on all pages after content is done) ─ */

export function addFooters(doc) {
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);

    // Thin separator line
    doc
      .moveTo(MARGIN.left, A4.height - 40)
      .lineTo(A4.width - MARGIN.right, A4.height - 40)
      .strokeColor(COLORS.ice)
      .lineWidth(0.5)
      .stroke();

    doc.font("Helvetica").fontSize(7).fillColor(COLORS.slateLight);

    doc.text(
      "IRIS \u2014 Documento confidencial",
      MARGIN.left,
      A4.height - 32,
    );

    doc.text(
      `P\u00e1gina ${i + 1} de ${range.count}`,
      A4.width - MARGIN.right - 80,
      A4.height - 32,
      { width: 80, align: "right" },
    );
  }
}

/* ── Page management ───────────────────────────────────── */

export function addNewPage(doc) {
  doc.addPage();
  return MARGIN.top + 10;
}

export function ensureSpace(doc, y, needed) {
  if (y + needed > PAGE_BOTTOM) {
    return addNewPage(doc);
  }
  return y;
}

/* ── Section header ────────────────────────────────────── */

export function drawSectionHeader(doc, y, title, color = COLORS.slateDark) {
  y = ensureSpace(doc, y, 30);

  // Small colored circle
  doc.circle(MARGIN.left + 5, y + 5, 3).fill(color);

  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(COLORS.slateDark)
    .text(title.toUpperCase(), MARGIN.left + 14, y + 1, {
      width: CONTENT_WIDTH - 14,
      characterSpacing: 0.8,
    });

  return y + 20;
}

/* ── Bulleted list ─────────────────────────────────────── */

export function drawBulletList(doc, y, items, options = {}) {
  const { dotColor = COLORS.teal, indent = 0, fontSize = 8 } = options;
  const x = MARGIN.left + indent;

  for (const item of items) {
    y = ensureSpace(doc, y, 16);

    // Bullet dot
    doc.circle(x + 3, y + 4, 1.5).fill(dotColor);

    // Text
    doc
      .font("Helvetica")
      .fontSize(fontSize)
      .fillColor(COLORS.slate)
      .text(item, x + 10, y, {
        width: CONTENT_WIDTH - indent - 10,
        lineGap: 2,
      });

    y = doc.y + 4;
  }

  return y;
}

/* ── Numbered list ─────────────────────────────────────── */

export function drawNumberedList(doc, y, items, options = {}) {
  const { color = COLORS.teal, indent = 0 } = options;
  const x = MARGIN.left + indent;

  for (let i = 0; i < items.length; i++) {
    y = ensureSpace(doc, y, 18);

    // Number badge
    doc.roundedRect(x, y - 1, 14, 14, 3).fill(color);
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.white)
      .text(String(i + 1), x + 1, y + 2, { width: 12, align: "center" });

    // Text
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(COLORS.slate)
      .text(items[i], x + 20, y, {
        width: CONTENT_WIDTH - indent - 20,
        lineGap: 2,
      });

    y = doc.y + 5;
  }

  return y;
}

/* ── Table ─────────────────────────────────────────────── */

/**
 * drawTable(doc, y, { columns, rows, options })
 *
 * columns: [{ key, label, width (fraction 0-1), align? }]
 * rows: [{ [key]: value }]
 * options: { headerBg, rowHeight, fontSize, borderColor, stripeBg, leftBorderKey, leftBorderColorFn }
 */
export function drawTable(doc, y, { columns, rows, options = {} }) {
  const {
    headerBg = COLORS.ice,
    rowHeight = 22,
    fontSize = 7.5,
    borderColor = "#EEEEEE",
    stripeBg = "#FAFBFC",
    leftBorderKey = null,
    leftBorderColorFn = null,
  } = options;

  const colWidths = columns.map((c) => c.width * CONTENT_WIDTH);
  const startX = MARGIN.left;

  // ── Header row
  y = ensureSpace(doc, y, rowHeight + 5);
  doc.rect(startX, y, CONTENT_WIDTH, rowHeight).fill(headerBg);

  let x = startX;
  for (let i = 0; i < columns.length; i++) {
    doc
      .font("Helvetica-Bold")
      .fontSize(6.5)
      .fillColor(COLORS.slateLight)
      .text(columns[i].label.toUpperCase(), x + 5, y + 7, {
        width: colWidths[i] - 10,
        align: columns[i].align || "left",
      });
    x += colWidths[i];
  }
  y += rowHeight;

  // ── Data rows
  for (let r = 0; r < rows.length; r++) {
    // Measure row height dynamically
    const measuredHeight = measureRowHeight(doc, columns, rows[r], colWidths, fontSize);
    const actualHeight = Math.max(rowHeight, measuredHeight);

    y = ensureSpace(doc, y, actualHeight + 2);

    // Stripe background
    if (r % 2 === 0) {
      doc.rect(startX, y, CONTENT_WIDTH, actualHeight).fill(stripeBg);
    }

    // Left border indicator
    if (leftBorderKey && leftBorderColorFn) {
      const lbColor = leftBorderColorFn(rows[r]);
      if (lbColor) {
        doc.rect(startX, y, 3, actualHeight).fill(lbColor);
      }
    }

    // Cell content
    x = startX;
    for (let i = 0; i < columns.length; i++) {
      const val = String(rows[r][columns[i].key] || "");
      doc
        .font("Helvetica")
        .fontSize(fontSize)
        .fillColor(COLORS.slate)
        .text(val, x + 5, y + 6, {
          width: colWidths[i] - 10,
          align: columns[i].align || "left",
        });
      x += colWidths[i];
    }

    // Bottom border
    doc
      .moveTo(startX, y + actualHeight)
      .lineTo(startX + CONTENT_WIDTH, y + actualHeight)
      .strokeColor(borderColor)
      .lineWidth(0.5)
      .stroke();

    y += actualHeight;
  }

  return y;
}

function measureRowHeight(doc, columns, row, colWidths, fontSize) {
  let maxH = 18;
  for (let i = 0; i < columns.length; i++) {
    const val = String(row[columns[i].key] || "");
    const h = doc
      .font("Helvetica")
      .fontSize(fontSize)
      .heightOfString(val, { width: colWidths[i] - 10 });
    if (h + 12 > maxH) maxH = h + 12;
  }
  return maxH;
}

/* ── Card block (title + content in a bordered rect) ──── */

export function drawCard(doc, y, { title, content, color = COLORS.teal, width = CONTENT_WIDTH, x: cardX }) {
  const x = cardX ?? MARGIN.left;
  const padding = 10;
  const innerWidth = width - padding * 2;

  // Measure content height
  const titleH = doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .heightOfString(title, { width: innerWidth });

  let contentH = 0;
  if (typeof content === "string") {
    contentH = doc
      .font("Helvetica")
      .fontSize(7.5)
      .heightOfString(content, { width: innerWidth });
  } else if (Array.isArray(content)) {
    contentH = content.length * 14;
  }

  const totalH = titleH + contentH + padding * 2 + 8;
  y = ensureSpace(doc, y, totalH);

  // Border
  doc
    .roundedRect(x, y, width, totalH, 4)
    .lineWidth(1)
    .strokeColor(hexWithAlpha(color, 0.2))
    .stroke();

  // Left accent
  doc.rect(x, y + 4, 3, totalH - 8).fill(color);

  // Title
  let textY = y + padding;
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(COLORS.navy)
    .text(title, x + padding + 4, textY, { width: innerWidth - 4 });
  textY = doc.y + 4;

  // Content
  if (typeof content === "string") {
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(content, x + padding + 4, textY, { width: innerWidth - 4, lineGap: 2 });
    textY = doc.y;
  } else if (Array.isArray(content)) {
    for (const item of content) {
      doc.circle(x + padding + 7, textY + 4, 1.5).fill(color);
      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(COLORS.slate)
        .text(item, x + padding + 14, textY, { width: innerWidth - 14, lineGap: 2 });
      textY = doc.y + 3;
    }
  }

  return y + totalH + 6;
}

/* ── Highlight block (full-width, colored border) ─────── */

export function drawHighlightBlock(doc, y, text, options = {}) {
  const { color = COLORS.teal, fontSize = 8 } = options;
  const padding = 12;
  const innerW = CONTENT_WIDTH - padding * 2;

  const h = doc
    .font("Helvetica-Bold")
    .fontSize(fontSize)
    .heightOfString(text, { width: innerW - 8 });

  const totalH = h + padding * 2;
  y = ensureSpace(doc, y, totalH);

  // Background
  doc
    .roundedRect(MARGIN.left, y, CONTENT_WIDTH, totalH, 4)
    .fill(hexWithAlpha(color, 0.04));

  // Border
  doc
    .roundedRect(MARGIN.left, y, CONTENT_WIDTH, totalH, 4)
    .lineWidth(1.5)
    .strokeColor(hexWithAlpha(color, 0.3))
    .stroke();

  // Text
  doc
    .font("Helvetica-Bold")
    .fontSize(fontSize)
    .fillColor(COLORS.navy)
    .text(text, MARGIN.left + padding + 4, y + padding, {
      width: innerW - 8,
      lineGap: 3,
    });

  return y + totalH + 8;
}

/* ── Footer note (centered, ice-warm bg) ───────────────── */

export function drawFooterNote(doc, y, text) {
  const padding = 10;
  const innerW = CONTENT_WIDTH - padding * 2;

  const h = doc
    .font("Helvetica")
    .fontSize(7.5)
    .heightOfString(text, { width: innerW });

  const totalH = h + padding * 2;
  y = ensureSpace(doc, y, totalH);

  doc
    .roundedRect(MARGIN.left, y, CONTENT_WIDTH, totalH, 4)
    .fill(COLORS.iceWarm);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(text, MARGIN.left + padding, y + padding, {
      width: innerW,
      align: "center",
      lineGap: 2,
    });

  return y + totalH + 8;
}

/* ── Badge (small colored label) ───────────────────────── */

export function drawBadge(doc, x, y, label, bgColor, textColor = COLORS.white) {
  const w = doc.font("Helvetica-Bold").fontSize(6.5).widthOfString(label) + 10;
  doc.roundedRect(x, y, w, 13, 3).fill(bgColor);
  doc
    .font("Helvetica-Bold")
    .fontSize(6.5)
    .fillColor(textColor)
    .text(label, x + 5, y + 3, { width: w - 10 });
  return { width: w, height: 13 };
}

/* ── Multi-column layout helper ────────────────────────── */

export function columnLayout(count, gap = 10) {
  const totalGap = gap * (count - 1);
  const colW = (CONTENT_WIDTH - totalGap) / count;
  return Array.from({ length: count }, (_, i) => ({
    x: MARGIN.left + i * (colW + gap),
    width: colW,
  }));
}

/* ── Utility ───────────────────────────────────────────── */

function hexWithAlpha(hex, alpha) {
  // PDFKit doesn't support alpha in hex — we use opacity via fill/stroke
  // Return the hex as-is; caller should use doc.opacity() if needed
  return hex;
}
