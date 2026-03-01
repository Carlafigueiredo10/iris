import {
  createDocument,
  addNewPage,
  addHeader,
  addFooters,
  drawSectionHeader,
  drawHighlightBlock,
  drawCard,
  drawBulletList,
  drawNumberedList,
  drawFooterNote,
  ensureSpace,
  columnLayout,
  COLORS,
  MARGIN,
  CONTENT_WIDTH,
} from "../core.js";
import {
  descricaoProduto,
  modeloImplantacao,
  publicoPrimario,
  publicoSecundario,
  problemaVisao,
  propostaValor,
  diferencialCentral,
  objetivoMvp,
  hipoteseCritica,
  hipoteseNota,
  funcionalidadesMvp,
  funcionalidadesNota,
  principiosPriorizacao,
  fasesRoadmap,
  cicloEtapas,
  riscosOperacionais,
  riscosNota,
  estrategiasMitigacao,
  principiosLgpd,
  iaAbordagem,
  iaPrincipio,
  riscosIA,
  mitigacoesIA,
  conclusao,
} from "../../data/teoria.js";

const colorMap = {
  teal: COLORS.teal,
  coral: COLORS.coral,
  purple: COLORS.purple,
  amber: COLORS.amber,
  success: COLORS.success,
};

/* ── Helper: section number badge ────────────────────── */

function drawSectionNumber(doc, x, y, label, color) {
  doc.roundedRect(x, y, 22, 16, 3).fill(color);
  doc
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .fillColor(COLORS.white)
    .text(label, x + 1, y + 4, { width: 20, align: "center" });
}

/* ── Helper: titled text block (label + paragraph) ───── */

function drawLabeledText(doc, y, label, text, options = {}) {
  const { indent = 0 } = options;
  const x = MARGIN.left + indent;

  doc
    .font("Helvetica-Bold")
    .fontSize(7)
    .fillColor(COLORS.slateLight)
    .text(label.toUpperCase(), x, y, { characterSpacing: 0.5 });
  y = doc.y + 2;

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(text, x, y, { width: CONTENT_WIDTH - indent, lineGap: 2 });
  return doc.y + 6;
}

