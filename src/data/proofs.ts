// Two-column proofs used in the lessons. Each reason is a fixed phrase so that
// the "fill" mode can offer the same wording as choices; `ref` links it to a term.

interface Step {
  s: string;
  r: string;
  ref?: string;
}
export interface Proof {
  title: string;
  given: string;
  prove: string;
  steps: Step[];
  distractors?: string[];
}

const R = {
  given: { r: 'المعطى' },
  add: { r: 'خاصية الجمع للمساواة', ref: 'prop-add' },
  sub: { r: 'خاصية الطرح للمساواة', ref: 'prop-sub' },
  mul: { r: 'خاصية الضرب للمساواة', ref: 'prop-mul' },
  div: { r: 'خاصية القسمة للمساواة', ref: 'prop-div' },
  subst: { r: 'خاصية التعويض', ref: 'prop-subst' },
  dist: { r: 'خاصية التوزيع', ref: 'prop-dist' },
  sym: { r: 'خاصية التماثل للمساواة', ref: 'prop-symmetric' },
  trans: { r: 'خاصية التعدي للمساواة', ref: 'prop-transitive' },
  refl: { r: 'خاصية الانعكاس للمساواة', ref: 'prop-reflexive' },
  segAdd: { r: 'مسلّمة جمع القطع', ref: 'post-segment-addition' },
  angAdd: { r: 'مسلّمة جمع الزوايا', ref: 'post-angle-addition' },
  defCongSeg: { r: 'تعريف القطع المتطابقة', ref: 'def-congruent-segments' },
  defCongAng: { r: 'تعريف الزوايا المتطابقة', ref: 'def-congruent-angles' },
  defMid: { r: 'تعريف نقطة المنتصف', ref: 'def-midpoint' },
  defRight: { r: 'تعريف الزاوية القائمة', ref: 'def-angle-types' },
  defSupp: { r: 'تعريف الزاويتين المتكاملتين', ref: 'def-supplementary' },
  defComp: { r: 'تعريف الزاويتين المتتامتين', ref: 'def-complementary' },
  defLinear: { r: 'تعريف الزوج الخطي (من الشكل)', ref: 'def-linear-pair' },
  linearPair: { r: 'مسلّمة الزوج الخطي', ref: 'post-linear-pair' },
  congSupp: { r: 'نظرية المكملات المتطابقة', ref: 'thm-congruent-supplements' },
  defBisector: { r: 'تعريف منصف الزاوية', ref: 'def-angle-bisector' },
  vertical: { r: 'نظرية الزاويتين المتقابلتين بالرأس', ref: 'thm-vertical-angles' },
};

