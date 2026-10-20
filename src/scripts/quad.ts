// Geometry helpers shared by the polygon / quadrilateral labs.
import { el, text, screenAngle, arcPath, type P } from './svg';

export const len = (a: P, b: P) => Math.hypot(a.x - b.x, a.y - b.y);
export const mid = (a: P, b: P): P => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
export const add = (a: P, b: P): P => ({ x: a.x + b.x, y: a.y + b.y });
export const sub = (a: P, b: P): P => ({ x: a.x - b.x, y: a.y - b.y });
export const pts = (ps: P[]) => ps.map((p) => `${p.x},${p.y}`).join(' ');

/** Signed area with y pointing up (positive = counter-clockwise on screen). */
export function signedArea(ps: P[]): number {
  let s = 0;
  ps.forEach((p, i) => {
    const q = ps[(i + 1) % ps.length];
    s += p.x * -q.y - q.x * -p.y;
  });
  return s / 2;
}

/** Proper crossing of segments ab and cd. */
export function crosses(a: P, b: P, c: P, d: P): boolean {
  const o = (p: P, q: P, r: P) => Math.sign((q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x));
  return o(a, b, c) * o(a, b, d) < 0 && o(c, d, a) * o(c, d, b) < 0;
}

/** A simple polygon: no two non-adjacent sides cross, and no vertex too close to a side. */
export function isSimple(ps: P[], minGap = 14): boolean {
  const n = ps.length;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      if (j === i + 1 || (i === 0 && j === n - 1)) continue;
      if (crosses(ps[i], ps[(i + 1) % n], ps[j], ps[(j + 1) % n])) return false;
    }
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      if (j === i || (j + 1) % n === i) continue;
      if (distToSeg(ps[i], ps[j], ps[(j + 1) % n]) < minGap) return false;
    }
  return true;
}

export function distToSeg(p: P, a: P, b: P): number {
  const L2 = (b.x - a.x) ** 2 + (b.y - a.y) ** 2 || 1;
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / L2));
  return len(p, { x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) });
}

/**
 * Interior angle data for every vertex: measure in degrees (may exceed 180
 * for a concave vertex) and the start/end screen angles of its wedge.
 */
export function interiorAngles(ps: P[]) {
  const ccw = signedArea(ps) > 0;
  const n = ps.length;
  return ps.map((v, i) => {
    const prev = ps[(i - 1 + n) % n];
    const next = ps[(i + 1) % n];
    const toNext = screenAngle(v, next);
    const toPrev = screenAngle(v, prev);
    const [a1, a2] = ccw ? [toNext, toPrev] : [toPrev, toNext];
    const m = (a2 - a1 + 360) % 360;
    return { m, a1, a2 };
  });
}

/** Wedge for an interior angle, plus a point inside it for its label. */
export function wedge(v: P, a1: number, a2: number, r: number, cls: string) {
  const g = el('path', { d: arcPath(v, r, a1, a2, true) }, cls);
  const midA = a1 + (((a2 - a1 + 360) % 360) / 2);
  return { g, midA };
}

/** Small tick marks across segment ab (n of them). */
export function ticks(svg: Element, a: P, b: P, n = 1, cls = 'tick') {
  const m = mid(a, b);
  const L = len(a, b) || 1;
  const u = { x: (b.x - a.x) / L, y: (b.y - a.y) / L };
  const nr = { x: -u.y * 7, y: u.x * 7 };
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 5;
    const c = { x: m.x + u.x * off, y: m.y + u.y * off };
    svg.appendChild(el('line', { x1: c.x - nr.x, y1: c.y - nr.y, x2: c.x + nr.x, y2: c.y + nr.y }, cls));
  }
}

/** Chevron marking a parallel segment (n chevrons). */
export function chevron(svg: Element, a: P, b: P, n = 1) {
  const m = mid(a, b);
  const L = len(a, b) || 1;
  const u = { x: (b.x - a.x) / L, y: (b.y - a.y) / L };
  const nr = { x: -u.y, y: u.x };
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 7;
    const tip = { x: m.x + u.x * (off + 5), y: m.y + u.y * (off + 5) };
    const p1 = { x: tip.x - u.x * 8 + nr.x * 5.5, y: tip.y - u.y * 8 + nr.y * 5.5 };
    const p2 = { x: tip.x - u.x * 8 - nr.x * 5.5, y: tip.y - u.y * 8 - nr.y * 5.5 };
    svg.appendChild(el('polyline', { points: `${p1.x},${p1.y} ${tip.x},${tip.y} ${p2.x},${p2.y}` }, 'par'));
  }
}

/** Right-angle mark at v between directions to a and b. */
export function rightMark(svg: Element, v: P, a: P, b: P, s = 10) {
  const ua = sub(a, v);
  const ub = sub(b, v);
  const la = Math.hypot(ua.x, ua.y) || 1;
  const lb = Math.hypot(ub.x, ub.y) || 1;
  const p1 = { x: v.x + (ua.x / la) * s, y: v.y + (ua.y / la) * s };
  const p2 = { x: v.x + (ub.x / lb) * s, y: v.y + (ub.y / lb) * s };
  const p3 = { x: p1.x + p2.x - v.x, y: p1.y + p2.y - v.y };
  svg.appendChild(el('polyline', { points: `${p1.x},${p1.y} ${p3.x},${p3.y} ${p2.x},${p2.y}` }, 'rmark'));
}

/** Draggable vertex handle with an outward label. */
export function handle(svg: Element, p: P, name: string, center: P, onDown: (e: PointerEvent) => void) {
  const g = el('g', {}, 'pt');
  g.appendChild(el('circle', { cx: p.x, cy: p.y, r: 15 }, 'hit'));
  g.appendChild(el('circle', { cx: p.x, cy: p.y, r: 6 }, 'dot'));
  const d = len(p, center) || 1;
  g.appendChild(text(p.x + ((p.x - center.x) / d) * 18, p.y + ((p.y - center.y) / d) * 18, name, 'lbl'));
  g.addEventListener('pointerdown', (e) => onDown(e as PointerEvent));
  svg.appendChild(g);
}

/** Fixed (non-draggable) vertex label. */
export function vlabel(svg: Element, p: P, name: string, center: P) {
  svg.appendChild(el('circle', { cx: p.x, cy: p.y, r: 3.5 }, 'mk'));
  const d = len(p, center) || 1;
  svg.appendChild(text(p.x + ((p.x - center.x) / d) * 16, p.y + ((p.y - center.y) / d) * 16, name, 'lbl'));
}

export const centroid = (ps: P[]): P => ({
  x: ps.reduce((s, p) => s + p.x, 0) / ps.length,
  y: ps.reduce((s, p) => s + p.y, 0) / ps.length,
});

export const clamp = (p: P, x0: number, x1: number, y0: number, y1: number): P => ({
  x: Math.max(x0, Math.min(x1, p.x)),
  y: Math.max(y0, Math.min(y1, p.y)),
});
