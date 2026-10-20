// Small helpers shared by the interactive SVG labs.

export const NS = 'http://www.w3.org/2000/svg';

export type P = { x: number; y: number };

/** Create an SVG element with attributes and an optional class. */
export function el(tag: string, attrs: Record<string, string | number> = {}, cls?: string): SVGElement {
  const e = document.createElementNS(NS, tag) as SVGElement;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  if (cls) e.setAttribute('class', cls);
  return e;
}

/** SVG text element. */
export function text(x: number, y: number, content: string, cls?: string): SVGElement {
  const t = el('text', { x, y }, cls);
  t.textContent = content;
  return t;
}

/** Pointer position in the SVG's own (viewBox) coordinates. */
export function svgPoint(svg: SVGSVGElement, e: PointerEvent): P | null {
  const m = svg.getScreenCTM();
  if (!m) return null;
  const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
  return { x: q.x, y: q.y };
}

/**
 * Wire dragging for an SVG: call `start(key, e)` from a handle's pointerdown;
 * `onMove(key, point)` runs on every move while dragging.
 */
export function makeDraggable<K extends string>(svg: SVGSVGElement, onMove: (key: K, p: P) => void) {
  let current: K | null = null;
  svg.addEventListener('pointermove', (e) => {
    if (current === null) return;
    const p = svgPoint(svg, e);
    if (p) onMove(current, p);
  });
  const stop = () => (current = null);
  svg.addEventListener('pointerup', stop);
  svg.addEventListener('pointercancel', stop);
  return {
    start(key: K, e: PointerEvent) {
      current = key;
      svg.setPointerCapture(e.pointerId);
      e.preventDefault();
    },
  };
}

/** Angle of a direction in degrees, measured counter-clockwise on screen (y down), in [0, 360). */
export function screenAngle(from: P, to: P): number {
  const a = (Math.atan2(-(to.y - from.y), to.x - from.x) * 180) / Math.PI;
  return (a + 360) % 360;
}

/** Point at distance r from c in direction `deg` (counter-clockwise on screen). */
export function polar(c: P, r: number, deg: number): P {
  const t = (deg * Math.PI) / 180;
  return { x: c.x + r * Math.cos(t), y: c.y - r * Math.sin(t) };
}

/** SVG path for an arc of radius r around c from angle a1 to a2 (counter-clockwise, degrees). */
export function arcPath(c: P, r: number, a1: number, a2: number, pie = false): string {
  let sweep = (a2 - a1 + 360) % 360;
  if (sweep === 0 && a2 !== a1) sweep = 360;
  const p1 = polar(c, r, a1);
  const p2 = polar(c, r, a1 + sweep);
  const large = sweep > 180 ? 1 : 0;
  const d = `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 0 ${p2.x} ${p2.y}`;
  return pie ? `M ${c.x} ${c.y} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 0 ${p2.x} ${p2.y} Z` : d;
}