/* ── Main render ─────────────────────────────────────── */

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ════════════════════════════════════════════════════
  // 1.1 VISÃO DE PRODUTO
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 30);
  drawSectionNumber(doc, MARGIN.left, y, "1.1", COLORS.teal);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Vis\u00e3o de Produto", MARGIN.left + 28, y + 3);
  y = doc.y + 10;

  // Descrição do Produto
  y = drawSectionHeader(doc, y, "Descri\u00e7\u00e3o do Produto Digital", COLORS.teal);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(descricaoProduto, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 4;

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(modeloImplantacao, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 10;

  // Público-Alvo e Problema (3 cards)
  y = drawSectionHeader(doc, y, "P\u00fablico-Alvo e Problema Atendido", COLORS.purple);

  const cols3 = columnLayout(3);

  // Measure heights
  let maxPubH = 0;
  const pubCards = [
    { title: "P\u00fablico Prim\u00e1rio", content: publicoPrimario, color: COLORS.purple },
    { title: "P\u00fablico Secund\u00e1rio", content: publicoSecundario, color: COLORS.purple },
    { title: "Problema", content: problemaVisao, color: COLORS.coral },
  ];
  for (const card of pubCards) {
    const innerW = cols3[0].width - 24;
    const tH = doc.font("Helvetica-Bold").fontSize(8).heightOfString(card.title, { width: innerW });
    const cH = doc.font("Helvetica").fontSize(7.5).heightOfString(card.content, { width: innerW });
    const h = tH + cH + 28;
    if (h > maxPubH) maxPubH = h;
  }

  y = ensureSpace(doc, y, maxPubH);
  for (let i = 0; i < pubCards.length; i++) {
    drawCard(doc, y, {
      title: pubCards[i].title,
      content: pubCards[i].content,
      color: pubCards[i].color,
      width: cols3[i].width,
      x: cols3[i].x,
    });
  }
  y += maxPubH + 8;

  // Proposta de Valor
  y = drawSectionHeader(doc, y, "Proposta de Valor", COLORS.teal);

  y = drawHighlightBlock(doc, y, propostaValor, { color: COLORS.teal, fontSize: 8 });

  doc
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .fillColor(COLORS.navy)
    .text(diferencialCentral, MARGIN.left + 8, y - 4, { width: CONTENT_WIDTH - 16 });
  y = doc.y + 12;

  // ════════════════════════════════════════════════════
  // 1.2 DEFINIÇÃO DO MVP
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 40);
  drawSectionNumber(doc, MARGIN.left, y, "1.2", COLORS.coral);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Defini\u00e7\u00e3o do MVP", MARGIN.left + 28, y + 3);
  y = doc.y + 10;

  // Objetivo
  y = drawSectionHeader(doc, y, "Objetivo do MVP", COLORS.coral);
  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(objetivoMvp, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 10;

  // Hipótese Crítica
  y = drawSectionHeader(doc, y, "Hip\u00f3tese Cr\u00edtica do MVP", COLORS.coral);
  y = drawHighlightBlock(doc, y, hipoteseCritica, { color: COLORS.coral, fontSize: 8 });

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slateLight)
    .text(hipoteseNota, MARGIN.left + 8, y - 4, { width: CONTENT_WIDTH - 16, lineGap: 2 });
  y = doc.y + 10;

  // Funcionalidades Essenciais
  y = drawSectionHeader(doc, y, "Funcionalidades Essenciais", COLORS.teal);
  y = drawBulletList(doc, y, funcionalidadesMvp, { dotColor: COLORS.teal });

  doc
    .font("Helvetica")
    .fontSize(7)
    .fillColor(COLORS.slateLight)
    .text(funcionalidadesNota, MARGIN.left + 10, y, { width: CONTENT_WIDTH - 20, lineGap: 2 });
  y = doc.y + 10;

  // Justificativa de Priorização
  y = drawSectionHeader(doc, y, "Justificativa de Prioriza\u00e7\u00e3o", COLORS.purple);
  y = drawNumberedList(
    doc,
    y,
    principiosPriorizacao.map((p) => `${p.titulo} \u2014 ${p.desc}`),
    { color: COLORS.purple },
  );
  y += 4;

  // ════════════════════════════════════════════════════
  // 1.3 ROADMAP DO PRODUTO
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 40);
  drawSectionNumber(doc, MARGIN.left, y, "1.3", COLORS.purple);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Roadmap do Produto", MARGIN.left + 28, y + 3);
  y = doc.y + 10;

  for (const fase of fasesRoadmap) {
    const c = colorMap[fase.color];

    y = ensureSpace(doc, y, 90);

    // Top accent
    doc.rect(MARGIN.left, y, CONTENT_WIDTH, 2).fill(c);
    y += 6;

    // Phase number + title
    doc.roundedRect(MARGIN.left, y, 18, 18, 4).fill(c);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.white)
      .text(String(fase.id), MARGIN.left + 2, y + 4, { width: 14, align: "center" });

    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.slateLight)
      .text(`FASE ${fase.id}`, MARGIN.left + 24, y + 1);

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.navy)
      .text(fase.titulo, MARGIN.left + 24, doc.y + 1, { width: CONTENT_WIDTH - 24 });
    y = doc.y + 6;

    // 3-col layout: Objetivo / Entregáveis / Critérios
    const fcols = columnLayout(3);
    let colMaxY = y;

    // Col 1: Objetivo
    doc
      .font("Helvetica-Bold")
      .fontSize(6.5)
      .fillColor(COLORS.slateLight)
      .text("OBJETIVO", fcols[0].x, y, { width: fcols[0].width });
    let cy1 = doc.y + 2;
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(fase.objetivo, fcols[0].x, cy1, { width: fcols[0].width, lineGap: 2 });
    if (doc.y > colMaxY) colMaxY = doc.y;

    // Col 2: Entregáveis
    doc
      .font("Helvetica-Bold")
      .fontSize(6.5)
      .fillColor(COLORS.slateLight)
      .text("ENTREG\u00c1VEIS", fcols[1].x, y, { width: fcols[1].width });
    let cy2 = doc.y + 2;
    for (const e of fase.entregaveis) {
      doc.circle(fcols[1].x + 3, cy2 + 4, 1.5).fill(c);
      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(COLORS.slate)
        .text(e, fcols[1].x + 10, cy2, { width: fcols[1].width - 10, lineGap: 2 });
      cy2 = doc.y + 3;
    }
    if (cy2 > colMaxY) colMaxY = cy2;

    // Col 3: Critérios or Indicador
    if (fase.criterios && fase.criterios.length > 0) {
      doc
        .font("Helvetica-Bold")
        .fontSize(6.5)
        .fillColor(COLORS.slateLight)
        .text("CRIT\u00c9RIO DE AVAN\u00c7O", fcols[2].x, y, { width: fcols[2].width });
      let cy3 = doc.y + 2;
      for (const cr of fase.criterios) {
        doc.circle(fcols[2].x + 3, cy3 + 4, 1.5).fill(c);
        doc
          .font("Helvetica")
          .fontSize(7.5)
          .fillColor(COLORS.slate)
          .text(cr, fcols[2].x + 10, cy3, { width: fcols[2].width - 10, lineGap: 2 });
        cy3 = doc.y + 3;
      }
      if (cy3 > colMaxY) colMaxY = cy3;
    } else if (fase.indicador) {
      doc
        .font("Helvetica-Bold")
        .fontSize(6.5)
        .fillColor(COLORS.slateLight)
        .text("INDICADOR ESTRAT\u00c9GICO", fcols[2].x, y, { width: fcols[2].width });
      let cy3 = doc.y + 2;
      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(COLORS.slate)
        .text(fase.indicador, fcols[2].x, cy3, { width: fcols[2].width, lineGap: 2 });
      if (doc.y > colMaxY) colMaxY = doc.y;
    }

    y = colMaxY + 4;

    if (fase.nota) {
      doc
        .font("Helvetica")
        .fontSize(7)
        .fillColor(COLORS.slateLight)
        .text(fase.nota, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
      y = doc.y + 4;
    }

    y += 8;
  }

  // ════════════════════════════════════════════════════
  // 1.4 CICLO DE VIDA DA APLICAÇÃO
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 40);
  drawSectionNumber(doc, MARGIN.left, y, "1.4", COLORS.amber);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Ciclo de Vida da Aplica\u00e7\u00e3o", MARGIN.left + 28, y + 3);
  y = doc.y + 6;

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text("Modelo h\u00edbrido com governan\u00e7a progressiva.", MARGIN.left, y, { width: CONTENT_WIDTH });
  y = doc.y + 10;

  // Horizontal mini timeline
  y = ensureSpace(doc, y, 40);
  const circleR = 10;
  const spacing = (CONTENT_WIDTH - circleR * 2 * cicloEtapas.length) / (cicloEtapas.length + 1);
  const timelineY = y + circleR + 2;

  for (let i = 0; i < cicloEtapas.length; i++) {
    const etapa = cicloEtapas[i];
    const c = colorMap[etapa.color];
    const cx = MARGIN.left + spacing * (i + 1) + circleR * (2 * i + 1);

    doc.circle(cx, timelineY, circleR).fill(c);
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.white)
      .text(String(etapa.id), cx - 5, timelineY - 4, { width: 10, align: "center" });

    doc
      .font("Helvetica")
      .fontSize(5.5)
      .fillColor(COLORS.slateDark)
      .text(etapa.titulo, cx - 30, timelineY + circleR + 3, { width: 60, align: "center", lineGap: 1 });

    // Arrow
    if (i < cicloEtapas.length - 1) {
      const nextCx = MARGIN.left + spacing * (i + 2) + circleR * (2 * (i + 1) + 1);
      const arrowStart = cx + circleR + 2;
      const arrowEnd = nextCx - circleR - 2;
      doc
        .moveTo(arrowStart, timelineY)
        .lineTo(arrowEnd, timelineY)
        .strokeColor(COLORS.slateLight)
        .lineWidth(0.8)
        .stroke();
      doc
        .moveTo(arrowEnd, timelineY)
        .lineTo(arrowEnd - 3, timelineY - 2)
        .lineTo(arrowEnd - 3, timelineY + 2)
        .fill(COLORS.slateLight);
    }
  }

  y = timelineY + circleR + 22;

  // Etapa detail list
  for (const etapa of cicloEtapas) {
    const c = colorMap[etapa.color];

    y = ensureSpace(doc, y, 35);

    // Number badge
    doc.roundedRect(MARGIN.left, y, 16, 16, 3).fill(c);
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.white)
      .text(String(etapa.id), MARGIN.left + 2, y + 3, { width: 12, align: "center" });

    // Title
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor(COLORS.navy)
      .text(etapa.titulo, MARGIN.left + 22, y + 2, { width: CONTENT_WIDTH - 22 });
    y = doc.y + 2;

    // Description
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(etapa.desc, MARGIN.left + 22, y, { width: CONTENT_WIDTH - 22, lineGap: 2 });
    y = doc.y + 2;

    // Critério de avanço
    if (etapa.criterio) {
      doc
        .font("Helvetica-Bold")
        .fontSize(7)
        .fillColor(COLORS.slateDark)
        .text("Crit\u00e9rio de avan\u00e7o: ", MARGIN.left + 22, y, { continued: true });
      doc
        .font("Helvetica")
        .fillColor(COLORS.slate)
        .text(etapa.criterio, { width: CONTENT_WIDTH - 100 });
      y = doc.y + 2;
    }

    y += 6;
  }

  // ════════════════════════════════════════════════════
  // 1.5 GERENCIAMENTO DE RISCOS
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 40);
  drawSectionNumber(doc, MARGIN.left, y, "1.5", COLORS.coral);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Gerenciamento de Riscos", MARGIN.left + 28, y + 3);
  y = doc.y + 6;

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(
      "O gerenciamento de riscos no IRIS \u00e9 estruturado como componente central do produto.",
      MARGIN.left,
      y,
      { width: CONTENT_WIDTH },
    );
  y = doc.y + 10;

  // Two columns: Riscos | Mitigação
  const cols2 = columnLayout(2);

  // Measure heights for equal cards
  const riskContentH =
    riscosOperacionais.length * 16 + 30 +
    doc.font("Helvetica").fontSize(7).heightOfString(riscosNota, { width: cols2[0].width - 24 }) + 10;

  const mitContentH =
    estrategiasMitigacao.length * 16 + 30 +
    doc.font("Helvetica").fontSize(7).heightOfString(principiosLgpd, { width: cols2[1].width - 24 }) + 10;

  const maxRiskMitH = Math.max(riskContentH, mitContentH);
  y = ensureSpace(doc, y, maxRiskMitH);

  // Left card: Riscos
  drawCard(doc, y, {
    title: "Riscos Operacionais Identificados",
    content: riscosOperacionais,
    color: COLORS.coral,
    width: cols2[0].width,
    x: cols2[0].x,
  });

  // Right card: Mitigação
  drawCard(doc, y, {
    title: "Estrat\u00e9gias de Mitiga\u00e7\u00e3o",
    content: estrategiasMitigacao,
    color: COLORS.teal,
    width: cols2[1].width,
    x: cols2[1].x,
  });

  y += maxRiskMitH + 4;

  // Nota sobre matriz
  doc
    .font("Helvetica")
    .fontSize(7)
    .fillColor(COLORS.slateLight)
    .text(riscosNota, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 4;

  // LGPD
  doc
    .font("Helvetica")
    .fontSize(7)
    .fillColor(COLORS.slate)
    .text(principiosLgpd, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 12;

  // ════════════════════════════════════════════════════
  // 1.6 GESTÃO DE PRODUTOS E IA
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 40);
  drawSectionNumber(doc, MARGIN.left, y, "1.6", COLORS.teal);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text("Gest\u00e3o de Produtos e Intelig\u00eancia Artificial", MARGIN.left + 28, y + 3);
  y = doc.y + 10;

  // Abordagem
  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(iaAbordagem, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 8;

  // Princípio central
  y = drawHighlightBlock(doc, y, iaPrincipio, { color: COLORS.teal, fontSize: 9 });

  // Riscos e Mitigação da IA (2 cols)
  y = ensureSpace(doc, y, 80);

  drawCard(doc, y, {
    title: "Riscos Espec\u00edficos da IA",
    content: riscosIA,
    color: COLORS.coral,
    width: cols2[0].width,
    x: cols2[0].x,
  });

  drawCard(doc, y, {
    title: "Mitiga\u00e7\u00e3o",
    content: mitigacoesIA,
    color: COLORS.teal,
    width: cols2[1].width,
    x: cols2[1].x,
  });

  // Estimate card height
  const iaCardH = Math.max(riscosIA.length, mitigacoesIA.length) * 14 + 36;
  y += iaCardH + 8;

  // ════════════════════════════════════════════════════
  // CONCLUSÃO
  // ════════════════════════════════════════════════════
  y = ensureSpace(doc, y, 60);
  y = drawSectionHeader(doc, y, "Conclus\u00e3o", COLORS.navy);

  for (const paragrafo of conclusao) {
    y = ensureSpace(doc, y, 20);
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(paragrafo, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
    y = doc.y + 6;
  }

  y = drawFooterNote(
    doc,
    y,
    "Este documento integra a documenta\u00e7\u00e3o te\u00f3rica do IRIS. Os artefatos pr\u00e1ticos " +
      "correspondentes \u2014 Canvas, MVP, Roadmap, Matriz de Riscos, Ciclo de Vida e Gest\u00e3o de IA " +
      "\u2014 complementam e detalham cada se\u00e7\u00e3o aqui apresentada.",
  );

  addFooters(doc);
  return doc;
}
