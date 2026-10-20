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
  angTrans: { r: 'خاصية التعدي لتطابق الزوايا', ref: 'thm-angle-congruence' },
  rightCong: { r: 'نظرية تطابق الزوايا القائمة', ref: 'thm-right-angles' },
  defPerp: { r: 'تعريف المستقيمين المتعامدين', ref: 'def-perpendicular' },
  perpFour: { r: 'نظرية الزوايا القائمة الأربع', ref: 'thm-perp-four-right' },
  corr: { r: 'مسلّمة الزوايا المتناظرة', ref: 'post-corresponding' },
  corrConv: { r: 'عكس مسلّمة الزوايا المتناظرة', ref: 'post-corresponding-converse' },
  altInt: { r: 'نظرية الزوايا المتبادلة داخليًا', ref: 'thm-alt-interior' },
  parPost: { r: 'مسلّمة التوازي', ref: 'post-parallel' },
  triSum: { r: 'نظرية مجموع زوايا المثلث', ref: 'thm-triangle-sum' },
  segRefl: { r: 'خاصية الانعكاس لتطابق القطع', ref: 'thm-segment-congruence' },
  sss: { r: 'مسلّمة SSS', ref: 'post-sss' },
  sas: { r: 'مسلّمة SAS', ref: 'post-sas' },
  asa: { r: 'مسلّمة ASA', ref: 'post-asa' },
  aas: { r: 'نظرية AAS', ref: 'thm-aas' },
  cpctc: { r: 'الأجزاء المتناظرة في مثلثين متطابقين', ref: 'def-cpctc' },
  straight: { r: 'تعريف الزاوية المستقيمة', ref: 'def-angle-types' },
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
  perpFourRight: {
    title: 'المتعامدان يكوّنان أربع زوايا قائمة',
    given: '$\\ell \\perp m$، والزوايا $\\angle 1$ إلى $\\angle 4$ حول نقطة التقاطع',
    prove: 'الزوايا الأربع قائمة',
    steps: [
      { s: '$\\ell \\perp m$', ...R.given },
      { s: '$\\angle 1$ قائمة', ...R.defPerp },
      { s: '$m\\angle 1 = 90^\\circ$', ...R.defRight },
      { s: '$\\angle 1 \\cong \\angle 3$، إذن $m\\angle 3 = 90^\\circ$', ...R.vertical },
      { s: '$m\\angle 1 + m\\angle 2 = 180^\\circ$', ...R.linearPair },
      { s: '$90^\\circ + m\\angle 2 = 180^\\circ$', ...R.subst },
      { s: '$m\\angle 2 = 90^\\circ$', ...R.sub },
      { s: '$\\angle 2 \\cong \\angle 4$، إذن $m\\angle 4 = 90^\\circ$', ...R.vertical },
    ],
  },
  altInterior: {
    title: 'نظرية الزوايا المتبادلة داخليًا',
    given: '$p \\parallel q$',
    prove: '$\\angle 3 \\cong \\angle 6$',
    steps: [
      { s: '$p \\parallel q$', ...R.given },
      { s: '$\\angle 3 \\cong \\angle 7$', ...R.corr },
      { s: '$\\angle 7 \\cong \\angle 6$', ...R.vertical },
      { s: '$\\angle 3 \\cong \\angle 6$', ...R.angTrans },
    ],
  },
  consecutiveInterior: {
    title: 'نظرية الزوايا المتحالفة',
    given: '$p \\parallel q$',
    prove: '$\\angle 4$ و $\\angle 6$ متكاملتان',
    steps: [
      { s: '$p \\parallel q$', ...R.given },
      { s: '$\\angle 2 \\cong \\angle 6$', ...R.corr },
      { s: '$m\\angle 2 = m\\angle 6$', ...R.defCongAng },
      { s: '$m\\angle 2 + m\\angle 4 = 180^\\circ$', ...R.linearPair },
      { s: '$m\\angle 6 + m\\angle 4 = 180^\\circ$', ...R.subst },
      { s: '$\\angle 4$ و $\\angle 6$ متكاملتان', ...R.defSupp },
    ],
    distractors: [R.vertical.r, R.altInt.r, R.add.r],
  },
  altInteriorConverse: {
    title: 'عكس نظرية الزوايا المتبادلة داخليًا',
    given: '$\\angle 3 \\cong \\angle 6$',
    prove: '$p \\parallel q$',
    steps: [
      { s: '$\\angle 3 \\cong \\angle 6$', ...R.given },
      { s: '$\\angle 6 \\cong \\angle 7$', ...R.vertical },
      { s: '$\\angle 3 \\cong \\angle 7$', ...R.angTrans },
      { s: '$p \\parallel q$', ...R.corrConv },
    ],
    distractors: [R.corr.r, R.altInt.r, R.linearPair.r],
  },
  perpSameLine: {
    title: 'عمودان على مستقيم واحد',
    given: '$p \\perp t$ و $q \\perp t$',
    prove: '$p \\parallel q$',
    steps: [
      { s: '$p \\perp t$ و $q \\perp t$', ...R.given },
      { s: '$\\angle 2$ و $\\angle 6$ قائمتان', ...R.perpFour },
      { s: '$\\angle 2 \\cong \\angle 6$', ...R.rightCong },
      { s: '$p \\parallel q$', ...R.corrConv },
    ],
    distractors: [R.corr.r, R.defPerp.r, R.vertical.r],
  },
  triangleSum: {
    title: 'نظرية مجموع زوايا المثلث',
    given: '$\\triangle ABC$',
    prove: '$m\\angle 1 + m\\angle 2 + m\\angle 3 = 180^\\circ$',
    steps: [
      { s: 'ارسم المستقيم $\\ell$ المار بـ $B$ موازيًا لـ $\\overleftrightarrow{AC}$', ...R.parPost },
      { s: '$m\\angle 4 + m\\angle 2 + m\\angle 5 = 180^\\circ$', r: 'مسلّمة جمع الزوايا وتعريف الزاوية المستقيمة', ref: 'post-angle-addition' },
      { s: '$\\angle 1 \\cong \\angle 4$ و $\\angle 3 \\cong \\angle 5$', ...R.altInt },
      { s: '$m\\angle 1 = m\\angle 4$ و $m\\angle 3 = m\\angle 5$', ...R.defCongAng },
      { s: '$m\\angle 1 + m\\angle 2 + m\\angle 3 = 180^\\circ$', ...R.subst },
    ],
  },
  exteriorAngle: {
    title: 'نظرية الزاوية الخارجية',
    given: '$\\angle 1$ زاوية خارجية للمثلث $ABC$ عند $C$',
    prove: '$m\\angle 1 = m\\angle A + m\\angle B$',
    steps: [
      { s: '$\\angle 1$ خارجية عند $C$', ...R.given },
      { s: '$m\\angle A + m\\angle B + m\\angle ACB = 180^\\circ$', ...R.triSum },
      { s: '$m\\angle 1 + m\\angle ACB = 180^\\circ$', ...R.linearPair },
      { s: '$m\\angle 1 + m\\angle ACB = m\\angle A + m\\angle B + m\\angle ACB$', ...R.trans },
      { s: '$m\\angle 1 = m\\angle A + m\\angle B$', ...R.sub },
    ],
    distractors: [R.vertical.r, R.altInt.r, R.add.r],
  },
  thirdAngles: {
    title: 'نظرية الزاوية الثالثة',
    given: '$\\angle A \\cong \\angle D$ و $\\angle B \\cong \\angle E$',
    prove: '$\\angle C \\cong \\angle F$',
    steps: [
      { s: '$\\angle A \\cong \\angle D$ و $\\angle B \\cong \\angle E$', ...R.given },
      { s: '$m\\angle A = m\\angle D$ و $m\\angle B = m\\angle E$', ...R.defCongAng },
      { s: '$m\\angle A + m\\angle B + m\\angle C = 180^\\circ$ و $m\\angle D + m\\angle E + m\\angle F = 180^\\circ$', ...R.triSum },
      { s: '$m\\angle A + m\\angle B + m\\angle C = m\\angle D + m\\angle E + m\\angle F$', ...R.trans },
      { s: '$m\\angle D + m\\angle E + m\\angle C = m\\angle D + m\\angle E + m\\angle F$', ...R.subst },
      { s: '$m\\angle C = m\\angle F$', ...R.sub },
      { s: '$\\angle C \\cong \\angle F$', ...R.defCongAng },
    ],
  },
  sssKite: {
    title: 'برهان بـ SSS',
    given: '$\\overline{AB} \\cong \\overline{CB}$ و $\\overline{AD} \\cong \\overline{CD}$',
    prove: '$\\triangle ABD \\cong \\triangle CBD$',
    steps: [
      { s: '$\\overline{AB} \\cong \\overline{CB}$', ...R.given },
      { s: '$\\overline{AD} \\cong \\overline{CD}$', ...R.given },
      { s: '$\\overline{BD} \\cong \\overline{BD}$', ...R.segRefl },
      { s: '$\\triangle ABD \\cong \\triangle CBD$', ...R.sss },
    ],
    distractors: [R.sas.r, R.defMid.r, R.vertical.r],
  },
  sasBowtie: {
    title: 'برهان بـ SAS',
    given: '$C$ منتصف $\\overline{AE}$ ومنتصف $\\overline{BD}$',
    prove: '$\\triangle ACB \\cong \\triangle ECD$',
    steps: [
      { s: '$C$ منتصف $\\overline{AE}$ و $\\overline{BD}$', ...R.given },
      { s: '$\\overline{AC} \\cong \\overline{EC}$ و $\\overline{BC} \\cong \\overline{DC}$', ...R.defMid },
      { s: '$\\angle ACB \\cong \\angle ECD$', ...R.vertical },
      { s: '$\\triangle ACB \\cong \\triangle ECD$', ...R.sas },
    ],
    distractors: [R.sss.r, R.asa.r, R.segRefl.r],
  },
  asaKite: {
    title: 'برهان بـ ASA',
    given: '$\\overline{BD}$ ينصف $\\angle ABC$ و $\\angle ADC$',
    prove: '$\\triangle ABD \\cong \\triangle CBD$',
    steps: [
      { s: '$\\overline{BD}$ ينصف $\\angle ABC$ و $\\angle ADC$', ...R.given },
      { s: '$\\angle ABD \\cong \\angle CBD$', ...R.defBisector },
      { s: '$\\overline{BD} \\cong \\overline{BD}$', ...R.segRefl },
      { s: '$\\angle ADB \\cong \\angle CDB$', ...R.defBisector },
      { s: '$\\triangle ABD \\cong \\triangle CBD$', ...R.asa },
    ],
    distractors: [R.aas.r, R.sas.r, R.vertical.r],
  },
  aasKite: {
    title: 'برهان بـ AAS',
    given: '$\\angle A \\cong \\angle C$، و $\\overline{BD}$ ينصف $\\angle ABC$',
    prove: '$\\triangle ABD \\cong \\triangle CBD$',
    steps: [
      { s: '$\\angle A \\cong \\angle C$', ...R.given },
      { s: '$\\angle ABD \\cong \\angle CBD$', ...R.defBisector },
      { s: '$\\overline{BD} \\cong \\overline{BD}$', ...R.segRefl },
      { s: '$\\triangle ABD \\cong \\triangle CBD$', ...R.aas },
    ],
  },
  cpctcKite: {
    title: 'التطابق ثم الأجزاء المتناظرة',
    given: '$\\overline{AB} \\cong \\overline{CB}$ و $\\overline{AD} \\cong \\overline{CD}$',
    prove: '$\\angle A \\cong \\angle C$',
    steps: [
      { s: '$\\overline{AB} \\cong \\overline{CB}$ و $\\overline{AD} \\cong \\overline{CD}$', ...R.given },
      { s: '$\\overline{BD} \\cong \\overline{BD}$', ...R.segRefl },
      { s: '$\\triangle ABD \\cong \\triangle CBD$', ...R.sss },
      { s: '$\\angle A \\cong \\angle C$', ...R.cpctc },
    ],
    distractors: [R.sas.r, R.vertical.r, R.defBisector.r],
  },
  cpctcBisector: {
    title: 'البرهان على منصف الزاوية',
    given: '$\\overline{AB} \\cong \\overline{CB}$ و $\\overline{AD} \\cong \\overline{CD}$',
    prove: '$\\overline{BD}$ ينصف $\\angle ABC$',
    steps: [
      { s: '$\\overline{AB} \\cong \\overline{CB}$ و $\\overline{AD} \\cong \\overline{CD}$', ...R.given },
      { s: '$\\overline{BD} \\cong \\overline{BD}$', ...R.segRefl },
      { s: '$\\triangle ABD \\cong \\triangle CBD$', ...R.sss },
      { s: '$\\angle ABD \\cong \\angle CBD$', ...R.cpctc },
      { s: '$\\overline{BD}$ ينصف $\\angle ABC$', ...R.defBisector },
    ],
    distractors: [R.sas.r, R.asa.r, R.defMid.r],
  },
  baseAngles: {
    title: 'نظرية زاويتي القاعدة',
    given: '$\\overline{AB} \\cong \\overline{AC}$',
    prove: '$\\angle B \\cong \\angle C$',
    steps: [
      { s: 'ارسم $M$ منتصف $\\overline{BC}$ والقطعة $\\overline{AM}$', r: 'لكل قطعة منتصف واحد، ويمر بنقطتين مستقيم', ref: 'post-two-points-line' },
      { s: '$\\overline{BM} \\cong \\overline{CM}$', ...R.defMid },
      { s: '$\\overline{AM} \\cong \\overline{AM}$', ...R.segRefl },
      { s: '$\\overline{AB} \\cong \\overline{AC}$', ...R.given },
      { s: '$\\triangle ABM \\cong \\triangle ACM$', ...R.sss },
      { s: '$\\angle B \\cong \\angle C$', ...R.cpctc },
    ],
  },
};

