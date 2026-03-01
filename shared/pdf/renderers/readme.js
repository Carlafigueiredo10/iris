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
  visao,
  visaoDestaque,
  problemas,
  propostaIntro,
  propostaPermite,
  propostaDestaque,
  mvpCapacidades,
  hipoteseMvp,
  metricaMvp,
  fasesRoadmap,
  roadmapDestaque,
  riscosPrincipais,
  riscosDestaque,
  iaAbordagem,
  iaPrincipio,
  mitigacoesIA,
  arquiteturaFluxo,
  artefatos,
  artefatosNota,
  conclusao,
} from "../../data/readme.js";

const colorMap = {
  teal: COLORS.teal,
  coral: COLORS.coral,
  purple: COLORS.purple,
  amber: COLORS.amber,
  success: COLORS.success,
};

export function render(meta) {
  const doc = createDocument(meta);
  addNewPage(doc);
  let y = addHeader(doc, meta);

  // ── Título central
  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .fillColor(COLORS.navy)
    .text("IRIS", MARGIN.left, y, { width: CONTENT_WIDTH, align: "center" });
  y = doc.y + 2;

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.slateLight)
    .text("Intelig\u00eancia de Relacionamento Integrado Seguro", MARGIN.left, y, {
      width: CONTENT_WIDTH,
      align: "center",
    });
  y = doc.y + 12;

  // ── Visão do Projeto
  y = drawSectionHeader(doc, y, "Vis\u00e3o do Projeto", COLORS.teal);

  for (const paragrafo of visao) {
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(paragrafo, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
    y = doc.y + 4;
  }

  y = drawHighlightBlock(doc, y, visaoDestaque, { color: COLORS.teal, fontSize: 8.5 });

  // ── Problema
  y = drawSectionHeader(doc, y, "Problema", COLORS.coral);
  y = drawBulletList(doc, y, problemas, { dotColor: COLORS.coral });
  y += 6;

  // ── Proposta de Valor
  y = drawSectionHeader(doc, y, "Proposta de Valor", COLORS.teal);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(propostaIntro, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 6;

  doc
    .font("Helvetica-Bold")
    .fontSize(6.5)
    .fillColor(COLORS.slateLight)
    .text("A PARTIR DESSA BASE ESTRUTURADA, PERMITE:", MARGIN.left, y, {
      characterSpacing: 0.5,
    });
  y = doc.y + 4;

  y = drawBulletList(doc, y, propostaPermite, { dotColor: COLORS.teal });

  y = drawFooterNote(doc, y, propostaDestaque);

  // ── MVP
  y = drawSectionHeader(doc, y, "MVP \u2014 Experimento Estrat\u00e9gico", COLORS.coral);

  doc
    .font("Helvetica-Bold")
    .fontSize(6.5)
    .fillColor(COLORS.slateLight)
    .text(
      "O MVP FOI DEFINIDO PARA VALIDAR TR\u00caS CAPACIDADES CENTRAIS:",
      MARGIN.left,
      y,
      { characterSpacing: 0.5 },
    );
  y = doc.y + 4;

  y = drawNumberedList(doc, y, mvpCapacidades, { color: COLORS.coral });

  // Hipótese
  y = drawHighlightBlock(doc, y, hipoteseMvp, { color: COLORS.coral, fontSize: 8 });

  // Métrica
  y = ensureSpace(doc, y, 20);
  doc
    .font("Helvetica-Bold")
    .fontSize(6.5)
    .fillColor(COLORS.slateLight)
    .text("M\u00c9TRICA PRINCIPAL", MARGIN.left, y, { characterSpacing: 0.5 });
  y = doc.y + 3;
  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(metricaMvp, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 10;

  // ── Roadmap Estratégico
  y = drawSectionHeader(doc, y, "Roadmap Estrat\u00e9gico (18 meses)", COLORS.purple);

  for (const fase of fasesRoadmap) {
    const c = colorMap[fase.color];

    y = ensureSpace(doc, y, 60);

    // Top accent
    doc.rect(MARGIN.left, y, CONTENT_WIDTH, 2).fill(c);
    y += 6;

    // Number badge + title
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
    y = doc.y + 4;

    // Description
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(fase.desc, MARGIN.left + 24, y, { width: CONTENT_WIDTH - 24, lineGap: 2 });
    y = doc.y + 3;

    // Critério
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.slateDark)
      .text("Crit\u00e9rio: ", MARGIN.left + 24, y, { continued: true });
    doc
      .font("Helvetica")
      .fillColor(COLORS.slate)
      .text(fase.criterio, { width: CONTENT_WIDTH - 70 });
    y = doc.y + 8;
  }

  y = drawFooterNote(doc, y, roadmapDestaque);

  // ── Gestão de Riscos
  y = drawSectionHeader(doc, y, "Gest\u00e3o de Riscos", COLORS.coral);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(
      "O gerenciamento de riscos \u00e9 componente central do IRIS.",
      MARGIN.left,
      y,
      { width: CONTENT_WIDTH },
    );
  y = doc.y + 6;

  y = drawBulletList(doc, y, riscosPrincipais, { dotColor: COLORS.coral });

  y = drawHighlightBlock(doc, y, riscosDestaque, { color: COLORS.coral, fontSize: 8 });

  // ── IA e Responsabilidade
  y = drawSectionHeader(doc, y, "Intelig\u00eancia Artificial e Responsabilidade", COLORS.teal);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(iaAbordagem, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 8;

  y = drawHighlightBlock(doc, y, iaPrincipio, { color: COLORS.teal, fontSize: 9 });

  doc
    .font("Helvetica-Bold")
    .fontSize(6.5)
    .fillColor(COLORS.slateLight)
    .text("MITIGA\u00c7\u00d5ES:", MARGIN.left, y, { characterSpacing: 0.5 });
  y = doc.y + 4;

  y = drawBulletList(doc, y, mitigacoesIA, { dotColor: COLORS.teal });

  // ── Arquitetura Conceitual
  y = drawSectionHeader(doc, y, "Arquitetura Conceitual", COLORS.purple);

  y = ensureSpace(doc, y, 30);
  const flowText = arquiteturaFluxo.join("  \u2192  ");
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(COLORS.navy)
    .text(flowText, MARGIN.left, y, { width: CONTENT_WIDTH, align: "center" });
  y = doc.y + 4;

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text("Cada fase possui crit\u00e9rios formais de avan\u00e7o.", MARGIN.left, y, {
      width: CONTENT_WIDTH,
      align: "center",
    });
  y = doc.y + 10;

  // ── Coerência entre Artefatos
  y = drawSectionHeader(doc, y, "Coer\u00eancia entre Artefatos", COLORS.teal);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.slate)
    .text(
      "O projeto \u00e9 sustentado por artefatos interdependentes:",
      MARGIN.left,
      y,
      { width: CONTENT_WIDTH },
    );
  y = doc.y + 4;

  y = drawBulletList(doc, y, artefatos, { dotColor: COLORS.teal });

  doc
    .font("Helvetica")
    .fontSize(7)
    .fillColor(COLORS.slateLight)
    .text(artefatosNota, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
  y = doc.y + 10;

  // ── Conclusão
  y = drawSectionHeader(doc, y, "Conclus\u00e3o", COLORS.navy);

  for (const p of conclusao) {
    y = ensureSpace(doc, y, 20);
    doc
      .font("Helvetica")
      .fontSize(7.5)
      .fillColor(COLORS.slate)
      .text(p, MARGIN.left, y, { width: CONTENT_WIDTH, lineGap: 2 });
    y = doc.y + 6;
  }

  y = drawFooterNote(
    doc,
    y,
    "Este documento integra a documenta\u00e7\u00e3o do IRIS. Os artefatos pr\u00e1ticos " +
      "correspondentes complementam e detalham cada se\u00e7\u00e3o aqui apresentada.",
  );

  addFooters(doc);
  return doc;
}
