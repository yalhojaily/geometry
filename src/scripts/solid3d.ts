// A tiny 3D renderer for the solids labs: convex meshes drawn to SVG with
// orthographic projection, simple shading, hidden edges dashed, and drag-to-rotate.
import { el } from './svg';

export type V3 = [number, number, number];
export interface Face {
  v: number[];
  smooth?: boolean; // part of a curved surface: no edges of its own
}
export interface Mesh {
  verts: V3[];
  faces: Face[];
}
export interface Overlay {
  a: V3;
  b: V3;
  cls: string;
  label?: string;
}

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => {
  const l = Math.hypot(...a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
const centre = (ps: V3[]): V3 => {
  const c: V3 = [0, 0, 0];
  ps.forEach((p) => {
    c[0] += p[0];
    c[1] += p[1];
    c[2] += p[2];
  });
  return [c[0] / ps.length, c[1] / ps.length, c[2] / ps.length];
};

/** Convex hull faces of a point set (small n only), each ordered counter-clockwise from outside. */
export function hull(verts: V3[]): Mesh {
  const n = verts.length;
  const eps = 1e-6;
  const c = centre(verts);
  const seen = new Set<string>();
  const faces: Face[] = [];
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      for (let k = j + 1; k < n; k++) {
        let nrm = cross(sub(verts[j], verts[i]), sub(verts[k], verts[i]));
        if (Math.hypot(...nrm) < eps) continue;
        nrm = norm(nrm);
        let d = dot(nrm, verts[i]);
        if (dot(nrm, c) > d) {
          nrm = [-nrm[0], -nrm[1], -nrm[2]];
          d = -d;
        }
        if (verts.some((p) => dot(nrm, p) > d + 1e-5)) continue;
        const on = verts.map((p, idx) => [p, idx] as const).filter(([p]) => Math.abs(dot(nrm, p) - d) < 1e-5).map(([, idx]) => idx);
        const key = [...on].sort((a, b) => a - b).join(',');
        if (seen.has(key)) continue;
        seen.add(key);
        // order around the face centre, counter-clockwise seen from outside
        const fc = centre(on.map((q) => verts[q]));
        const u = norm(sub(verts[on[0]], fc));
        const w = cross(nrm, u);
        on.sort((a, b) => {
          const pa = sub(verts[a], fc);
          const pb = sub(verts[b], fc);
          return Math.atan2(dot(pa, w), dot(pa, u)) - Math.atan2(dot(pb, w), dot(pb, u));
        });
        faces.push({ v: on });
      }
  return { verts, faces };
}

/** Make every face wind counter-clockwise seen from outside (for hand-built convex meshes). */
export function orient(m: Mesh): Mesh {
  const c = centre(m.verts);
  m.faces.forEach((f) => {
    const p = f.v.map((i) => m.verts[i]);
    const nrm = cross(sub(p[1], p[0]), sub(p[2], p[0]));
    if (dot(nrm, sub(centre(p), c)) < 0) f.v.reverse();
  });
  return m;
}

const PHI = (1 + Math.sqrt(5)) / 2;
export const platonic = {
  tetra: (): V3[] => [
    [1, 1, 1],
    [1, -1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
  ],
  cube: (): V3[] => {
    const out: V3[] = [];
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) out.push([x, y, z]);
    return out;
  },
  octa: (): V3[] => [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ],
  icosa: (): V3[] => {
    const out: V3[] = [];
    for (const a of [-1, 1])
      for (const b of [-PHI, PHI]) {
        out.push([0, a, b]);
        out.push([a, b, 0]);
        out.push([b, 0, a]);
      }
    return out;
  },
  dodeca: (): V3[] => {
    const out: V3[] = platonic.cube();
    const p = 1 / PHI;
    for (const a of [-p, p])
      for (const b of [-PHI, PHI]) {
        out.push([0, a, b]);
        out.push([a, b, 0]);
        out.push([b, 0, a]);
      }
    return out;
  },
};

/** Regular n-gon prism: base circumradius r, height h, axis = y. Top can be shifted (oblique). */
export function prismVerts(n: number, r: number, h: number, shift = 0): V3[] {
  const out: V3[] = [];
  for (let i = 0; i < n; i++) {
    const t = (2 * Math.PI * i) / n + Math.PI / n;
    out.push([r * Math.cos(t), -h / 2, r * Math.sin(t)]);
    out.push([r * Math.cos(t) + shift, h / 2, r * Math.sin(t)]);
  }
  return out;
}
export function pyramidVerts(n: number, r: number, h: number): V3[] {
  const out: V3[] = [];
  for (let i = 0; i < n; i++) {
    const t = (2 * Math.PI * i) / n + Math.PI / n;
    out.push([r * Math.cos(t), -h / 2, r * Math.sin(t)]);
  }
  out.push([0, h / 2, 0]);
  return out;
}
export function boxVerts(l: number, w: number, h: number, shift = 0): V3[] {
  const out: V3[] = [];
  for (const x of [-l / 2, l / 2]) for (const z of [-w / 2, w / 2]) for (const y of [-h / 2, h / 2]) out.push([x + (y > 0 ? shift : 0), y, z]);
  return out;
}

/** Cylinder (or cone when rTop = 0) with smooth lateral faces and flat caps. */
export function lathe(rBot: number, rTop: number, h: number, seg = 40): Mesh {
  const verts: V3[] = [];
  const faces: Face[] = [];
  for (let i = 0; i < seg; i++) {
    const t = (2 * Math.PI * i) / seg;
    verts.push([rBot * Math.cos(t), -h / 2, rBot * Math.sin(t)]);
  }
  if (rTop > 0) {
    for (let i = 0; i < seg; i++) {
      const t = (2 * Math.PI * i) / seg;
      verts.push([rTop * Math.cos(t), h / 2, rTop * Math.sin(t)]);
    }
    for (let i = 0; i < seg; i++) faces.push({ v: [i, (i + 1) % seg, seg + ((i + 1) % seg), seg + i], smooth: true });
    faces.push({ v: Array.from({ length: seg }, (_, i) => seg + i) });
  } else {
    verts.push([0, h / 2, 0]);
    for (let i = 0; i < seg; i++) faces.push({ v: [i, (i + 1) % seg, seg], smooth: true });
  }
  faces.push({ v: Array.from({ length: seg }, (_, i) => i) });
  return orient({ verts, faces });
}

export function sphere(r: number, lat = 12, lon = 28): Mesh {
  const verts: V3[] = [[0, r, 0]];
  for (let i = 1; i < lat; i++) {
    const p = (Math.PI * i) / lat;
    for (let j = 0; j < lon; j++) {
      const t = (2 * Math.PI * j) / lon;
      verts.push([r * Math.sin(p) * Math.cos(t), r * Math.cos(p), r * Math.sin(p) * Math.sin(t)]);
    }
  }
  verts.push([0, -r, 0]);
  const S = verts.length - 1;
  const idx = (i: number, j: number) => 1 + (i - 1) * lon + (j % lon);
  const faces: Face[] = [];
  for (let j = 0; j < lon; j++) faces.push({ v: [0, idx(1, j + 1), idx(1, j)], smooth: true });
  for (let i = 1; i < lat - 1; i++)
    for (let j = 0; j < lon; j++) faces.push({ v: [idx(i, j), idx(i, j + 1), idx(i + 1, j + 1), idx(i + 1, j)], smooth: true });
  for (let j = 0; j < lon; j++) faces.push({ v: [S, idx(lat - 1, j), idx(lat - 1, j + 1)], smooth: true });
  return orient({ verts, faces });
}

export interface View {
  yaw: number;
  pitch: number;
  scale: number;
  cx: number;
  cy: number;
}

export function project(p: V3, v: View): { x: number; y: number; z: number } {
  const cy = Math.cos(v.yaw);
  const sy = Math.sin(v.yaw);
  const cp = Math.cos(v.pitch);
  const sp = Math.sin(v.pitch);
  const x1 = p[0] * cy + p[2] * sy;
  const z1 = -p[0] * sy + p[2] * cy;
  const y2 = p[1] * cp - z1 * sp;
  const z2 = p[1] * sp + z1 * cp;
  return { x: v.cx + v.scale * x1, y: v.cy - v.scale * y2, z: z2 };
}

/** Draw a mesh. `cls` picks the colour family; `ghost` draws a faint wireframe only. */
export function drawMesh(svg: Element, m: Mesh, v: View, cls = 'm0', ghost = false) {
  const P = m.verts.map((p) => project(p, v));
  const light = norm([-0.45, 0.6, 1]);
  const info = m.faces.map((f) => {
    const a = m.verts[f.v[0]];
    const b = m.verts[f.v[1]];
    const c = m.verts[f.v[2]];
    // normal in view space
    const n3 = norm(cross(sub(b, a), sub(c, a)));
    const pn = project([n3[0], n3[1], n3[2]], { ...v, cx: 0, cy: 0, scale: 1 });
    const nv: V3 = norm([pn.x, -pn.y, pn.z]);
    const front = nv[2] > 1e-4;
    const depth = f.v.reduce((s, i) => s + P[i].z, 0) / f.v.length;
    return { f, front, depth, shade: Math.max(0, dot(nv, light)) };
  });
  // faces
  const order = info.slice().sort((p, q) => p.depth - q.depth);
  for (const it of order) {
    if (!it.front && (it.f.smooth || ghost)) continue;
    const pts = it.f.v.map((i) => `${P[i].x},${P[i].y}`).join(' ');
    const op = ghost ? 0.08 : it.front ? 0.16 + 0.5 * it.shade : 0.05;
    const poly = el('polygon', { points: pts, 'fill-opacity': op.toFixed(3) }, `face ${cls}`);
    svg.appendChild(poly);
  }
  // edges
  const edges = new Map<string, number[]>();
  m.faces.forEach((f, fi) =>
    f.v.forEach((a, k) => {
      const b = f.v[(k + 1) % f.v.length];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!edges.has(key)) edges.set(key, []);
      edges.get(key)!.push(fi);
    }),
  );
  for (const [key, fs] of edges) {
    const [a, b] = key.split('-').map(Number);
    const fronts = fs.map((fi) => info[fi].front);
    const feature = fs.some((fi) => !m.faces[fi].smooth);
    const silhouette = fronts.length === 2 && fronts[0] !== fronts[1];
    if (!feature && !silhouette) continue;
    const visible = fronts.some((x) => x);
    if (ghost && !visible) continue;
    svg.appendChild(
      el('line', { x1: P[a].x, y1: P[a].y, x2: P[b].x, y2: P[b].y }, `edge ${cls} ${visible || silhouette ? '' : 'hidden'} ${ghost ? 'ghost' : ''}`),
    );
  }
}

export function drawOverlay(svg: Element, ov: Overlay[], v: View) {
  for (const o of ov) {
    const a = project(o.a, v);
    const b = project(o.b, v);
    svg.appendChild(el('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y }, `ov ${o.cls}`));
    if (o.label) {
      const t = el('text', { x: (a.x + b.x) / 2 + 8, y: (a.y + b.y) / 2 - 4 }, `ovl ${o.cls}`);
      t.textContent = o.label;
      svg.appendChild(t);
    }
  }
}

/** Wire drag-to-rotate on an SVG. */
export function rotatable(svg: SVGSVGElement, view: View, redraw: () => void) {
  let last: { x: number; y: number } | null = null;
  svg.addEventListener('pointerdown', (e) => {
    last = { x: e.clientX, y: e.clientY };
    svg.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  svg.addEventListener('pointermove', (e) => {
    if (!last) return;
    view.yaw += (e.clientX - last.x) * 0.012;
    view.pitch = Math.max(-1.45, Math.min(1.45, view.pitch + (e.clientY - last.y) * 0.012));
    last = { x: e.clientX, y: e.clientY };
    redraw();
  });
  const stop = () => (last = null);
  svg.addEventListener('pointerup', stop);
  svg.addEventListener('pointercancel', stop);
}

export function meshRadius(m: Mesh) {
  return Math.max(...m.verts.map((p) => Math.hypot(...p)));
}