/** Flow proofs: rows of boxes, each row following from the rows above. */
export interface FlowNode {
  s: string;
  r: string;
  ref?: string;
}
export interface Flow {
  title: string;
  given: string;
  prove: string;
  rows: FlowNode[][];
}

export const flows: Record<string, Flow> = {
  linearPairPerp: {
    title: 'نظرية الزوج الخطي المتطابق',
    given: '$\\angle 1$ و $\\angle 2$ زوج خطي، و $\\angle 1 \\cong \\angle 2$',
    prove: '$g \\perp h$',
    rows: [
      [
        { s: '$\\angle 1 \\cong \\angle 2$', ...R.given },
        { s: '$\\angle 1, \\angle 2$ زوج خطي', ...R.given },
      ],
      [
        { s: '$m\\angle 1 = m\\angle 2$', ...R.defCongAng },
        { s: '$m\\angle 1 + m\\angle 2 = 180^\\circ$', ...R.linearPair },
      ],
      [{ s: '$m\\angle 1 + m\\angle 1 = 180^\\circ$', ...R.subst }],
      [{ s: '$m\\angle 1 = 90^\\circ$', r: 'التبسيط ثم خاصية القسمة', ref: 'prop-div' }],
      [{ s: '$\\angle 1$ قائمة', ...R.defRight }],
      [{ s: '$g \\perp h$', ...R.defPerp }],
    ],
  },
  adjacentComplementary: {
    title: 'نظرية الزاويتين الحادتين المتجاورتين',
    given: '$\\overrightarrow{BA} \\perp \\overrightarrow{BC}$، و $\\angle 1$ و $\\angle 2$ تكوّنان معًا $\\angle ABC$',
    prove: '$\\angle 1$ و $\\angle 2$ متتامتان',
    rows: [
      [{ s: '$\\overrightarrow{BA} \\perp \\overrightarrow{BC}$', ...R.given }],
      [{ s: '$\\angle ABC$ قائمة', ...R.defPerp }],
      [
        { s: '$m\\angle ABC = 90^\\circ$', ...R.defRight },
        { s: '$m\\angle 1 + m\\angle 2 = m\\angle ABC$', ...R.angAdd },
      ],
      [{ s: '$m\\angle 1 + m\\angle 2 = 90^\\circ$', ...R.subst }],
      [{ s: '$\\angle 1$ و $\\angle 2$ متتامتان', ...R.defComp }],
    ],
  },
};
