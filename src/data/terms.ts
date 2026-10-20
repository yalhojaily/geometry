// The theorem bank: every definition, postulate and theorem gets a stable id.
// `dependsOn` lists the ids it is built on; later this feeds the knowledge map.

export type TermKind = 'definition' | 'postulate' | 'theorem';

export interface Term {
  id: string;
  kind: TermKind;
  lesson: string;
  en: string;
  ar: string;
  statement: string; // Arabic, may contain inline KaTeX between $...$
  dependsOn: string[];
}

export const terms: Term[] = [
  {
    id: 'def-pattern',
    kind: 'definition',
    lesson: '1.1',
    en: 'Pattern',
    ar: 'النمط',
    statement: 'قاعدة ثابتة تتكرر في سلسلة من الأعداد أو الأشكال، تسمح لنا بتوقّع العنصر التالي.',
    dependsOn: [],
  },
  {
    id: 'def-conjecture',
    kind: 'definition',
    lesson: '1.1',
    en: 'Conjecture',
    ar: 'التخمين',
    statement: 'عبارة نعتقد أنها صحيحة لأنها تتفق مع ما لاحظناه، لكنها لم تُبرهَن بعد.',
    dependsOn: ['def-pattern'],
  },
  {
    id: 'def-inductive-reasoning',
    kind: 'definition',
    lesson: '1.1',
    en: 'Inductive reasoning',
    ar: 'الاستدلال الاستقرائي',
    statement: 'الوصول إلى تخمين عام انطلاقًا من ملاحظة أمثلة خاصة والبحث عن نمط فيها.',
    dependsOn: ['def-pattern', 'def-conjecture'],
  },
  {
    id: 'def-counterexample',
    kind: 'definition',
    lesson: '1.1',
    en: 'Counterexample',
    ar: 'المثال المضاد',
    statement: 'مثال واحد يحقق شروط التخمين لكن نتيجته لا تتحقق. مثال مضاد واحد يكفي لإثبات أن التخمين خاطئ.',
    dependsOn: ['def-conjecture'],
  },
];

export const termById = Object.fromEntries(terms.map((t) => [t.id, t]));
