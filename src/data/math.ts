import katex from 'katex';

/**
 * Render `$...$` segments of a plain string to KaTeX HTML (build time).
 * Other text is escaped; `**bold**` becomes <strong>.
 */
export function renderMath(text: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return text
    .split(/(\$[^$]+\$)/g)
    .map((part) =>
      part.startsWith('$') && part.endsWith('$') && part.length > 2
        ? katex.renderToString(part.slice(1, -1), { throwOnError: true })
        : escape(part).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
    )
    .join('');
}
