// Reads a typed answer as a number. Accepts Arabic or Persian digits,
// decimals (3.5 or ٣٫٥), fractions (9/100) and mixed numbers (1 1/2).
// Returns NaN when the text is not a number.
export function parseAnswer(text: string): number {
  let s = text
    .trim()
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[−–—]/g, '-')
    .replace(/[÷⁄∕／]/g, '/')
    .replace(/٫/g, '.')
    .replace(/[,٬]/g, '')
    .replace(/^\+/, '');
  const num = String.raw`\d+(?:\.\d+)?|\.\d+`;
  // mixed number: 1 1/2  or  -2 3/4
  let m = s.match(new RegExp(`^(-?)(\\d+)\\s+(${num})\\s*/\\s*(${num})$`));
  if (m) {
    const v = Number(m[2]) + Number(m[3]) / Number(m[4]);
    return Number(m[4]) === 0 ? NaN : m[1] ? -v : v;
  }
  s = s.replace(/\s+/g, '');
  // fraction: 9/100, -1/4, 1/-4
  m = s.match(new RegExp(`^(-?)(${num})/(-?)(${num})$`));
  if (m) {
    if (Number(m[4]) === 0) return NaN;
    const v = Number(m[2]) / Number(m[4]);
    return (m[1] === '-') !== (m[3] === '-') ? -v : v;
  }
  return new RegExp(`^-?(?:${num})$`).test(s) ? Number(s) : NaN;
}

