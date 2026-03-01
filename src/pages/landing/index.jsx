import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Subtle grain overlay (SVG noise embedded as data URI) */
function GrainOverlay({ opacity = 0.05 }) {
  const dataUri = useMemo(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 0.55 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#n)"/>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url("${dataUri}")`,
        opacity,
        mixBlendMode: "multiply",
      }}
    />
  );
}

/** Minimal studio cursor */
function StudioCursor({ enabled = true }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.2 });

  const activeRef = useRef(false);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
      if (!activeRef.current) activeRef.current = true;
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    const onOver = (e) => {
      const t = e.target;
      const interactive =
        t?.closest?.("a,button,[role='button'],[data-cursor='hover']");
      setHover(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = hover ? 34 : 16;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full border bg-white/0"
        animate={{
          width: pressed ? size * 0.92 : size,
          height: pressed ? size * 0.92 : size,
          borderColor: hover ? "rgba(15,23,42,0.55)" : "rgba(15,23,42,0.35)",
          backdropFilter: hover ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.18, ease: EASE }}
      />
    </motion.div>
  );
}

/** Signature structural scan line */
function StructuralLine() {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative w-full">
      <div
        className="relative h-px w-full bg-slate-900/12 overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        data-cursor="hover"
      >
        <AnimatePresence>
          {hover && (
            <motion.div
              className="absolute top-0 h-px w-[22%] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"
              initial={{ x: "-30%", opacity: 0 }}
              animate={{ x: "430%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.95, ease: EASE }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-6 text-xs text-slate-700/80">
        <div className="space-y-1">
          <div className="uppercase tracking-[0.22em] text-slate-900/70">
            Camada Identificável
          </div>
          <div>Dados pessoais isolados &bull; Acesso controlado &bull; Logs</div>
        </div>
        <div className="space-y-1 text-right">
          <div className="uppercase tracking-[0.22em] text-slate-900/70">
            Camada Operacional
          </div>
          <div>Interações consolidadas &bull; Métricas &bull; Inteligência</div>
        </div>
      </div>
    </div>
  );
}

function Reveal({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.95, ease: EASE }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const [leaving, setLeaving] = useState(false);

  const onGoPanel = () => {
    setLeaving(true);
    window.setTimeout(() => navigate("/painel"), reduce ? 0 : 340);
  };

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, reduce ? 1 : 0.55]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, reduce ? 0 : -70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.92]);

  const lockupOpacity = useTransform(scrollYProgress, [0.06, 0.12], [0, 1]);
  const lockupY = useTransform(scrollYProgress, [0.06, 0.12], [-6, 0]);

  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  return (
    <div className="relative min-h-screen bg-[#F6F7F9] text-slate-900 overflow-x-hidden">
      <StudioCursor enabled={!reduce} />

      {/* Top lockup (appears on scroll) */}
      <motion.div
        className="fixed left-0 top-0 z-50 w-full"
        style={{ opacity: lockupOpacity, y: lockupY }}
      >
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="text-sm font-semibold tracking-tight">IRIS</div>
            <div className="text-xs text-slate-600/80 hidden sm:block">
              Inteligência de Relacionamento Integrado Seguro
            </div>
          </div>

          <button
            onClick={onGoPanel}
            aria-label="Acessar painel do projeto"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-900/80 hover:text-slate-900 transition"
            data-cursor="hover"
          >
            Acessar Painel
            <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" />
          </button>
        </div>
        <div className="h-px w-full bg-slate-900/10" />
      </motion.div>

      {/* Background layers */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ y: bgGlowY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, rgba(15,23,42,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 72% 26%, rgba(20,184,166,0.08) 0%, transparent 52%)",
          }}
        />
      </motion.div>
      <GrainOverlay opacity={0.05} />

      {/* Leave transition overlay */}
      <AnimatePresence>
        {leaving && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#F6F7F9]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.34, ease: EASE }}
          />
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.div
            style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
            className="origin-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/35 px-4 py-2 backdrop-blur-[2px]"
            >
              <span className="text-[10px] uppercase tracking-[0.28em] text-slate-700/80">
                Enterprise &bull; Governança &bull; Evolução IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 42, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease: EASE, delay: 0.05 }}
              className="mt-7 text-[clamp(5rem,14vw,14rem)] tracking-tight font-medium leading-[0.88]"
            >
              IRIS
            </motion.h1>

            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.05, ease: EASE, delay: 0.22 }}
              className="mt-4 text-sm sm:text-base text-slate-700/85 tracking-wide"
            >
              Inteligência de Relacionamento Integrado Seguro
            </motion.p>

            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.05, ease: EASE, delay: 0.34 }}
              className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl text-slate-900/80 leading-relaxed"
            >
              Estruturando dados dispersos de atendimento como{" "}
              <span className="text-slate-900">infraestrutura</span> de decisão
              financeira &mdash; com governança como núcleo e IA como evolução
              supervisionada.
            </motion.p>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.48 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={onGoPanel}
                aria-label="Ver planejamento estratégico do projeto"
                className={cn(
                  "group inline-flex items-center justify-center gap-3",
                  "rounded-full bg-slate-900 text-[#F6F7F9]",
                  "px-7 py-3.5 text-sm font-medium",
                  "shadow-[0_18px_40px_rgba(15,23,42,0.18)]",
                  "hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] transition"
                )}
                data-cursor="hover"
              >
                Ver Planejamento Estratégico
                <motion.span
                  className="inline-flex"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <ArrowRight className="h-4 w-4 opacity-90" />
                </motion.span>
              </button>

              <a
                href="#estrutura"
                aria-label="Rolar até a seção de estrutura"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-900/70 hover:text-slate-900 transition"
                data-cursor="hover"
              >
                Entender a Estrutura
                <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-700/70"
          >
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-[0.22em]">Scroll</span>
              <span className="h-px w-10 bg-slate-900/15" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <main className="relative">
        {/* Section: tension */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-4xl">
              <p className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight font-medium">
                Dados existem.
                <br />
                <span className="text-slate-900/70">Estrutura, não.</span>
              </p>
              <p className="mt-7 text-lg text-slate-900/75 leading-relaxed max-w-3xl">
                O IRIS organiza o relacionamento sob governança, reduzindo a zona
                cega que distorce decisões executivas &mdash; antes de qualquer
                promessa de inteligência avançada.
              </p>
            </Reveal>

            <div className="mt-16 sm:mt-20">
              <StructuralLine />
            </div>
          </div>
        </section>

        {/* Section: structure modules */}
        <section id="estrutura" className="py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="flex flex-col gap-10">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-700/75">
                    Núcleo
                  </div>
                  <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight">
                    Governança como alicerce.
                  </h2>
                  <p className="mt-5 text-lg text-slate-900/75 leading-relaxed">
                    Consolidar antes de prever. Validar antes de automatizar. A
                    inteligência surge como consequência de uma base confiável.
                  </p>
                </div>

                <div className="text-xs uppercase tracking-[0.24em] text-slate-700/80">
                  IRIS / Fundação segura
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "ID interno seguro",
                    desc: "Hash derivado de CPF \u2022 rastreabilidade sem exposição.",
                  },
                  {
                    title: "Separação de camadas",
                    desc: "Identificável isolado \u2022 operacional pronto para insight.",
                  },
                  {
                    title: "Consolidação multicanal",
                    desc: "Dois canais como prova \u2022 escala progressiva.",
                  },
                  {
                    title: "Painel executivo",
                    desc: "Visão agregada por segmento \u2022 leitura financeira.",
                  },
                  {
                    title: "Risco heurístico",
                    desc: "Regra configurável \u2022 clareza sem \u201Ccaixa-preta\u201D.",
                  },
                  {
                    title: "Evolução supervisionada",
                    desc: "IA com limites \u2022 revisão ética e regulatória.",
                  },
                ].map((m) => (
                  <motion.div
                    key={m.title}
                    role="button"
                    tabIndex={0}
                    onClick={onGoPanel}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onGoPanel()}
                    className={cn(
                      "relative p-7 md:p-8",
                      "border border-slate-900/12 hover:border-slate-900/15",
                      "bg-white/35 backdrop-blur-[2px]",
                      "rounded-[24px]",
                      "cursor-pointer outline-none",
                      "focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F9]"
                    )}
                    whileHover={{ y: -3, boxShadow: "0 24px 60px rgba(15,23,42,0.10)" }}
                    whileTap={{ y: -1, scale: 0.995 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    data-cursor="hover"
                  >
                    <div className="text-[11px] uppercase tracking-[0.28em] text-slate-700/75">
                      Módulo
                    </div>
                    <div className="mt-3 text-xl font-medium tracking-tight">
                      {m.title}
                    </div>
                    <div className="mt-3 text-sm text-slate-900/70 leading-relaxed">
                      {m.desc}
                    </div>
                    <div className="mt-8 h-px w-full bg-slate-900/10" />
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-700/70">
                      <span>Estrutura &rarr; decisão defensável</span>
                      <span className="uppercase tracking-[0.24em]">Abrir &rarr;</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section: ethic stance */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="text-center">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-700/75">
                Princípio
              </div>
              <h3 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight leading-[1.05]">
                IA como suporte à decisão.
                <br />
                <span className="text-slate-900/70">
                  Nunca como substituição.
                </span>
              </h3>
              <p className="mx-auto mt-7 max-w-3xl text-lg text-slate-900/75 leading-relaxed">
                Evolução responsável: explicabilidade, supervisão humana e
                conformidade como premissas &mdash; não como etapa posterior.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="relative overflow-hidden rounded-[32px] border border-slate-900/10 bg-white/40 backdrop-blur-[2px] p-10 sm:p-14">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(20,184,166,0.22) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-700/75">
                  Acesso
                </div>
                <h4 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">
                  Explore o planejamento completo do IRIS.
                </h4>
                <p className="mt-5 text-lg text-slate-900/75 leading-relaxed max-w-3xl">
                  Artefatos, roadmap, MVP, riscos e lógica de evolução &mdash; com a
                  mesma disciplina de execução que sustenta a proposta.
                </p>

                <div className="mt-10">
                  <button
                    onClick={onGoPanel}
                    aria-label="Acessar painel do projeto"
                    className={cn(
                      "group inline-flex items-center justify-center gap-3",
                      "rounded-full bg-slate-900 text-[#F6F7F9]",
                      "px-8 py-4 text-sm font-medium",
                      "shadow-[0_18px_40px_rgba(15,23,42,0.18)]",
                      "hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] transition"
                    )}
                    data-cursor="hover"
                  >
                    Acessar Painel do Projeto
                    <motion.span
                      className="inline-flex"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      <ArrowRight className="h-4 w-4 opacity-90" />
                    </motion.span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px w-full bg-slate-900/10" />
            <div className="mt-7 flex items-center justify-between text-xs text-slate-700/75">
              <div className="uppercase tracking-[0.22em]">IRIS</div>
              <div>Infraestrutura &bull; Governança &bull; Evolução</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
