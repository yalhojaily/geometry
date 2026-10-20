# هندسة: شرح تفاعلي للهندسة الإقليدية

موقع عربي تفاعلي يشرح منهج الهندسة للثانوية والجامعة، بنفس ترتيب فصول كتاب Geometry (12 فصلًا، 80 درسًا).

## التشغيل

```bash
npm install
npm run dev      # http://localhost:4321/geometry/
npm run build    # فحص الأنواع ثم بناء الموقع في dist/
```

## النشر على GitHub Pages

يُنشر الموقع تلقائيًا عند كل دفع إلى `main` عبر `.github/workflows/deploy.yml`.
مرة واحدة فقط: من إعدادات الريبو ← Pages ← Source اختر **GitHub Actions**.
الرابط بعدها: `https://yalhojaily.github.io/geometry/`

## البنية

```
src/
  data/
    curriculum.ts     خريطة الفصول والدروس كاملة (ready: true للدروس الجاهزة)
    terms.ts          بنك التعريفات والمسلّمات والنظريات بمعرّفات ثابتة و dependsOn
    skills.ts         بنك مهارات الجبر التي تحتاجها الدروس، مع usedIn لكل مهارة
  layouts/
    Base.astro        الهيكل العام: RTL، الخطوط، الوضع الليلي
    Lesson.astro      قالب الدرس: العنوان، "لماذا هذا الدرس؟"، التقدم، السابق/التالي
  components/
    Term.astro        بطاقة تعريف/نظرية/مسلّمة من بنك المصطلحات
    Prereq.astro      بطاقة "تحتاج هنا": مراجعة جبر سريعة مع سؤال تحقق
    Callout.astro     تنبيه (خطأ شائع / فكرة)
    Example.astro     مثال محلول تُكشف خطواته واحدة تلو الأخرى
    Quiz.astro        سؤال بتصحيح فوري وتلميح وشرح
    DotPattern.astro, CircleRegions.astro, PrimeConjecture.astro   تفاعليات الدرس 1.1
  pages/
    index.astro       الفهرس
    lessons/1-1.mdx   الدرس 1.1
```

## إضافة درس جديد

1. أضف مصطلحات الدرس إلى `src/data/terms.ts`، وأضف معرّف الدرس إلى `usedIn` لمهارات الجبر التي يحتاجها في `src/data/skills.ts`.
   ضع `<Prereq id="..." />` قبل أول موضع يحتاج المهارة؛ وتظهر روابطها أعلى الدرس تلقائيًا.
2. أنشئ `src/pages/lessons/<الفصل>-<الدرس>.mdx` على نفس قالب `1-1.mdx`.
3. اجعل `ready: true` للدرس في `src/data/curriculum.ts`.

الرياضيات تُكتب بصيغة LaTeX بين `$...$` (سطرية) أو `$$...$$` (مستقلة)، وتُعرض عبر KaTeX.

الشرح مكتوب بأسلوب مستقل ولا ينسخ نصوص الكتاب.
