/**
 * ARCHIVE PLOTTERS — the four works, re-solved at any canvas size.
 *
 * Ported from the PowerShell generators the Archive is produced with. Nothing
 * here is a stored image: each work is recomputed from its equation at the exact
 * pixel dimensions requested, which is why a 4K plot is not an upscale.
 *
 * COLOURS ARE INTENTIONALLY LITERAL HERE, and this is the one place in the
 * project where that is correct. These are not UI colours subject to the design
 * tokens in styles.css — they are the pigments of a published work, and the file
 * a visitor downloads has to match the work as published.
 *
 * Determinism: the LCG below reproduces a quirk of the PowerShell originals
 * rather than the textbook algorithm, because the published works carry the
 * quirk. PowerShell starts the seed as Int32 — the first multiply overflows and
 * is promoted to Double, dropping low bits. From then on the seed is Int64 and
 * every multiply is exact. So iteration one is lossy and the rest are not.
 * Verified value-for-value against the generators over 2,000 iterations.
 *
 * DO NOT "FIX" THE FIRST ITERATION. It is load-bearing.
 */

const INK = "#0D0E10";
const IVORY = "232,225,214";
const EMBER = "229,138,58";
const MIST = "125,158,178";

const PHI = (1 + Math.sqrt(5)) / 2;
const A = 1103515245;
const AL = A & 0xffff;
const AH = A >>> 16;

let seed = 0;
let firstDraw = true;

function reset(): void {
  seed = 0;
  firstDraw = true;
}

function rnd(): number {
  if (firstDraw) {
    firstDraw = false;
    seed = (20260830 * A + 12345) & 0x7fffffff;
  } else {
    const lo = seed * AL;
    const hi = (seed * AH) % 32768;
    seed = (lo + hi * 65536 + 12345) % 2147483648;
  }
  return seed / 2147483648;
}

function gauss(): number {
  const u1 = Math.max(rnd(), 1e-9);
  const u2 = rnd();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

function ground(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, w, h);
}