export const proofs: Record<string, Proof> = {
  solveLinear: {
    title: 'حل معادلة كبرهان',
    given: '$5x - 18 = 3x + 2$',
    prove: '$x = 10$',
    steps: [
      { s: '$5x - 18 = 3x + 2$', ...R.given },
      { s: '$2x - 18 = 2$', ...R.sub },
      { s: '$2x = 20$', ...R.add },
      { s: '$x = 10$', ...R.div },
    ],
  },
  solveDistributive: {
    title: 'معادلة فيها أقواس',
    given: '$3(x + 4) = 27 - 2x$',
    prove: '$x = 3$',
    steps: [
      { s: '$3(x + 4) = 27 - 2x$', ...R.given },
      { s: '$3x + 12 = 27 - 2x$', ...R.dist },
      { s: '$5x + 12 = 27$', ...R.add },
      { s: '$5x = 15$', ...R.sub },
      { s: '$x = 3$', ...R.div },
    ],
    distractors: [R.mul.r, R.sym.r],
  },
  segmentLengths: {
    title: 'المسافة في الهندسة كمعادلة',
    given: '$P$ و $Q$ و $R$ على استقامة واحدة، $PR = 30$، $PQ = 2x + 4$، $QR = x + 5$، و $Q$ بين $P$ و $R$',
    prove: '$x = 7$',
    steps: [
      { s: '$Q$ بين $P$ و $R$', ...R.given },
      { s: '$PQ + QR = PR$', ...R.segAdd },
      { s: '$(2x + 4) + (x + 5) = 30$', ...R.subst },
      { s: '$3x + 9 = 30$', r: 'تبسيط (جمع الحدود المتشابهة)' },
      { s: '$3x = 21$', ...R.sub },
      { s: '$x = 7$', ...R.div },
    ],
    distractors: [R.add.r, R.defMid.r],
  },
  segSymmetric: {
    title: 'خاصية التماثل لتطابق القطع',
    given: '$\\overline{AB} \\cong \\overline{CD}$',
    prove: '$\\overline{CD} \\cong \\overline{AB}$',
    steps: [
      { s: '$\\overline{AB} \\cong \\overline{CD}$', ...R.given },
      { s: '$AB = CD$', ...R.defCongSeg },
      { s: '$CD = AB$', ...R.sym },
      { s: '$\\overline{CD} \\cong \\overline{AB}$', ...R.defCongSeg },
    ],
  },
  segOverlap: {
    title: 'قطعتان متداخلتان',
    given: '$A, B, C, D$ على مستقيم بهذا الترتيب، و $AB = CD$',
    prove: '$AC = BD$',
    steps: [
      { s: '$AB = CD$', ...R.given },
      { s: '$AB + BC = CD + BC$', ...R.add },
      { s: '$AC = AB + BC$', ...R.segAdd },
      { s: '$BD = BC + CD$', ...R.segAdd },
      { s: '$AC = CD + BC$', ...R.subst },
      { s: '$AC = BD$', ...R.subst },
    ],
    distractors: [R.defCongSeg.r, R.trans.r, R.defMid.r],
  },
  midpointHalf: {
    title: 'المنتصف يقسم القطعة نصفين',
    given: '$M$ منتصف $\\overline{AB}$',
    prove: '$AM = \\tfrac{1}{2}AB$',
    steps: [
      { s: '$M$ منتصف $\\overline{AB}$', ...R.given },
      { s: '$AM = MB$', ...R.defMid },
      { s: '$AM + MB = AB$', ...R.segAdd },
      { s: '$AM + AM = AB$', ...R.subst },
      { s: '$2 \\cdot AM = AB$', ...R.dist },
      { s: '$AM = \\tfrac{1}{2}AB$', ...R.div },
    ],
  },
  rightAngles: {
    title: 'نظرية تطابق الزوايا القائمة',
    given: '$\\angle 1$ و $\\angle 2$ قائمتان',
    prove: '$\\angle 1 \\cong \\angle 2$',
    steps: [
      { s: '$\\angle 1$ و $\\angle 2$ قائمتان', ...R.given },
      { s: '$m\\angle 1 = 90^\\circ$ و $m\\angle 2 = 90^\\circ$', ...R.defRight },
      { s: '$m\\angle 1 = m\\angle 2$', ...R.trans },
      { s: '$\\angle 1 \\cong \\angle 2$', ...R.defCongAng },
    ],
    distractors: [R.sym.r, R.subst.r, R.defSupp.r],
  },
  congSupplements: {
    title: 'نظرية المكملات المتطابقة',
    given: '$\\angle 1$ و $\\angle 2$ متكاملتان، و $\\angle 3$ و $\\angle 2$ متكاملتان',
    prove: '$\\angle 1 \\cong \\angle 3$',
    steps: [
      { s: '$\\angle 1, \\angle 2$ متكاملتان، و $\\angle 3, \\angle 2$ متكاملتان', ...R.given },
      { s: '$m\\angle 1 + m\\angle 2 = 180^\\circ$ و $m\\angle 3 + m\\angle 2 = 180^\\circ$', ...R.defSupp },
      { s: '$m\\angle 1 + m\\angle 2 = m\\angle 3 + m\\angle 2$', ...R.trans },
      { s: '$m\\angle 1 = m\\angle 3$', ...R.sub },
      { s: '$\\angle 1 \\cong \\angle 3$', ...R.defCongAng },
    ],
    distractors: [R.add.r, R.defComp.r, R.linearPair.r],
  },
  verticalAngles: {
    title: 'نظرية الزاويتين المتقابلتين بالرأس',
    given: '$\\angle 1$ و $\\angle 3$ متقابلتان بالرأس',
    prove: '$\\angle 1 \\cong \\angle 3$',
    steps: [
      { s: '$\\angle 1, \\angle 2$ زوج خطي، و $\\angle 2, \\angle 3$ زوج خطي', ...R.defLinear },
      { s: '$\\angle 1, \\angle 2$ متكاملتان، و $\\angle 2, \\angle 3$ متكاملتان', ...R.linearPair },
      { s: '$\\angle 1 \\cong \\angle 3$', ...R.congSupp },
    ],
  },
  bisectorDouble: {
    title: 'المنصف والزاوية الكاملة',
    given: '$\\overrightarrow{BD}$ ينصف $\\angle ABC$',
    prove: '$m\\angle ABC = 2 \\cdot m\\angle ABD$',
    steps: [
      { s: '$\\overrightarrow{BD}$ ينصف $\\angle ABC$', ...R.given },
      { s: '$\\angle ABD \\cong \\angle DBC$', ...R.defBisector },
      { s: '$m\\angle ABD = m\\angle DBC$', ...R.defCongAng },
      { s: '$m\\angle ABD + m\\angle DBC = m\\angle ABC$', ...R.angAdd },
      { s: '$m\\angle ABD + m\\angle ABD = m\\angle ABC$', ...R.subst },
      { s: '$2 \\cdot m\\angle ABD = m\\angle ABC$', ...R.dist },
      { s: '$m\\angle ABC = 2 \\cdot m\\angle ABD$', ...R.sym },
    ],
    distractors: [R.segAdd.r, R.trans.r],
  },
};
