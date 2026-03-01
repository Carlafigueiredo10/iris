import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawHighlightBlock,
  drawCard,
  drawBulletList,
  drawFooterNote,
  ensureSpace,
  columnLayout,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
} from "../core.js";
import {
  declaracao,
  declaracaoDescricao,
  riscosIA,
  conformidade,
  governancaPreReq,
  transparencia,
  impactos,
} from "../../data/ia.js";

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Declaracao de Principio
  y = drawHighlightBlock(doc, y, declaracao, {
    color: COLORS.teal,
    fontSize: 8.5,
  });

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(declaracaoDescricao, MARGIN.left + 8, y - 4, {
      width: CONTENT_WIDTH - 16,
      lineGap: 2,
    });
  y = doc.y + 10;

  // ── BLOCO 1: Riscos Especificos do Uso de IA
  y = drawSectionHeader(doc, y, "Riscos Espec\u00edficos do Uso de IA", COLORS.coral);

  const cols3 = columnLayout(3);

  // Measure max height for risk cards
  let maxRiskH = 0;
  for (const risco of riscosIA) {
    const w = cols3[0].width;
    const innerW = w - 24;

    const titleH = doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .heightOfString(risco.titulo, { width: innerW });

    const descH = doc
      .font("Helvetica")
      .fontSize(7)
      .heightOfString(risco.descricao, { width: innerW });

    const mitH = risco.mitigacoes.length * 14 + 14; // items + label
    const h = titleH + descH + mitH + 36;
    if (h > maxRiskH) maxRiskH = h;
  }

  y = ensureSpace(doc, y, maxRiskH);

  for (let i = 0; i < riscosIA.length; i++) {
    const risco = riscosIA[i];
    const col = cols3[i];
    const padding = 8;
    const innerW = col.width - padding * 2;

    // Card border
    doc
      .roundedRect(col.x, y, col.width, maxRiskH, 4)
      .lineWidth(1)
      .strokeColor("#FF6B6B33")
      .stroke();

    // Left accent
    doc.rect(col.x, y + 4, 3, maxRiskH - 8).fill(COLORS.coral);

    let cy = y + padding;

    // Title
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.navy)
      .text(risco.titulo, col.x + padding + 4, cy, { width: innerW - 4 });
    cy = doc.y + 3;

    // Description
    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(risco.descricao, col.x + padding + 4, cy, { width: innerW - 4 });
    cy = doc.y + 6;

    // Mitigation label
    doc
      .font("Helvetica-Bold")
      .fontSize(6)
      .fillColor(COLORS.slateLight)
      .text("MITIGA\u00c7\u00c3O", col.x + padding + 4, cy);
    cy = doc.y + 3;

    // Mitigation items
    for (const m of risco.mitigacoes) {
      doc.circle(col.x + padding + 7, cy + 4, 1.5).fill(COLORS.coral);
      doc
        .font("Helvetica")
        .fontSize(7)
        .fillColor(COLORS.slate)
        .text(m, col.x + padding + 14, cy, { width: innerW - 14 });
      cy = doc.y + 3;
    }
  }

  y += maxRiskH + 10;

  // ── BLOCO 2: Etica, Seguranca e Confiabilidade
  y = drawSectionHeader(doc, y, "\u00c9tica, Seguran\u00e7a e Confiabilidade", COLORS.teal);

  const ethicsBlocks = [
    {
      title: "Conformidade Regulat\u00f3ria",
      desc: "O IRIS opera em conformidade com princ\u00edpios da LGPD, especialmente:",
      items: conformidade,
    },
    {
      title: "Governan\u00e7a como pr\u00e9-condi\u00e7\u00e3o para IA",
      desc: "A evolu\u00e7\u00e3o tecnol\u00f3gica somente ocorre ap\u00f3s valida\u00e7\u00e3o de:",
      items: governancaPreReq,
    },
    {
      title: "Transpar\u00eancia e explicabilidade",
      desc: "Indicadores heur\u00edsticos devem possuir:",
      items: transparencia,
    },
  ];

  // Measure max height for ethics cards
  let maxEthicsH = 0;
  for (const block of ethicsBlocks) {
    const w = cols3[0].width;
    const innerW = w - 24;

    const titleH = doc.font("Helvetica-Bold").fontSize(8).heightOfString(block.title, { width: innerW });
    const descH = doc.font("Helvetica").fontSize(7).heightOfString(block.desc, { width: innerW });
    const itemsH = block.items.length * 14;
    const h = titleH + descH + itemsH + 36;
    if (h > maxEthicsH) maxEthicsH = h;
  }

  y = ensureSpace(doc, y, maxEthicsH);

  for (let i = 0; i < ethicsBlocks.length; i++) {
    const block = ethicsBlocks[i];
    const col = cols3[i];
    const padding = 8;
    const innerW = col.width - padding * 2;

    // Card border
    doc
      .roundedRect(col.x, y, col.width, maxEthicsH, 4)
      .lineWidth(1)
      .strokeColor("#00B4D833")
      .stroke();

    doc.rect(col.x, y + 4, 3, maxEthicsH - 8).fill(COLORS.teal);

    let cy = y + padding;

    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.navy)
      .text(block.title, col.x + padding + 4, cy, { width: innerW - 4 });
    cy = doc.y + 3;

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(block.desc, col.x + padding + 4, cy, { width: innerW - 4 });
    cy = doc.y + 4;

    for (const item of block.items) {
      doc.circle(col.x + padding + 7, cy + 4, 1.5).fill(COLORS.teal);
      doc
        .font("Helvetica")
        .fontSize(7)
        .fillColor(COLORS.slate)
        .text(item, col.x + padding + 14, cy, { width: innerW - 14 });
      cy = doc.y + 3;
    }
  }

  y += maxEthicsH + 10;

  // ── BLOCO 3: Impactos Organizacionais
  y = drawSectionHeader(doc, y, "Impactos Organizacionais", COLORS.purple);

  for (let i = 0; i < impactos.length; i++) {
    const imp = impactos[i];
    y = ensureSpace(doc, y, 35);

    // Number badge
    doc.roundedRect(MARGIN.left, y, 16, 16, 3).fill(COLORS.purple);
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.white)
      .text(String(i + 1), MARGIN.left + 2, y + 3, {
        width: 12,
        align: "center",
      });

    // Title
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.navy)
      .text(imp.titulo, MARGIN.left + 22, y + 2, {
        width: CONTENT_WIDTH - 22,
      });
    y = doc.y + 2;

    // Description
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(imp.descricao, MARGIN.left + 22, y, {
        width: CONTENT_WIDTH - 22,
        lineGap: 2,
      });
    y = doc.y + 8;
  }

  // ── Roadmap connection
  y = drawFooterNote(
    doc,
    y,
    "A evolu\u00e7\u00e3o da intelig\u00eancia anal\u00edtica no IRIS est\u00e1 condicionada aos Gates formais " +
      "definidos no Roadmap estrat\u00e9gico de 18 meses. Isso garante coer\u00eancia entre produto, " +
      "governan\u00e7a e impacto organizacional.",
  );

  // ── Final message
  y = drawFooterNote(
    doc,
    y,
    "O IRIS estrutura sua evolu\u00e7\u00e3o tecnol\u00f3gica sobre governan\u00e7a, \u00e9tica e responsabilidade " +
      "estrat\u00e9gica, garantindo que a intelig\u00eancia artificial seja implementada de forma segura, " +
      "confi\u00e1vel e alinhada aos objetivos organizacionais.",
  );

  addFooters(doc);
  return doc;
}