function grain(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let y = 0; y < h; y += 3) {
    const row = y * w * 4;
    for (let x = 0; x < w; x += 3) {
      if (Math.floor(rnd() * 100) > 72) {
        const i = row + x * 4;
        d[i] = Math.min(255, d[i] + 6);
        d[i + 1] = Math.min(255, d[i + 1] + 6);
        d[i + 2] = Math.min(255, d[i + 2] + 6);
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

/** 001 — RETURN. The same closed curve, 260 times. Only the drift is visible. */
function plotReturn(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const s = Math.min(w, h);
  const k = s / 1600;
  ground(ctx, w, h);
  const cx = w * 0.5;
  const cy = h * 0.5;
  const r = s * 0.3;
  const passes = 260;
  ctx.lineJoin = "round";
  for (let p = 0; p <= passes; p++) {
    const rot = p * 0.0118;
    const grow = Math.pow(1.00042, p);
    ctx.beginPath();
    for (let i = 0; i <= 720; i++) {
      const th = (2 * Math.PI * i) / 720;
      const rr =
        r * grow * (1 + 0.055 * Math.sin(3 * th) + 0.022 * Math.sin(5 * th + 0.9));
      const x = cx + rr * Math.cos(th + rot);
      const y = cy + rr * Math.sin(th + rot) * 0.92;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    if (p === passes) {
      ctx.strokeStyle = `rgba(${EMBER},0.588)`;
      ctx.lineWidth = 1.7 * k;
    } else {
      ctx.strokeStyle = `rgba(${IVORY},0.035)`;
      ctx.lineWidth = 1.25 * k;
    }
    ctx.stroke();
  }
  grain(ctx, w, h);
}

/** 002 — THE CONSTANT. 1,800 strokes forming one rule. One of them sits lower. */
function plotConstant(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const s = Math.min(w, h);
  const k = s / 1600;
  ground(ctx, w, h);
  const y0 = h * 0.5;
  const x0 = w * 0.075;
  const x1 = w * 0.925;
  const n = 1800;
  const seg = (x1 - x0) / n;
  const mark = Math.floor(n / PHI);
  ctx.lineCap = "round";
  ctx.lineWidth = 3.4 * k;
  ctx.strokeStyle = `rgba(${IVORY},0.882)`;
  for (let i = 0; i < n; i++) {
    if (i === mark) continue;
    const x = x0 + i * seg;
    const dy = gauss() * 0.4 * k;
    ctx.beginPath();
    ctx.moveTo(x, y0 + dy);
    ctx.lineTo(x + seg * 0.88, y0 + dy);
    ctx.stroke();
  }
  const xm = x0 + mark * seg;
  ctx.strokeStyle = `rgba(${EMBER},0.922)`;
  ctx.beginPath();
  ctx.moveTo(xm, y0 + 16 * k);
  ctx.lineTo(xm + seg * 0.88, y0 + 16 * k);
  ctx.stroke();
  grain(ctx, w, h);
}

/** 003 — A DECIMAL FRACTION. Each return plotted against the one before it. */
function plotReturnMap(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const s = Math.min(w, h);
  const k = s / 1600;
  ground(ctx, w, h);
  const cx = w * 0.5;
  const cy = h * 0.5;
  const span = s * 0.6;

  ctx.strokeStyle = `rgba(${MIST},0.18)`;
  ctx.lineWidth = 1.6 * k;
  ctx.beginPath();
  ctx.moveTo(cx - span * 0.62, cy + span * 0.62);
  ctx.lineTo(cx + span * 0.62, cy - span * 0.62);
  ctx.stroke();

  const n = 1300;
  let prev = 0;
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < n; i++) {
    const drift = (i - n / 2) * 0.00055;
    const v = drift + gauss() * 0.055;
    if (i > 0) pts.push([prev, v]);
    prev = v;
  }

  const sc = span * 0.62;
  const dot = 2.6 * k;
  ctx.fillStyle = `rgba(${IVORY},0.275)`;
  for (const [px, py] of pts) {
    ctx.beginPath();
    ctx.arc(cx + px * sc, cy - py * sc, dot, 0, 2 * Math.PI);
    ctx.fill();
  }

  const last = pts[pts.length - 1];
  ctx.fillStyle = `rgba(${EMBER},0.922)`;
  ctx.beginPath();
  ctx.arc(cx + last[0] * sc, cy - last[1] * sc, 4.6 * k, 0, 2 * Math.PI);
  ctx.fill();
  grain(ctx, w, h);
}

/** 004 — NOT SOFTENED. The same signature, 44 times. The amplitude does not decay. */
function plotTraces(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const s = Math.min(w, h);
  const k = s / 1600;
  ground(ctx, w, h);
  const rows = 44;
  const top = h * 0.22;
  const bot = h * 0.78;
  const gap = (bot - top) / (rows - 1);
  const x0 = w * 0.11;
  const x1 = w * 0.89;
  const amp = gap * 0.92;

  const harm: Array<[number, number, number]> = [
    [1, 1.0, 0],
    [2, 0.46, 1.9],
    [3, 0.29, 0.6],
    [5, 0.17, 2.7],
    [8, 0.11, 1.2],
  ];

  ctx.lineJoin = "round";
  ctx.strokeStyle = `rgba(${IVORY},0.471)`;
  ctx.lineWidth = 1.35 * k;
  for (let r = 0; r < rows; r++) {
    const yb = top + r * gap;
    const ph = r * 0.013;
    ctx.beginPath();
    for (let i = 0; i <= 1300; i++) {
      const u = i / 1300;
      let v = 0;
      for (const [f, a, o] of harm) {
        v += a * Math.sin(2 * Math.PI * f * 2 * u + o + ph);
      }
      v = v / 2.03;
      const x = x0 + (x1 - x0) * u;
      const y = yb + amp * v + gauss() * 0.7 * k;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, w, h);
}

export type PlotId = "001" | "002" | "003" | "004";

const PLOTTERS: Record<
  PlotId,
  (ctx: CanvasRenderingContext2D, w: number, h: number) => void
> = {
  "001": plotReturn,
  "002": plotConstant,
  "003": plotReturnMap,
  "004": plotTraces,
};

export function plotInto(
  id: PlotId,
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
): void {
  reset();
  PLOTTERS[id](ctx, w, h);
}

export function plotToBlob(id: PlotId, w: number, h: number): Promise<Blob | null> {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return Promise.resolve(null);
  plotInto(id, ctx, w, h);
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}
