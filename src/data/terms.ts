// The theorem bank: every definition, postulate and theorem gets a stable id.
// `dependsOn` lists the ids it is built on; later this feeds the knowledge map.

export type TermKind = 'undefined' | 'definition' | 'postulate' | 'theorem' | 'formula';

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
  {
    id: 'undef-point',
    kind: 'undefined',
    lesson: '1.2',
    en: 'Point',
    ar: 'النقطة',
    statement: 'موضع فقط، ليس له طول ولا عرض ولا سُمك. نرسمها نقطة صغيرة ونسميها بحرف كبير مثل $A$.',
    dependsOn: [],
  },
  {
    id: 'undef-line',
    kind: 'undefined',
    lesson: '1.2',
    en: 'Line',
    ar: 'المستقيم',
    statement: 'يمتد بلا نهاية في اتجاهين، وليس له عرض. نسميه بنقطتين عليه $\\overleftrightarrow{AB}$ أو بحرف صغير مثل $\\ell$.',
    dependsOn: ['undef-point'],
  },
  {
    id: 'undef-plane',
    kind: 'undefined',
    lesson: '1.2',
    en: 'Plane',
    ar: 'المستوى',
    statement: 'سطح مستوٍ يمتد بلا نهاية في كل الاتجاهات، وليس له سُمك. نسميه بثلاث نقاط عليه ليست على مستقيم واحد، أو بحرف كبير مثل $M$.',
    dependsOn: ['undef-point', 'undef-line'],
  },
  {
    id: 'def-collinear',
    kind: 'definition',
    lesson: '1.2',
    en: 'Collinear points',
    ar: 'نقاط على استقامة واحدة',
    statement: 'نقاط تقع كلها على مستقيم واحد.',
    dependsOn: ['undef-point', 'undef-line'],
  },
  {
    id: 'def-coplanar',
    kind: 'definition',
    lesson: '1.2',
    en: 'Coplanar points',
    ar: 'نقاط مستوية',
    statement: 'نقاط تقع كلها في مستوى واحد.',
    dependsOn: ['undef-point', 'undef-plane'],
  },
  {
    id: 'def-segment',
    kind: 'definition',
    lesson: '1.2',
    en: 'Line segment',
    ar: 'القطعة المستقيمة',
    statement: 'جزء من المستقيم يتكون من نقطتين $A$ و $B$ تسميان **طرفي القطعة**، وكل النقاط الواقعة بينهما. نكتبها $\\overline{AB}$.',
    dependsOn: ['undef-line'],
  },
  {
    id: 'def-ray',
    kind: 'definition',
    lesson: '1.2',
    en: 'Ray',
    ar: 'نصف المستقيم (الشعاع)',
    statement: 'جزء من المستقيم يبدأ من نقطة $A$ تسمى **نقطة البداية**، ويمتد بلا نهاية مرورًا بالنقطة $B$. نكتبه $\\overrightarrow{AB}$، ونقطة البداية تُكتب أولًا دائمًا.',
    dependsOn: ['undef-line'],
  },
  {
    id: 'def-opposite-rays',
    kind: 'definition',
    lesson: '1.2',
    en: 'Opposite rays',
    ar: 'نصفا مستقيم متعاكسان',
    statement: 'إذا وقعت النقطة $C$ بين $A$ و $B$ على مستقيم، فإن $\\overrightarrow{CA}$ و $\\overrightarrow{CB}$ متعاكسان: لهما نقطة البداية نفسها ويتجهان في اتجاهين متضادين، ومعًا يكوّنان المستقيم كاملًا.',
    dependsOn: ['def-ray', 'def-collinear'],
  },
  {
    id: 'def-intersection',
    kind: 'definition',
    lesson: '1.2',
    en: 'Intersection',
    ar: 'التقاطع',
    statement: 'مجموعة النقاط المشتركة بين شكلين أو أكثر.',
    dependsOn: ['undef-point'],
  },
  {
    id: 'post-ruler',
    kind: 'postulate',
    lesson: '1.3',
    en: 'Ruler Postulate',
    ar: 'مسلّمة المسطرة',
    statement: 'يمكن مطابقة نقاط أي مستقيم مع الأعداد الحقيقية واحدًا لواحد، والعدد المقابل لكل نقطة يسمى **إحداثيها**. والمسافة بين نقطتين إحداثياهما $x_1$ و $x_2$ هي $|x_2 - x_1|$.',
    dependsOn: ['undef-point', 'undef-line'],
  },
  {
    id: 'def-length',
    kind: 'definition',
    lesson: '1.3',
    en: 'Distance and length',
    ar: 'المسافة والطول',
    statement: 'المسافة بين النقطتين $A$ و $B$ تُكتب $AB$ دون خط فوقها، وهي أيضًا **طول** القطعة $\\overline{AB}$. الطول عدد، والقطعة شكل.',
    dependsOn: ['def-segment', 'post-ruler'],
  },
  {
    id: 'def-between',
    kind: 'definition',
    lesson: '1.3',
    en: 'Between',
    ar: 'تقع بين',
    statement: 'تقع النقطة $B$ **بين** $A$ و $C$ إذا كانت النقاط الثلاث على استقامة واحدة، و $B$ على القطعة $\\overline{AC}$ وليست أحد طرفيها.',
    dependsOn: ['def-collinear', 'def-segment'],
  },
  {
    id: 'post-segment-addition',
    kind: 'postulate',
    lesson: '1.3',
    en: 'Segment Addition Postulate',
    ar: 'مسلّمة جمع القطع',
    statement: 'إذا وقعت $B$ بين $A$ و $C$ فإن $AB + BC = AC$. والعكس صحيح: إذا كانت $A$ و $B$ و $C$ على استقامة واحدة و $AB + BC = AC$ فإن $B$ تقع بين $A$ و $C$.',
    dependsOn: ['def-between', 'def-length'],
  },
  {
    id: 'formula-distance',
    kind: 'formula',
    lesson: '1.3',
    en: 'Distance Formula',
    ar: 'صيغة المسافة',
    statement: 'المسافة بين النقطتين $A(x_1, y_1)$ و $B(x_2, y_2)$ في المستوى الإحداثي هي $AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
    dependsOn: ['def-length'],
  },
  {
    id: 'def-congruent-segments',
    kind: 'definition',
    lesson: '1.3',
    en: 'Congruent segments',
    ar: 'القطع المتطابقة',
    statement: 'قطعتان لهما الطول نفسه. نكتب $\\overline{AB} \\cong \\overline{CD}$ (القطعتان متطابقتان) وهذا يعني $AB = CD$ (الطولان متساويان). ونرسم على كل منهما العلامة نفسها.',
    dependsOn: ['def-length'],
  },
];

export const termById = Object.fromEntries(terms.map((t) => [t.id, t]));
