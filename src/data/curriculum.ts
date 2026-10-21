// The full course map, following the textbook's chapter and lesson numbering.
// `ready: true` marks lessons that have a page under src/pages/lessons/.

export interface Lesson {
  id: string; // "1.1"
  en: string;
  ar: string;
  ready?: boolean;
}

export interface Chapter {
  n: number;
  en: string;
  ar: string;
  lessons: Lesson[];
}

export const chapters: Chapter[] = [
  {
    n: 1, en: 'Basics of Geometry', ar: 'أساسيات الهندسة',
    lessons: [
      { id: '1.1', en: 'Patterns and Inductive Reasoning', ar: 'الأنماط والاستدلال الاستقرائي', ready: true },
      { id: '1.2', en: 'Points, Lines, and Planes', ar: 'النقاط والمستقيمات والمستويات', ready: true },
      { id: '1.3', en: 'Segments and Their Measures', ar: 'القطع المستقيمة وأطوالها', ready: true },
      { id: '1.4', en: 'Angles and Their Measures', ar: 'الزوايا وقياساتها', ready: true },
      { id: '1.5', en: 'Segment and Angle Bisectors', ar: 'منصفات القطع والزوايا', ready: true },
      { id: '1.6', en: 'Angle Pair Relationships', ar: 'العلاقات بين أزواج الزوايا', ready: true },
      { id: '1.7', en: 'Introduction to Perimeter, Circumference, and Area', ar: 'مدخل إلى المحيط والمساحة', ready: true },
    ],
  },
  {
    n: 2, en: 'Reasoning and Proof', ar: 'الاستدلال والبرهان',
    lessons: [
      { id: '2.1', en: 'Conditional Statements', ar: 'العبارات الشرطية', ready: true },
      { id: '2.2', en: 'Definitions and Biconditional Statements', ar: 'التعريفات والعبارات الشرطية الثنائية', ready: true },
      { id: '2.3', en: 'Deductive Reasoning', ar: 'الاستدلال الاستنتاجي', ready: true },
      { id: '2.4', en: 'Reasoning with Properties from Algebra', ar: 'الاستدلال بخصائص الجبر', ready: true },
      { id: '2.5', en: 'Proving Statements about Segments', ar: 'برهان عبارات عن القطع المستقيمة', ready: true },
      { id: '2.6', en: 'Proving Statements about Angles', ar: 'برهان عبارات عن الزوايا', ready: true },
    ],
  },
  {
    n: 3, en: 'Perpendicular and Parallel Lines', ar: 'المستقيمات المتعامدة والمتوازية',
    lessons: [
      { id: '3.1', en: 'Lines and Angles', ar: 'المستقيمات والزوايا', ready: true },
      { id: '3.2', en: 'Proof and Perpendicular Lines', ar: 'البرهان والمستقيمات المتعامدة', ready: true },
      { id: '3.3', en: 'Parallel Lines and Transversals', ar: 'المستقيمات المتوازية والقواطع', ready: true },
      { id: '3.4', en: 'Proving Lines are Parallel', ar: 'إثبات توازي المستقيمات', ready: true },
      { id: '3.5', en: 'Using Properties of Parallel Lines', ar: 'استخدام خصائص المستقيمات المتوازية', ready: true },
      { id: '3.6', en: 'Parallel Lines in the Coordinate Plane', ar: 'المستقيمات المتوازية في المستوى الإحداثي', ready: true },
      { id: '3.7', en: 'Perpendicular Lines in the Coordinate Plane', ar: 'المستقيمات المتعامدة في المستوى الإحداثي', ready: true },
    ],
  },
  {
    n: 4, en: 'Congruent Triangles', ar: 'المثلثات المتطابقة',
    lessons: [
      { id: '4.1', en: 'Triangles and Angles', ar: 'المثلثات والزوايا', ready: true },
      { id: '4.2', en: 'Congruence and Triangles', ar: 'التطابق والمثلثات', ready: true },
      { id: '4.3', en: 'Proving Triangles are Congruent: SSS and SAS', ar: 'إثبات تطابق المثلثات: SSS و SAS', ready: true },
      { id: '4.4', en: 'Proving Triangles are Congruent: ASA and AAS', ar: 'إثبات تطابق المثلثات: ASA و AAS', ready: true },
      { id: '4.5', en: 'Using Congruent Triangles', ar: 'استخدام المثلثات المتطابقة', ready: true },
      { id: '4.6', en: 'Isosceles, Equilateral, and Right Triangles', ar: 'المثلثات المتطابقة الضلعين والمتطابقة الأضلاع والقائمة', ready: true },
      { id: '4.7', en: 'Triangles and Coordinate Proof', ar: 'المثلثات والبرهان الإحداثي', ready: true },
    ],
  },
  {
    n: 5, en: 'Properties of Triangles', ar: 'خصائص المثلثات',
    lessons: [
      { id: '5.1', en: 'Perpendiculars and Bisectors', ar: 'الأعمدة والمنصفات', ready: true },
      { id: '5.2', en: 'Bisectors of a Triangle', ar: 'منصفات المثلث', ready: true },
      { id: '5.3', en: 'Medians and Altitudes of a Triangle', ar: 'المتوسطات والارتفاعات في المثلث', ready: true },
      { id: '5.4', en: 'Midsegment Theorem', ar: 'نظرية القطعة المنصفة', ready: true },
      { id: '5.5', en: 'Inequalities in One Triangle', ar: 'المتباينات في مثلث واحد', ready: true },
      { id: '5.6', en: 'Indirect Proof and Inequalities in Two Triangles', ar: 'البرهان غير المباشر والمتباينات في مثلثين', ready: true },
    ],
  },
  {
    n: 6, en: 'Quadrilaterals', ar: 'الأشكال الرباعية',
    lessons: [
      { id: '6.1', en: 'Polygons', ar: 'المضلعات', ready: true },
      { id: '6.2', en: 'Properties of Parallelograms', ar: 'خصائص متوازي الأضلاع', ready: true },
      { id: '6.3', en: 'Proving Quadrilaterals are Parallelograms', ar: 'إثبات أن الشكل الرباعي متوازي أضلاع', ready: true },
      { id: '6.4', en: 'Rhombuses, Rectangles, and Squares', ar: 'المعين والمستطيل والمربع', ready: true },
      { id: '6.5', en: 'Trapezoids and Kites', ar: 'شبه المنحرف والطائرة الورقية', ready: true },
      { id: '6.6', en: 'Special Quadrilaterals', ar: 'أشكال رباعية خاصة', ready: true },
      { id: '6.7', en: 'Areas of Triangles and Quadrilaterals', ar: 'مساحات المثلثات والأشكال الرباعية', ready: true },
    ],
  },
  {
    n: 7, en: 'Transformations', ar: 'التحويلات الهندسية',
    lessons: [
      { id: '7.1', en: 'Rigid Motion in a Plane', ar: 'الحركة الصلبة في المستوى', ready: true },
      { id: '7.2', en: 'Reflections', ar: 'الانعكاسات', ready: true },
      { id: '7.3', en: 'Rotations', ar: 'الدورانات', ready: true },
      { id: '7.4', en: 'Translations and Vectors', ar: 'الانسحابات والمتجهات', ready: true },
      { id: '7.5', en: 'Glide Reflections and Compositions', ar: 'الانعكاس الانزلاقي وتركيب التحويلات', ready: true },
      { id: '7.6', en: 'Frieze Patterns', ar: 'أنماط الأفاريز', ready: true },
    ],
  },
  {
    n: 8, en: 'Similarity', ar: 'التشابه',
    lessons: [
      { id: '8.1', en: 'Ratio and Proportion', ar: 'النسبة والتناسب', ready: true },
      { id: '8.2', en: 'Problem Solving in Geometry with Proportions', ar: 'حل المسائل الهندسية بالتناسب', ready: true },
      { id: '8.3', en: 'Similar Polygons', ar: 'المضلعات المتشابهة', ready: true },
      { id: '8.4', en: 'Similar Triangles', ar: 'المثلثات المتشابهة', ready: true },
      { id: '8.5', en: 'Proving Triangles are Similar', ar: 'إثبات تشابه المثلثات', ready: true },
      { id: '8.6', en: 'Proportions and Similar Triangles', ar: 'التناسب والمثلثات المتشابهة', ready: true },
      { id: '8.7', en: 'Dilations', ar: 'التمدد', ready: true },
    ],
  },
  {
    n: 9, en: 'Right Triangles and Trigonometry', ar: 'المثلثات القائمة وحساب المثلثات',
    lessons: [
      { id: '9.1', en: 'Similar Right Triangles', ar: 'المثلثات القائمة المتشابهة', ready: true },
      { id: '9.2', en: 'The Pythagorean Theorem', ar: 'نظرية فيثاغورس', ready: true },
      { id: '9.3', en: 'The Converse of the Pythagorean Theorem', ar: 'عكس نظرية فيثاغورس', ready: true },
      { id: '9.4', en: 'Special Right Triangles', ar: 'المثلثات القائمة الخاصة', ready: true },
      { id: '9.5', en: 'Trigonometric Ratios', ar: 'النسب المثلثية', ready: true },
      { id: '9.6', en: 'Solving Right Triangles', ar: 'حل المثلثات القائمة', ready: true },
      { id: '9.7', en: 'Vectors', ar: 'المتجهات', ready: true },
    ],
  },
  {
    n: 10, en: 'Circles', ar: 'الدوائر',
    lessons: [
      { id: '10.1', en: 'Tangents to Circles', ar: 'مماسات الدائرة' },
      { id: '10.2', en: 'Arcs and Chords', ar: 'الأقواس والأوتار' },
      { id: '10.3', en: 'Inscribed Angles', ar: 'الزوايا المحيطية' },
      { id: '10.4', en: 'Other Angle Relationships in Circles', ar: 'علاقات زوايا أخرى في الدائرة' },
      { id: '10.5', en: 'Segment Lengths in Circles', ar: 'أطوال القطع في الدائرة' },
      { id: '10.6', en: 'Equations of Circles', ar: 'معادلات الدوائر' },
      { id: '10.7', en: 'Locus', ar: 'المحل الهندسي' },
    ],
  },
  {
    n: 11, en: 'Area of Polygons and Circles', ar: 'مساحات المضلعات والدوائر',
    lessons: [
      { id: '11.1', en: 'Angle Measures in Polygons', ar: 'قياسات الزوايا في المضلعات' },
      { id: '11.2', en: 'Areas of Regular Polygons', ar: 'مساحات المضلعات المنتظمة' },
      { id: '11.3', en: 'Perimeters and Areas of Similar Figures', ar: 'محيطات ومساحات الأشكال المتشابهة' },
      { id: '11.4', en: 'Circumference and Arc Length', ar: 'محيط الدائرة وطول القوس' },
      { id: '11.5', en: 'Areas of Circles and Sectors', ar: 'مساحات الدوائر والقطاعات' },
      { id: '11.6', en: 'Geometric Probability', ar: 'الاحتمال الهندسي' },
    ],
  },
  {
    n: 12, en: 'Surface Area and Volume', ar: 'المساحة السطحية والحجم',
    lessons: [
      { id: '12.1', en: 'Exploring Solids', ar: 'استكشاف المجسمات' },
      { id: '12.2', en: 'Surface Area of Prisms and Cylinders', ar: 'المساحة السطحية للمنشورات والأسطوانات' },
      { id: '12.3', en: 'Surface Area of Pyramids and Cones', ar: 'المساحة السطحية للأهرام والمخاريط' },
      { id: '12.4', en: 'Volume of Prisms and Cylinders', ar: 'حجوم المنشورات والأسطوانات' },
      { id: '12.5', en: 'Volume of Pyramids and Cones', ar: 'حجوم الأهرام والمخاريط' },
      { id: '12.6', en: 'Surface Area and Volume of Spheres', ar: 'المساحة السطحية والحجم للكرة' },
      { id: '12.7', en: 'Similar Solids', ar: 'المجسمات المتشابهة' },
    ],
  },
];

export const allLessons = chapters.flatMap((c) => c.lessons.map((l) => ({ ...l, chapter: c })));

export function lessonSlug(id: string): string {
  return id.replace('.', '-');
}

export function findLesson(id: string) {
  const i = allLessons.findIndex((l) => l.id === id);
  return { lesson: allLessons[i], prev: allLessons[i - 1], next: allLessons[i + 1] };
}
