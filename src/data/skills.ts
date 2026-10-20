// Algebra skills the geometry lessons rely on.
// Each one is shown as a "تحتاج هنا" card right where a lesson first needs it:
// a two-line review, one worked line, and a quick check.
// Text may contain inline math between $...$ (rendered at build time).

export interface Skill {
  id: string;
  ar: string;
  en: string;
  review: string;
  example: string;
  check: { q: string; answer: number };
  usedIn: string[]; // lesson ids
}

export const skills: Skill[] = [
  {
    id: 'alg-factor-common',
    ar: 'إخراج العامل المشترك',
    en: 'Factoring out a common factor',
    review:
      'إذا تكرر عدد في كل حدود المجموع، أخرجه خارج القوس. هذه هي خاصية التوزيع معكوسة: $ab + ac = a(b + c)$.',
    example: '$6x + 4 = 2(3x + 2)$، فالمقدار مضاعف للعدد $2$ مهما كانت قيمة $x$.',
    check: { q: 'إذا كان $5a + 15 = 5(a + k)$، فما قيمة $k$؟', answer: 3 },
    usedIn: ['1.1'],
  },
  {
    id: 'alg-square-fraction',
    ar: 'تربيع الكسور',
    en: 'Squaring fractions',
    review:
      'لتربيع كسر، ربّع البسط والمقام كلًّا على حدة. والكسر الموجب الأصغر من 1 يصغر عند تربيعه، لأنك تأخذ جزءًا من جزء.',
    example: '$\\left(\\tfrac{2}{3}\\right)^2 = \\tfrac{4}{9}$، و $\\tfrac{4}{9} < \\tfrac{2}{3}$.',
    check: { q: 'ما قيمة $(0.3)^2$؟', answer: 0.09 },
    usedIn: ['1.1'],
  },
  {
    id: 'alg-linear-eq',
    ar: 'حل المعادلة الخطية',
    en: 'Solving linear equations',
    review:
      'اجمع حدود المتغير في طرف والأعداد في الطرف الآخر، ثم اقسم على معامل المتغير. ما تفعله بطرف تفعله بالآخر.',
    example: '$3x + 5 = 2x - 7 \\Rightarrow 3x - 2x = -7 - 5 \\Rightarrow x = -12$',
    check: { q: 'حل المعادلة: $4x - 3 = 2x + 9$. ما قيمة $x$؟', answer: 6 },
    usedIn: ['1.3', '1.4', '1.5', '1.6', '2.6', '3.3', '3.4'],
  },
  {
    id: 'alg-substitution',
    ar: 'التعويض في صيغة',
    en: 'Evaluating a formula',
    review: 'ضع القيم المعطاة مكان المتغيرات، ثم احسب بترتيب العمليات: الأقواس، ثم الأسس، ثم الضرب والقسمة، ثم الجمع والطرح.',
    example: 'إذا كان $P = 2l + 2w$ و $l = 7$ و $w = 3$، فإن $P = 14 + 6 = 20$.',
    check: { q: 'احسب $A = \\tfrac{1}{2}bh$ عندما $b = 10$ و $h = 6$.', answer: 30 },
    usedIn: ['1.7'],
  },
  {
    id: 'alg-midpoint',
    ar: 'صيغة نقطة المنتصف',
    en: 'Midpoint formula',
    review: 'منتصف القطعة هو متوسط الإحداثيات: اجمع السينات واقسم على 2، واجمع الصادات واقسم على 2.',
    example: 'منتصف القطعة بين $(2, 8)$ و $(6, 4)$ هو $\\left(\\tfrac{2+6}{2}, \\tfrac{8+4}{2}\\right) = (4, 6)$.',
    check: { q: 'ما الإحداثي السيني لمنتصف القطعة بين $(-3, 1)$ و $(9, 5)$؟', answer: 3 },
    usedIn: ['4.7'],
  },
  {
    id: 'alg-distance',
    ar: 'صيغة المسافة',
    en: 'Distance formula',
    review: 'المسافة بين نقطتين هي وتر مثلث قائم ضلعاه فرق السينات وفرق الصادات: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
    example: 'بين $(1, 2)$ و $(4, 6)$: $\\ d = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
    check: { q: 'ما المسافة بين $(0, 0)$ و $(6, 8)$؟', answer: 10 },
    usedIn: ['4.7'],
  },
  {
    id: 'alg-slope',
    ar: 'ميل المستقيم',
    en: 'Slope',
    review: 'الميل هو التغير الرأسي مقسومًا على التغير الأفقي: $m = \\tfrac{y_2 - y_1}{x_2 - x_1}$. موجب يعني صاعدًا، وسالب يعني نازلًا.',
    example: 'بين $(1, 3)$ و $(5, 11)$: $\\ m = \\tfrac{11 - 3}{5 - 1} = \\tfrac{8}{4} = 2$.',
    check: { q: 'ما ميل المستقيم المار بالنقطتين $(2, 7)$ و $(4, 1)$؟', answer: -3 },
    usedIn: ['3.6', '4.7'],
  },
  {
    id: 'alg-proportion',
    ar: 'حل التناسب',
    en: 'Solving proportions',
    review: 'في التناسب $\\tfrac{a}{b} = \\tfrac{c}{d}$ يكون حاصل ضرب الطرفين مساويًا لحاصل ضرب الوسطين: $ad = bc$.',
    example: '$\\tfrac{x}{6} = \\tfrac{10}{15} \\Rightarrow 15x = 60 \\Rightarrow x = 4$',
    check: { q: 'إذا كان $\\tfrac{3}{x} = \\tfrac{9}{12}$، فما قيمة $x$؟', answer: 4 },
    usedIn: ['8.1', '8.2', '8.3', '8.6'],
  },
  {
    id: 'alg-radicals',
    ar: 'تبسيط الجذور',
    en: 'Simplifying radicals',
    review: 'ابحث عن أكبر مربع كامل يقسم العدد تحت الجذر، وأخرج جذره: $\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}$.',
    example: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$',
    check: { q: 'إذا كان $\\sqrt{72} = k\\sqrt{2}$، فما قيمة $k$؟', answer: 6 },
    usedIn: ['9.2', '9.3', '9.4'],
  },
  {
    id: 'alg-simple-quadratic',
    ar: 'معادلات تربيعية بسيطة',
    en: 'Simple quadratic equations',
    review: 'إذا كان $x^2 = c$ و $c > 0$ فإن $x = \\pm\\sqrt{c}$. وفي الهندسة نأخذ القيمة الموجبة عادةً لأن الطول لا يكون سالبًا.',
    example: '$x^2 + 9 = 25 \\Rightarrow x^2 = 16 \\Rightarrow x = 4$ (طول)',
    check: { q: 'ما الطول الموجب $x$ الذي يحقق $x^2 + 36 = 100$؟', answer: 8 },
    usedIn: ['9.2', '10.5'],
  },
  {
    id: 'alg-absolute-value',
    ar: 'القيمة المطلقة',
    en: 'Absolute value',
    review: 'القيمة المطلقة $|x|$ هي بُعد العدد عن الصفر، فهي لا تكون سالبة أبدًا. ولهذا $|a - b| = |b - a|$: ترتيب الطرح لا يغيّر المسافة.',
    example: '$|3 - 8| = |-5| = 5$ و $|8 - 3| = |5| = 5$',
    check: { q: 'ما قيمة $|-4 - 9|$؟', answer: 13 },
    usedIn: ['1.3'],
  },
  {
    id: 'alg-squares-roots',
    ar: 'المربعات والجذور التربيعية',
    en: 'Squares and square roots',
    review: 'مربع العدد السالب موجب، لأن سالب × سالب = موجب. والجذر التربيعي $\\sqrt{n}$ هو العدد الموجب الذي مربعه $n$. إذا لم يكن $n$ مربعًا كاملًا نقرّب الجذر.',
    example: '$(-6)^2 = 36$، و $\\sqrt{36 + 64} = \\sqrt{100} = 10$، و $\\sqrt{20} \\approx 4.47$',
    check: { q: 'ما قيمة $\\sqrt{(-5)^2 + 12^2}$؟', answer: 13 },
    usedIn: ['1.3', '9.2'],
  },
  {
    id: 'alg-solve-for-y',
    ar: 'إعادة ترتيب المعادلة لعزل y',
    en: 'Solving for y',
    review: 'لتعرف ميل مستقيم من معادلة مثل $2x + 3y = 12$، اعزل $y$ في طرف وحده: انقل حد $x$ ثم اقسم على معامل $y$. الناتج بالصيغة $y = mx + b$.',
    example: '$2x + 3y = 12 \\Rightarrow 3y = -2x + 12 \\Rightarrow y = -\\tfrac{2}{3}x + 4$، فالميل $-\\tfrac{2}{3}$.',
    check: { q: 'ما ميل المستقيم $4x + 2y = 10$؟', answer: -2 },
    usedIn: ['3.6'],
  },
  {
    id: 'alg-neg-reciprocal',
    ar: 'المقلوب السالب',
    en: 'Negative reciprocal',
    review: 'المقلوب السالب للعدد: اقلب الكسر وغيّر الإشارة. حاصل ضرب العدد في مقلوبه السالب يساوي $-1$ دائمًا.',
    example: 'المقلوب السالب لـ $\\tfrac{2}{3}$ هو $-\\tfrac{3}{2}$، ولـ $-4$ هو $\\tfrac{1}{4}$، لأن $(-4)\\left(\\tfrac{1}{4}\\right) = -1$.',
    check: { q: 'ما المقلوب السالب للعدد $-\\tfrac{1}{5}$؟', answer: 5 },
    usedIn: ['3.7'],
  },
];

export const skillById = Object.fromEntries(skills.map((s) => [s.id, s]));
