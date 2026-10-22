export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  englishModel: string;
  category: 'pos' | 'mobile' | 'plugin' | 'api';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  supportedVersions: string;
  connectionType: string[];
  installMethod: string;
  installSteps: string[];
  features: string[];
  specs: ProductSpec[];
  downloadLabel: string;
  downloadType: 'apk' | 'usb' | 'store' | 'api';
  fileSize?: string;
  badgeText: string;
  recommendedFor: string;
  priceNote: string;
  visualType: 'pax' | 'sunmi' | 'verifone' | 'mobiwire' | 'urovo' | 'mobile-app' | 'printer-plugin' | 'api-gateway';
}

export interface ServiceBillerCode {
  code: string;
  name: string;
  provider: string;
  commissionNote: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'credit-card' | 'smartphone' | 'building' | 'shopping-cart' | 'wallet' | 'shield';
  accentColor: 'blue' | 'indigo' | 'emerald' | 'amber' | 'violet' | 'rose';
  highlights: string[];
  detailedBenefits: string[];
  billerCodes: ServiceBillerCode[];
  targetAudience: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  arabicRole: string;
  department: 'executive' | 'technology' | 'operations' | 'finance-legal';
  joinedYear: string;
  bio: string;
  gender: 'male' | 'female';
}

export interface PartnerItem {
  id: string;
  name: string;
  category: 'fintech' | 'syndicate' | 'charity' | 'telecom' | 'government';
  categoryLabel: string;
  description: string;
  serviceCount: string;
  codePrefix?: string;
}

export interface AuthorizedAgent {
  id: string;
  name: string;
  companyName: string;
  governorate: string;
  roleTitle: string;
  coverageAreas: string[];
  servicesProvided: string[];
  phone: string;
  verifiedSince: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'fintech' | 'announcements' | 'contracts';
  categoryLabel: string;
  date: string;
  readTime: string;
  excerpt: string;
  contentParagraphs: string[];
  keyTakeaways: string[];
  serviceCodesMentioned?: string[];
  visualTheme: 'card-terminal' | 'finance-press' | 'mobile-wallet' | 'bnb-dafatery' | 'edfally-brand' | 'pos-keypad';
}

export interface GalleryMediaItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'branches' | 'tutorials' | 'devices';
  categoryLabel: string;
  mediaType: 'image' | 'video';
  duration?: string;
  location?: string;
  description: string;
  stepsOrHighlights: string[];
  visualTheme: 'brand-banner' | 'tutorial-pos' | 'branch-dakahlia' | 'branch-menoufia' | 'tutorial-usb' | 'tutorial-bluetooth';
}

export const COMPANY_INFO = {
  name: 'ادفعلي للمدفوعات الإلكترونية',
  shortName: 'ادفعلي',
  slogan: 'ببساطة أسهل وأسرع',
  legalStatus: 'شركة مساهمة مصرية منذ عام 2020',
  foundedYear: 2020,
  employeesCount: '+50',
  headquarters: 'جمهورية مصر العربية - المقر الرئيسي',
  phones: ['01110666151', '01119295111'],
  whatsapp: '01119295111',
  telegram: '01110666151',
  email: 'info@edfally.com',
  supportHours: '24 ساعة طوال أيام الأسبوع',
  copyright: '© 2026 شركة ادفعلي للمدفوعات الإلكترونية والرقمية (Digitfans). جميع الحقوق محفوظة.',
};

export const HOME_STATS = [
  {
    id: 'visitors',
    value: '+2,844',
    label: 'عدد الزوار النشطين يومياً',
    context: 'تجار ووكلاء عبر المنصة والتطبيق',
  },
  {
    id: 'pos-points',
    value: '+863',
    label: 'نقاط البيع حتى يناير 2026',
    context: 'تغطية شاملة لمحافظات الجمهورية',
  },
  {
    id: 'daily-volume',
    value: '2,202,000',
    label: 'متوسط المعاملات اليومية (ج.م)',
    context: 'تحصيل فواتير وشحن وتحويلات فورية',
  },
  {
    id: 'satisfaction',
    value: '99.2%',
    label: 'نسبة استقرار ورضا العملاء',
    context: 'دعم فني وسيرفرات تشغيل فائقة السرعة',
  },
];

export const STRATEGIC_GOALS = [
  {
    id: 'market-share',
    number: '01',
    title: 'زيادة الحصة السوقية',
    description: 'زيادة حصة الشركة في السوق المصري من خلال تقديم خدمات دفع وتحصيل متميزة بعمولات تنافسية للتاجر.',
  },
  {
    id: 'gov-coordination',
    number: '02',
    title: 'التنسيق مع الجهات الحكومية',
    description: 'إضافة الخدمات الحكومية والجامعية والنقابية التي تساعد المواطنين على سهولة التحول الرقمي وسداد الرسوم.',
  },
  {
    id: 'merchant-base',
    number: '03',
    title: 'زيادة قاعدة التجار والوكلاء',
    description: 'توفير أفضل الحلول الرقمية وماكينات نقاط البيع الحديثة وسهولة التعامل مع النظام مع دعم فني لحظي.',
  },
  {
    id: 'strategic-partnerships',
    number: '04',
    title: 'الشراكات الاستراتيجية',
    description: 'عمل شراكات مباشرة مع الكيانات الكبرى والبنوك والنقابات المهنية داخل جمهورية مصر العربية.',
  },
];

export const RELIABILITY_PILLARS = [
  {
    step: '1',
    title: 'تطوير السيرفرات وأجهزة التشغيل',
    description: 'نعتمد على تطوير سيرفرات وأجهزة التشغيل الخاصة بمنظومة الدفع لضمان تنفيذ المعاملة في أقل من ثانية.',
  },
  {
    step: '2',
    title: 'الاستثمار في الكوادر الهندسية والبشرية',
    description: 'نعتمد على تطوير موظفينا ومهندسينا حيث نؤمن بأن الموارد البشرية المؤهلة أهم وأدق في خدمة التاجر.',
  },
  {
    step: '3',
    title: 'شمولية الخدمات للمستخدم النهائي',
    description: 'نعتمد على توفير كل الخدمات الأساسية والفرعية للمستخدم النهائي في شاشة واحدة سهلة الاستخدام.',
  },
  {
    step: '4',
    title: 'التكامل مع الكيانات الكبرى داخل مصر',
    description: 'نعتمد على عمل شراكات استراتيجية مع كبرى شركات الاتصالات والمرافق والمؤسسات المالية داخل مصر.',
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'edfally-merchant-app',
    slug: 'edfally-merchant-app',
    name: 'تطبيق ادفعلي للتجار للموبايل',
    englishModel: 'Edfally Merchant App (Android & iOS)',
    category: 'mobile',
    categoryLabel: 'تطبيقات الموبايل',
    shortDescription: 'ادفع كل مدفوعاتك من مكان واحد بسهولة وأمان: شحن رصيد، فواتير الموبايل والإنترنت والكهرباء، مصروفات الدراسة، وتحويلات.',
    fullDescription:
      'تطبيق ادفعلي الرسمي للتجار والوكلاء على الهواتف الذكية (Android & iOS). يمنحك نقطة بيع متكاملة في جيبك لسداد جميع الفواتير وشحن الرصيد والتحويلات المالية، مع إمكانية الربط المباشر بطابعات البلوتوث الحرارية ومتابعة تقارير العمولات والأرباح لحظة بلحظة.',
    supportedVersions: 'Android 7.0+ / iOS 14.0+',
    connectionType: ['4G / 5G', 'Wi-Fi', 'Bluetooth Printer'],
    installMethod: 'تحميل مباشر من متجر Google Play أو App Store أو ملف APK الرسمي',
    installSteps: [
      'قم بتحميل التطبيق من متجر Google Play أو App Store أو عبر رابط الـ APK المباشر.',
      'افتح التطبيق وأدخل رقم حساب التاجر وكلمة المرور المسجلة لدى شركة ادفعلي.',
      'فعّل رمز التحقق الآمن (OTP) لتأمين الحساب والرصيد.',
      'يمكنك إقران طابعة بلوتوث حرارية من إعدادات الطباعة لطباعة الإيصالات للعملاء فوراً.',
    ],
    features: [
      'سداد فواتير الموبايل والإنترنت لجميع الشبكات (فودافون، اتصالات، أورانج، WE)',
      'سداد فواتير الكهرباء والمياه والغاز ومصروفات الدراسة والجامعات',
      'كشف حساب لحظي وتقارير تفصيلية للعمولات اليومية والشهرية',
      'واجهة عربية واضحة عالية التباين تعمل بأقل استهلاك لباقة الإنترنت',
    ],
    specs: [
      { label: 'النظام المدعوم', value: 'أندرويد 7.0 فما فوق + iOS' },
      { label: 'حجم التطبيق', value: '24 ميجابايت' },
      { label: 'دعم الطباعة', value: 'طابعات البلوتوث 58mm و 80mm' },
      { label: 'التحديثات', value: 'تحديث سحابي تلقائي لقائمة الخدمات' },
    ],
    downloadLabel: 'تحميل تطبيق الأندرويد (APK / Play)',
    downloadType: 'store',
    fileSize: '24.2 MB',
    badgeText: 'الأكثر استخداماً للتجار',
    recommendedFor: 'أصحاب المحلات، الأكشاك، والوكلاء المتجولين',
    priceNote: 'مجاني بالكامل لجميع تجار ادفعلي المعتمدين',
    visualType: 'mobile-app',
  },
  {
    id: 'pax-a920-pro',
    slug: 'pax-a920-pro',
    name: 'ماكينة الدفع الذكية PAX',
    englishModel: 'PAX A920 / A920Pro / A930',
    category: 'pos',
    categoryLabel: 'ماكينات نقاط البيع POS',
    shortDescription: 'ماكينة تحصيل ذكية بشاشة لمس كاملة وطابعة حرارية مدمجة فائقة السرعة، تدعم التحديث الهوائي التلقائي عبر الواي فاي والشريحة.',
    fullDescription:
      'تُعد سلسلة ماكينات PAX (موديلات A920 و A920Pro و A930) من أقوى أجهزة نقاط البيع الذكية المعتمدة في منظومة ادفعلي. تجمع بين التصميم الانسيابي وشاشة اللمس عالية الوضوح مع طابعة إيصالات حرارية مدمجة وبطارية عملاقة للعمل المتواصل طوال اليوم.',
    supportedVersions: 'PAX A920 / A920Pro / A930',
    connectionType: ['4G LTE', 'Wi-Fi Dual Band', 'NFC Contactless', 'USB OTG'],
    installMethod: 'تثبيت عبر الفلاشة (USB OTG) أو التحديث التلقائي عبر الواي فاي',
    installSteps: [
      'قم بتنزيل حزمة تطبيق ادفعلي الخاصة بماكينات PAX على فلاشة USB.',
      'وصّل الفلاشة بالماكينة عبر وصلة OTG وقم بتثبيت التطبيق (Install).',
      'أو افتح اتصال الواي فاي (Wi-Fi) للماكينة وسيتم سحب وتحديث تطبيق ادفعلي تلقائياً.',
      'بالنسبة للماكينات الخارجية، يمكنك التواصل مع الدعم الفني لتحميل السوفت وير المعتمد من خلالنا.',
    ],
    features: [
      'شاشة لمس HD عالية السطوع واضحة في الإضاءة النهارية القوية',
      'طابعة حرارية مدمجة عالية السرعة لطباعة الفواتير والأكواد فوراً',
      'دعم شريحتي اتصال 4G مع التبديل التلقائي لأقوى شبكة متاحة',
      'تحديث تلقائي للخدمات والعمولات بمجرد الاتصال بالواي فاي',
    ],
    specs: [
      { label: 'الموديلات المدعومة', value: 'A920 / A920Pro / A930' },
      { label: 'الشاشة', value: '5.0 إلى 5.5 بوصة IPS تعمل باللمس' },
      { label: 'الطابعة المدمجة', value: 'طابعة حرارية 58مم سريعة' },
      { label: 'البطارية', value: '5250mAh تدوم حتى 14 ساعة عمل' },
    ],
    downloadLabel: 'تحميل سوفت وير PAX أو طلب الماكينة',
    downloadType: 'usb',
    fileSize: '38.5 MB',
    badgeText: 'أداء فائق + تحديث تلقائي',
    recommendedFor: 'السوبر ماركت، الصيدليات، ومراكز التحصيل المعتمدة',
    priceNote: 'متوفرة للتجار الجدد ودعم كامل للماكينات الخارجية',
    visualType: 'pax',
  },
  {
    id: 'sunmi-p2-v2',
    slug: 'sunmi-p2-v2',
    name: 'ماكينة التحصيل الذكية SUNMI',
    englishModel: 'SUNMI P2 & V2 Pro',
    category: 'pos',
    categoryLabel: 'ماكينات نقاط البيع POS',
    shortDescription: 'جهاز نقاط بيع أندرويد متكامل (P2 & V2) يتميز بسرعة استجابة استثنائية وطباعة فواتير فورية مع دعم التحديث عبر الواي فاي.',
    fullDescription:
      'تدعم منظومة ادفعلي ماكينات SUNMI الشهيرة بموديليها P2 و V2 بالكامل. صُممت هذه الماكينات لتحمل ضغط العمل اليومي الكثيف مع استهلاك منخفض للطاقة وورق الطباعة، وتعمل بنظام أندرويد مستقر يضمن عدم توقف المعاملات.',
    supportedVersions: 'SUNMI P2 / SUNMI V2 / V2 Pro',
    connectionType: ['4G LTE', 'Wi-Fi', 'Bluetooth 4.2', 'USB Type-C'],
    installMethod: 'تثبيت عبر الفلاشة أو تحديث تلقائي مباشر عبر Wi-Fi',
    installSteps: [
      'نزل تطبيق ادفعلي المخصص لماكينة صن مي (SUNMI) على فلاشة خارجية.',
      'ركب الفلاشة في الماكينة وقم بعمل تثبيت (Install) للتطبيق.',
      'بدلاً من ذلك، افتح الواي فاي على الماكينة المسجلة وسيتم تحديث تطبيق ادفعلي تلقائياً.',
      'سجل الدخول بحساب التاجر وابدأ طباعة الفواتير مباشرة.',
    ],
    features: [
      'تصميم نحيف وخفيف الوزن مريح لليد أثناء الاستخدام المتواصل',
      'محرك طباعة Seiko ياباني مدمج لطباعة الإيصالات بوضوح تام',
      'كاميرا مدمجة لقراءة أكواد الدفع السريع (QR & Barcode)',
      'توافق كامل مع جميع خدمات شحن الرصيد وسداد الفواتير في ادفعلي',
    ],
    specs: [
      { label: 'الموديلات المدعومة', value: 'SUNMI P2 & SUNMI V2' },
      { label: 'نظام التشغيل', value: 'SUNMI OS (Android Based)' },
      { label: 'سرعة الطباعة', value: '70 مم / ثانية' },
      { label: 'الاتصال', value: '4G + Wi-Fi + Bluetooth' },
    ],
    downloadLabel: 'تحميل نسخة SUNMI P2/V2',
    downloadType: 'usb',
    fileSize: '31.0 MB',
    badgeText: 'اعتمادية عالية',
    recommendedFor: 'محلات التجزئة، منافذ فوري وادفعلي، والكافيهات',
    priceNote: 'دعم فني وتحديث مجاني عبر الواي فاي',
    visualType: 'sunmi',
  },
  {
    id: 'verifone-x990',
    slug: 'verifone-x990',
    name: 'ماكينة التحصيل البنكية Verifone X990',
    englishModel: 'Verifone X990 (PCI5 & PCI6)',
    category: 'pos',
    categoryLabel: 'ماكينات نقاط البيع POS',
    shortDescription: 'ماكينة فيريفون X990 بمعايير التشفير البنكي PCI5 & PCI6، تدعم التنزيل المباشر عبر الفلاشة بدون فك ضغط والتحديث التلقائي.',
    fullDescription:
      'توفر ادفعلي دعماً كاملاً لماكينة Verifone X990 بجميع إصدارات الحماية (PCI5 & PCI6). تتميز بسهولة تنزيل النظام مباشرة عبر الفلاشة دون الحاجة لفك الضغط، مع إعادة تشغيل آلية وربط فوري بالسيرفر الرئيسي لتحديث قائمة الخدمات.',
    supportedVersions: 'Verifone X990 (PCI 5.x & PCI 6.x)',
    connectionType: ['4G / 3G', 'Wi-Fi', 'NFC', 'USB Host'],
    installMethod: 'تنزيل على فلاشة بدون فك ضغط أو تحديث تلقائي بالواي فاي',
    installSteps: [
      'قم بتنزيل ملف التطبيق على فلاشة كما هو بدون فك الضغط.',
      'ركّب الفلاشة بالماكينة وسيعمل برنامج التثبيت تلقائياً.',
      'بعد الانتهاء، أعد تشغيل الماكينة واربطها بشبكة الواي فاي (Wi-Fi).',
      'سيتم تحديث تطبيق ادفعلي وكافة قوائم الفواتير تلقائياً.',
    ],
    features: [
      'دعم كامل لإصداري الأمان البنكي PCI5 و PCI6 دون تعارض',
      'معالج رباعي النواة سريع الاستجابة في أوقات الذروة',
      'تثبيت ذكي تلقائي من الفلاشة مباشرة دون خطوات معقدة',
      'حماية مشفرة لجميع بيانات التاجر والعمليات المالية',
    ],
    specs: [
      { label: 'الإصدارات المدعومة', value: 'PCI5 & PCI6' },
      { label: 'الشاشة', value: '5.5 بوصة HD Touch' },
      { label: 'طريقة التثبيت', value: 'تثبيت تلقائي عبر USB / Wi-Fi' },
      { label: 'معيار الأمان', value: 'PCI PTS 5.x / 6.x Certified' },
    ],
    downloadLabel: 'تحميل حزمة Verifone X990',
    downloadType: 'usb',
    fileSize: '42.8 MB',
    badgeText: 'أمان بنكي PCI5/PCI6',
    recommendedFor: 'التجار ذوي المعاملات اليومية الكثيفة والوكلاء',
    priceNote: 'يدعم التثبيت المباشر على الماكينات الحالية والجديدة',
    visualType: 'verifone',
  },
  {
    id: 'mobiwire-v3-v4',
    slug: 'mobiwire-v3-v4',
    name: 'ماكينة التحصيل Mobiwire Smart POS',
    englishModel: 'Mobiwire Smart POS (v3 & v4)',
    category: 'pos',
    categoryLabel: 'ماكينات نقاط البيع POS',
    shortDescription: 'نسخة مخصصة لماكينات موبي وير (إصدارات v3 و v4) مع إرسال وتثبيت سريع عبر البلوتوث وأداء مستقر طوال اليوم.',
    fullDescription:
      'تعد ماكينة Mobiwire (الإصدار الثالث v3 والإصدار الرابع v4) من أكثر الماكينات انتشاراً وعملية لدى التجار في مصر. توفر ادفعلي نسخة APK خفيفة وسريعة مخصصة لماكينات موبي وير مع محرك طباعة مخصص يضمن طباعة الإيصالات الفورية بوضوح تام.',
    supportedVersions: 'Mobiwire MobiPrint v3 & v4',
    connectionType: ['3G / 4G SIM', 'Bluetooth', 'Wi-Fi'],
    installMethod: 'إرسال ملف APK بالبلوتوث للماكينة وتثبيته مباشرة',
    installSteps: [
      'اضغط على زر تحميل APK الخاص بماكينة Mobiwire v3 & v4.',
      'أرسل ملف التطبيق إلى ماكينة موبي وير عبر البلوتوث (Bluetooth).',
      'افتح الملف على الماكينة واضغط تثبيت (Install).',
      'ثبّت أيضاً "تطبيق دعم الطباعة للموبي وير" لتفعيل الطابعة الحرارية المدمجة.',
    ],
    features: [
      'متوافق بالكامل مع إصداري Mobiwire v3 و Mobiwire v4',
      'حجم خفيف جداً يعمل بكفاءة عالية حتى مع الشبكات الضعيفة',
      'أزرار فعلية وشاشة لمس لسهولة إدخال أرقام الهواتف والأكواد السريعة',
      'بطارية اقتصادية تدوم لفترات عمل طويلة خارج المحل',
    ],
    specs: [
      { label: 'الموديلات المدعومة', value: 'Mobiwire v3 & v4' },
      { label: 'طريقة النقل', value: 'Bluetooth / SD Card' },
      { label: 'حجم الحزمة', value: '18.4 ميجابايت' },
      { label: 'ملحق الطباعة', value: 'مدعوم عبر تطبيق طباعة موبي وير' },
    ],
    downloadLabel: 'تحميل APK ماكينة Mobiwire',
    downloadType: 'apk',
    fileSize: '18.4 MB',
    badgeText: 'تحميل APK مباشر',
    recommendedFor: 'التجار ومنافذ التحصيل في جميع القرى والمحافظات',
    priceNote: 'تحميل مجاني مباشر لملف الـ APK',
    visualType: 'mobiwire',
  },
  {
    id: 'mobiwire-print-plugin',
    slug: 'mobiwire-print-plugin',
    name: 'تطبيق دعم الطباعة للموبي وير',
    englishModel: 'Mobiwire Thermal Print Service (v3 & v4)',
    category: 'plugin',
    categoryLabel: 'ملحقات وأدوات التشغيل',
    shortDescription: 'تطبيق المحرك الرسمي لتشغيل الطابعة الحرارية على ماكينات Mobiwire v3 & v4 مع تنسيق فواتير ادفعلي وشعار الشركة.',
    fullDescription:
      'ملحق برمجي أساسي لماكينات Mobiwire v3 و v4 يقوم بربط تطبيق ادفعلي للتجار بوحدة الطباعة الحرارية المدمجة في الماكينة. يضمن طباعة عربية سليمة وواضحة تشتمل على رقم العملية، الكود، التاريخ، وشعار ادفعلي بدون تقطيع للحروف.',
    supportedVersions: 'Mobiwire v3 & v4 Print Engine',
    connectionType: ['Internal Thermal Bus', 'Bluetooth Bridge'],
    installMethod: 'إرسال بالبلوتوث بجانب تطبيق ادفعلي وتثبيته لمرة واحدة',
    installSteps: [
      'قم بتحميل تطبيق دعم الطباعة للموبي وير بجانب تطبيق ادفعلي الأساسي.',
      'أرسل التطبيقين بالبلوتوث إلى ماكينة موبي وير وقم بعمل Install لهما.',
      'افتح تطبيق الطباعة مرة واحدة لمنحه صلاحيات التشغيل التلقائي.',
      'الآن عند تنفيذ أي عملية دفع داخل ادفعلي ستعمل الطابعة تلقائياً.',
    ],
    features: [
      'دعم كامل للخطوط العربية والباركود على ورق 58مم الحراري',
      'يعمل في الخلفية تلقائياً بمجرد إتمام معاملة الدفع',
      'إمكانية إعادة طباعة آخر إيصال أو نسخة للتاجر بضغطة زر',
      'استهلاك معدوم للذاكرة والبطارية',
    ],
    specs: [
      { label: 'الأجهزة المتوافقة', value: 'Mobiwire v3 & v4' },
      { label: 'حجم الأداة', value: '6.2 ميجابايت' },
      { label: 'عرض الورق', value: '58mm Standard Thermal' },
      { label: 'اللغة', value: 'دعم كامل للطباعة العربية والإنجليزية' },
    ],
    downloadLabel: 'تحميل تطبيق دعم الطباعة APK',
    downloadType: 'apk',
    fileSize: '6.2 MB',
    badgeText: 'أداة تشغيل أساسية',
    recommendedFor: 'جميع مستخدمي ماكينات Mobiwire v3 & v4',
    priceNote: 'مجاني - يُثبّت بجانب تطبيق ادفعلي',
    visualType: 'printer-plugin',
  },
  {
    id: 'urovo-pos',
    slug: 'urovo-pos',
    name: 'ماكينة التحصيل ومحرك طباعة UROVO',
    englishModel: 'UROVO Smart POS i9000S / i9100',
    category: 'pos',
    categoryLabel: 'ماكينات نقاط البيع POS',
    shortDescription: 'حزمة متكاملة (تطبيق الدفع + تطبيق الطباعة) لماكينات يوروفو UROVO عالية التحمل، تثبّت بسهولة عبر الفلاشة.',
    fullDescription:
      'توفر شركة ادفعلي دعماً كاملاً لماكينات UROVO الصناعية القوية، شاملاً كلاً من تطبيق الدفع الأساسي وتطبيق الطباعة المخصص لماكينة يوروفو. تتميز هذه الماكينات بقدرتها العالية على العمل في البيئات الشاقة ومقاومة الصدمات مع سرعة اتصال ممتازة.',
    supportedVersions: 'UROVO i9000S / i9100 Series',
    connectionType: ['4G LTE', 'Wi-Fi', 'USB OTG', 'NFC'],
    installMethod: 'تثبيت تطبيق الدفع وتطبيق الطباعة عبر الفلاشة (USB)',
    installSteps: [
      'قم بتنزيل حزمة UROVO (تطبيق ادفعلي + تطبيق الطباعة ليوروفو) على فلاشة.',
      'ركّب الفلاشة في ماكينة UROVO عبر منفذ USB.',
      'قم بتثبيت التطبيقين (Install) وتفعيل أذونات الطباعة.',
      'سجل الدخول بحساب التاجر واستمتع بتحصيل وطباعة فورية.',
    ],
    features: [
      'حزمة مدمجة تشمل تطبيق التحصيل وتطبيق الطباعة الخاص بماكينات يوروفو',
      'هيكل متين مقاوم للصدمات والغبار للاستخدام الميداني والتجاري الشاق',
      'شاشة لمس عالية الحساسية مع طابعة إيصالات مدمجة',
      'استقرار عالي في الاتصال بسيرفرات ادفعلي',
    ],
    specs: [
      { label: 'الموديلات المدعومة', value: 'UROVO i9000S / i9100' },
      { label: 'مكونات الحزمة', value: 'تطبيق ادفعلي + محرك طباعة UROVO' },
      { label: 'طريقة التثبيت', value: 'USB Flash Drive' },
      { label: 'حجم الحزمة الكاملة', value: '34.6 ميجابايت' },
    ],
    downloadLabel: 'تحميل حزمة UROVO الكاملة',
    downloadType: 'usb',
    fileSize: '34.6 MB',
    badgeText: 'شامل تطبيق الطباعة',
    recommendedFor: 'المنافذ التجارية، شركات التوزيع، والتحصيل الميداني',
    priceNote: 'متاح للتحميل الفوري للتجار',
    visualType: 'urovo',
  },
  {
    id: 'edfally-api-gateway',
    slug: 'edfally-api-gateway',
    name: 'بوابة الربط المؤسسي والـ API',
    englishModel: 'Edfally Enterprise API & Biller Gateway',
    category: 'api',
    categoryLabel: 'حلول الشركات والـ API',
    shortDescription: 'ربط برمجي مباشر للمؤسسات والمنصات (مثل BNB Dafatery) لتحصيل المدفوعات بأكواد مخصصة ولوحة تحكم لحظية.',
    fullDescription:
      'حل متكامل للشركات والمؤسسات والمنصات الرقمية الراغبة في تحصيل اشتراكاتها أو فواتيرها عبر شبكة تجار وماكينات ادفعلي في جميع محافظات مصر، أو دمج خدمات شحن الرصيد وسداد الفواتير داخل أنظمتها الخاصة عبر واجهات RESTful API مؤمنة بالكامل.',
    supportedVersions: 'REST API v2.4 / Webhook Instant Notification',
    connectionType: ['HTTPS TLS 1.3', 'Dedicated VPN / IP Whitelist', 'Webhooks'],
    installMethod: 'ربط برمجي مباشر عبر بيئة الاختبار (Sandbox) ثم الإطلاق الفعلي',
    installSteps: [
      'تواصل مع قسم تطوير الأعمال والبرمجيات لفتح حساب مؤسسة (Enterprise).',
      'استلام مفاتيح الربط التجريبية (Sandbox API Keys) ووثائق الـ Endpoints.',
      'تخصيص أكواد دفع خاصة بشركتك على ماكينات وتطبيق ادفعلي (مثل أكواد 3039 - 3042).',
      'تفعيل الإشعارات اللحظية (Webhooks) ولوحة متابعة التسويات المالية اليومية.',
    ],
    features: [
      'تخصيص أكواد تحصيل مباشرة باسم شركتك على جميع ماكينات وتطبيقات ادفعلي',
      'لوحة تحكم (Dashboard) لمتابعة التحصيلات والتسويات اللحظية وتصدير التقارير',
      'تشفير متقدم وحماية كاملة عبر IP Whitelisting و HMAC Signatures',
      'فريق هندسي مخصص لدعم الربط البرمجي على مدار الساعة',
    ],
    specs: [
      { label: 'بروتوكول الربط', value: 'RESTful JSON API + Webhooks' },
      { label: 'زمن الاستجابة', value: 'أقل من 350 مللي ثانية' },
      { label: 'نسبة الإتاحة (SLA)', value: '99.95% Uptime' },
      { label: 'أمثلة حية', value: 'ربط BNB Dafatery (أكواد 3039 - 3042)' },
    ],
    downloadLabel: 'طلب ربط API للمؤسسات',
    downloadType: 'api',
    badgeText: 'للشركات والمنصات',
    recommendedFor: 'الشركات، المنصات التعليمية، النقابات، والتطبيقات التجارية',
    priceNote: 'باقات مخصصة حسب حجم المعاملات الشهرية',
    visualType: 'api-gateway',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'electronic-payments',
    slug: 'electronic-payments',
    number: '01',
    title: 'المدفوعات الإلكترونية وسداد الفواتير',
    shortDescription: 'خدمات دفع إلكترونية متكاملة لجميع أنواع المعاملات: دفع الفواتير، شحن الرصيد، والتحويلات المالية الفورية.',
    fullDescription:
      'تتيح منظومة ادفعلي للتجار والوكلاء تحصيل وسداد مئات الخدمات اليومية للمواطنين من شاشة واحدة. تشمل المنظومة شحن رصيد وكروت الفكة لجميع شركات الاتصالات، سداد فواتير الخطوط الأرضية والإنترنت المنزلي، وفواتير المرافق العامة (الكهرباء، المياه، الغاز)، بالإضافة إلى التعاقدات الحصرية مثل BNB Dafatery.',
    iconName: 'credit-card',
    accentColor: 'blue',
    highlights: ['دفع الفواتير والإنترنت', 'شحن الرصيد وكروت الفكة', 'التحويلات المالية والخدمات التعليمية'],
    detailedBenefits: [
      'تنفيذ فوري لعمليات الشحن وسداد الفواتير في أقل من ثانية واحدة',
      'أعلى هيكل عمولات للتاجر والوكيل مع إضافة العمولة لحظياً للرصيد',
      'دعم الأكواد السريعة لتوفير وقت التاجر أثناء أوقات الذروة',
      'إيصال مطبوع أو إلكتروني واضح يضمن حقوق التاجر والعميل',
    ],
    billerCodes: [
      { code: '3039', name: 'باقة BNB Dafatery الأساسية', provider: 'BNB Dafatery', commissionNote: 'تفعيل فوري عبر الماكينة والتطبيق' },
      { code: '3040', name: 'باقة BNB Dafatery للأعمال', provider: 'BNB Dafatery', commissionNote: 'تفعيل فوري عبر الماكينة والتطبيق' },
      { code: '3041', name: 'باقة BNB Dafatery المتقدمة', provider: 'BNB Dafatery', commissionNote: 'تفعيل فوري عبر الماكينة والتطبيق' },
      { code: '3042', name: 'باقة BNB Dafatery المؤسسية', provider: 'BNB Dafatery', commissionNote: 'تفعيل فوري عبر الماكينة والتطبيق' },
      { code: '1001', name: 'شحن رصيد وفواتير فودافون', provider: 'Vodafone Egypt', commissionNote: 'عمولة فورية للتاجر' },
      { code: '1002', name: 'شحن رصيد وفواتير اتصالات (عمولتك عمولتين)', provider: 'e& Egypt', commissionNote: 'عرض عمولتك أقوى على فواتير الإنترنت' },
      { code: '1003', name: 'شحن رصيد وفواتير أورانج', provider: 'Orange Egypt', commissionNote: 'عمولة فورية للتاجر' },
      { code: '1004', name: 'فواتير الإنترنت الأرضي والموبايل WE', provider: 'Telecom Egypt WE', commissionNote: 'تحديث لحظي للباقة' },
    ],
    targetAudience: 'المواطنون، التجار، ومراكز خدمات المحمول',
  },
  {
    id: 'mobile-applications',
    slug: 'mobile-applications',
    number: '02',
    title: 'تطبيقات الموبايل الذكية للتجار',
    shortDescription: 'تطبيقات سهلة الاستخدام للهواتف الذكية (أندرويد وآيفون) بواجهة عربية واضحة، أمان عالي، ودعم فني 24/7.',
    fullDescription:
      'صمم فريق البرمجيات في ادفعلي تطبيقات الهواتف الذكية لتعمل بأقصى سرعة وأقل استهلاك للبيانات. سواء كنت تستخدم هاتف أندرويد أو آيفون، يمكنك إدارة مبيعاتك، متابعة أرباحك، البحث عن الخدمات بالاسم أو الكود، والطباعة عبر البلوتوث بكل سلاسة.',
    iconName: 'smartphone',
    accentColor: 'indigo',
    highlights: ['واجهة سهلة وسريعة', 'أمان عالي بنظام OTP', 'دعم فني متواصل 24/7'],
    detailedBenefits: [
      'متوفر على Google Play و App Store وبصيغة APK مباشرة',
      'إشعارات لحظية بأحدث العروض وزيادات العمولات والتعاقدات الجديدة',
      'تقارير محاسبية دقيقة تساعد التاجر على جرد الخزينة اليومي بسهولة',
      'إمكانية إرسال إيصال الدفع للعميل عبر واتساب أو طباعته ورقياً',
    ],
    billerCodes: [
      { code: 'APP-01', name: 'تطبيق التجار أندرويد', provider: 'Edfally Mobile', commissionNote: 'متاح مجاناً للتجار' },
      { code: 'APP-02', name: 'تطبيق التجار iOS', provider: 'Edfally Mobile', commissionNote: 'متاح مجاناً للتجار' },
    ],
    targetAudience: 'التجار، المندوبون، وأصحاب الأنشطة التجارية',
  },
  {
    id: 'enterprise-solutions',
    slug: 'enterprise-solutions',
    number: '03',
    title: 'حلول المؤسسات والربط البرمجي',
    shortDescription: 'حلول متكاملة للشركات والمؤسسات الكبرى والنقابات: تكامل API، لوحة تحكم مركزية، وتقارير مالية مفصلة.',
    fullDescription:
      'نقدم للمؤسسات والشركات والنقابات المهنية والمنصات الرقمية بنية تحتية متكاملة لتحصيل الاشتراكات والفواتير من خلال شبكة فروع وتجار ادفعلي المنتشرة في كافة أنحاء الجمهورية، مع لوحة تحكم لحظية لمتابعة التدفقات النقدية والتسويات البنكية.',
    iconName: 'building',
    accentColor: 'emerald',
    highlights: ['تكامل برمجي API متكامل', 'لوحة تحكم مركزية للشركات', 'تقارير مالية وتسويات مفصلة'],
    detailedBenefits: [
      'إنشاء أكواد دفع مخصصة لمؤسستك تظهر لدى كافة تجار ادفعلي',
      'ربط مباشر مع أنظمة الـ ERP والمحاسبة الخاصة بالشركة (مثل BNB Dafatery)',
      'تخصيص صلاحيات متعددة للمحاسبين ومديري الفروع داخل لوحة التحكم',
      'تسويات مالية دقيقة وسريعة وفق جدول زمني منتظم',
    ],
    billerCodes: [
      { code: '3039-3042', name: 'منظومة BNB Dafatery المحاسبية', provider: 'BNB Dafatery', commissionNote: 'ربط مباشر عبر API' },
      { code: '57357', name: 'تبرعات مستشفى سرطان الأطفال 57357', provider: 'مستشفى 57357', commissionNote: 'بدون رسوم إضافية' },
    ],
    targetAudience: 'الشركات الكبرى، النقابات المهنية، والمنصات الرقمية',
  },
  {
    id: 'pos-terminals',
    slug: 'pos-terminals',
    number: '04',
    title: 'ماكينات ونقاط البيع الذكية (POS)',
    shortDescription: 'أجهزة POS متطورة لنقاط البيع (PAX, SUNMI, Verifone, Mobiwire, UROVO) بسهولة استخدام وصيانة مستمرة.',
    fullDescription:
      'توفر شركة ادفعلي أحدث ماكينات التحصيل الإلكتروني المعتمدة عالمياً، كما ندعم تشغيل وتحديث الماكينات الخارجية لدى التجار. تتميز أجهزتنا ببطاريات تدوم طويلاً، طابعات حرارية مدمجة عالية السرعة، وتحديثات هوائية تلقائية عبر الواي فاي.',
    iconName: 'shopping-cart',
    accentColor: 'amber',
    highlights: ['أجهزة حديثة معتمدة', 'سهولة الاستخدام والطباعة', 'صيانة ودعم فني مستمر'],
    detailedBenefits: [
      'تشكيلة واسعة تشمل PAX A920/A930 و SUNMI P2/V2 و Verifone X990 و Mobiwire و UROVO',
      'توفير قطع الغيار وبكرات الورق الحراري والصيانة الدورية للتجار',
      'دعم التثبيت السريع عبر الفلاشة (USB) أو البلوتوث أو الواي فاي',
      'استبدال ودعم فني فوري لضمان عدم تعطل حركة البيع في محلك',
    ],
    billerCodes: [
      { code: 'POS-PAX', name: 'ماكينات PAX A920 / A920Pro / A930', provider: 'PAX Technology', commissionNote: 'تحديث تلقائي بالواي فاي' },
      { code: 'POS-VRF', name: 'ماكينات Verifone X990 PCI5/PCI6', provider: 'Verifone', commissionNote: 'تثبيت مباشر عبر الفلاشة' },
    ],
    targetAudience: 'السوبر ماركت، الصيدليات، السنترالات، والوكلاء المعتمدون',
  },
  {
    id: 'electronic-wallets',
    slug: 'electronic-wallets',
    number: '05',
    title: 'المحافظ الإلكترونية وإدارة الأرصدة',
    shortDescription: 'إدارة الأموال وحسابات التجار والوكلاء بسهولة وأمان: سحب وإيداع، تحويل فوري للأرصدة، ورصيد آمن.',
    fullDescription:
      'تمنح محفظة ادفعلي الإلكترونية للتاجر والوكيل مرونة كاملة في إدارة السيولة النقدية، شحن أرصدة المناديب والتجار الفرعيين لحظياً، واستلام العمولات الفورية مع سجل مالي دقيق لكل حركة.',
    iconName: 'wallet',
    accentColor: 'violet',
    highlights: ['سحب وإيداع ميسر', 'تحويل فوري للأرصدة', 'رصيد آمن ومشفر بالكامل'],
    detailedBenefits: [
      'تغذية الرصيد عبر قنوات متعددة وإيداعات بنكية ومناديب تحصيل معتمدين',
      'تحويل الرصيد بين الوكيل والتجار التابعين له في ثوانٍ معدودة',
      'إشعارات فورية بكل عملية إضافة أو خصم أو نزول عمولة',
      'رقابة مالية دقيقة تمنع الأخطاء أو تكرار الخصم',
    ],
    billerCodes: [
      { code: 'WLT-01', name: 'تغذية رصيد تاجر فرعي', provider: 'شبكة وكلاء ادفعلي', commissionNote: 'تحويل لحظي مجاني' },
    ],
    targetAudience: 'الوكلاء المعتمدون، الموزعون، والتجار',
  },
  {
    id: 'security-protection',
    slug: 'security-protection',
    number: '06',
    title: 'الأمان والحماية وتأمين المعاملات',
    shortDescription: 'أعلى معايير الأمان لحماية بياناتك وأرصدتك: تشفير متقدم، حماية بنظام OTP، وحماية استباقية من الاحتيال.',
    fullDescription:
      'تضع شركة ادفعلي أمن المعلومات وحماية أرصدة التجار على رأس أولوياتها. يشرف على المنظومة فريق متخصص في أمن المعلومات وحماية أنظمة التشغيل والـ APIs لضمان بيئة دفع إلكتروني موثوقة ومطابقة للمعايير القياسية.',
    iconName: 'shield',
    accentColor: 'rose',
    highlights: ['تشفير متقدم للبيانات', 'حماية بنظام التحقق OTP', 'حماية ذكية من الاحتيال'],
    detailedBenefits: [
      'ربط الحساب بمعرف الجهاز أو الماكينة (Device Binding) لمنع الدخول غير المصرح به',
      'تشفير كافة اتصالات السيرفرات والواجهات البرمجية بأعلى بروتوكولات الحماية',
      'مراقبة مستمرة على مدار الساعة من قسم أمن المعلومات والسيرفرات',
      'نسخ احتياطي لحظي لكافة السجلات المالية لضمان عدم ضياع أي معاملة',
    ],
    billerCodes: [
      { code: 'SEC-OTP', name: 'تفعيل المصادقة الثنائية وربط الماكينة', provider: 'قسم أمن المعلومات - ادفعلي', commissionNote: 'مفعل افتراضياً لجميع الحسابات' },
    ],
    targetAudience: 'جميع التجار والوكلاء والشركاء في منظومة ادفعلي',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mahmoud-dwydar',
    name: 'EN. Mahmoud Dwydar',
    role: 'CEO',
    arabicRole: 'الرئيس التنفيذي ومؤسس المنظومة',
    department: 'executive',
    joinedYear: '2020',
    bio: 'مناصب عمل بها: مدير تنفيذي في جلوبال مصر من 2005 إلى 2010، مدير تنفيذي في انترنت ايجيبت من 2010 إلى الآن بعد أن انضمت انترنت ايجيبت لشركة ادفعلي للدفع الإلكتروني، وأصبحوا كيان واحد يدار من خلال إدارة ادفعلي للدفع الإلكتروني.',
    gender: 'male',
  },
  {
    id: 'ahmed-ayman',
    name: 'EN. Ahmed Ayman',
    role: 'CTO',
    arabicRole: 'المدير التقني ومدير الفرع الرئيسي',
    department: 'executive',
    joinedYear: '2021',
    bio: 'بدأ العمل من خلال انترنت ايجيبت في 2021 وانضم إلى فريق ادفعلي في 2022، ويشغل منصب مدير إدارة العمليات، وأُضيف له في 2025 منصب مدير الفرع الرئيسي.',
    gender: 'male',
  },
  {
    id: 'rawia-hassan',
    name: 'Rawia Hassan',
    role: 'CFO',
    arabicRole: 'المدير المالي للشركة',
    department: 'executive',
    joinedYear: '2021',
    bio: 'المدير المالي للشركة، بدأت عملها في انترنت ايجيبت من 2014 وانتقلت إلى منصب المدير المالي بعد اكتساب خبرة كبيرة في العمليات المالية وانتقلت إلى إدارة ادفعلي في 2021.',
    gender: 'female',
  },
  {
    id: 'walied-ibrahem',
    name: 'EN. Walied Ibrahem',
    role: 'Software Department Manager',
    arabicRole: 'مدير إدارة قسم البرمجيات',
    department: 'technology',
    joinedYear: '2020',
    bio: 'مدير إدارة قسم البرمجيات، يمتلك خبرة طويلة في مجال هندسة البرمجيات وتطوير واجهات الربط الـ APIs وخدمات الحماية المتقدمة لمنظومات الدفع.',
    gender: 'male',
  },
  {
    id: 'ahmed-khatab',
    name: 'EN. Ahmed Khatab',
    role: 'Information Security',
    arabicRole: 'مسؤول أمن المعلومات وحماية الأنظمة',
    department: 'technology',
    joinedYear: '2021',
    bio: 'متخصص في أمن المعلومات، أنظمة حماية نظام التشغيل، وأنظمة حماية البرمجيات والإلكترونيات وتأمين البنية التحتية للمدفوعات.',
    gender: 'male',
  },
  {
    id: 'mahmoud-samy',
    name: 'EN. Mahmoud Samy',
    role: 'IT Manager',
    arabicRole: 'مدير تكنولوجيا المعلومات والسيرفرات',
    department: 'technology',
    joinedYear: '2021',
    bio: 'متخصص في دعم وإدارة السيرفرات الداخلية والخارجية، وأنظمة حماية واستقرار نظام التشغيل لضمان عمل المنظومة بكفاءة طوال الساعة.',
    gender: 'male',
  },
  {
    id: 'ahmed-magdy',
    name: 'MR. Ahmed Magdy',
    role: 'Accounts Collections Manager',
    arabicRole: 'مدير إدارة التحصيلات',
    department: 'finance-legal',
    joinedYear: '2020',
    bio: 'مدير إدارة التحصيلات، يعمل على إدارة وتنظيم التحصيلات الداخلية والخارجية للشركة ومتابعة حسابات الوكلاء، التحق بالشركة منذ تأسيسها في 2020.',
    gender: 'male',
  },
  {
    id: 'esmat-khaled',
    name: 'MS. Esmat Khaled',
    role: 'Audit Department',
    arabicRole: 'مديرة إدارة المراجعة والعمليات الخارجية',
    department: 'operations',
    joinedYear: '2020',
    bio: 'مديرة إدارة العمليات الخارجية والمراجعة للشركة، تمتلك خبرة أكثر من 6 سنوات في مجال إدارة ومراجعة العمليات المالية والتشغيلية.',
    gender: 'female',
  },
  {
    id: 'sayed-alelamy',
    name: 'MR. Sayed Alelamy',
    role: 'Advertising Management',
    arabicRole: 'مدير إدارة الإعلانات والتسويق',
    department: 'operations',
    joinedYear: '2021',
    bio: 'مسؤول إدارة الإعلانات والهوية التسويقية بكل الوسائل الإعلانية والرقمية، له خبرة عملية تتخطى الـ 8 سنوات في السوق المصري.',
    gender: 'male',
  },
  {
    id: 'mostafa-elshazly',
    name: 'MR. Mostafa Elshazly',
    role: 'Director of Legal Affairs',
    arabicRole: 'مدير إدارة الشؤون القانونية',
    department: 'finance-legal',
    joinedYear: '2021',
    bio: 'مدير الشؤون القانونية، يمتلك خبرة واسعة في إدارة الشؤون القانونية والتعاقدات المؤسسية، التحق بوظيفة مدير إدارة الشؤون القانونية في 2021.',
    gender: 'male',
  },
  {
    id: 'alla-hasanen',
    name: 'MR. Alla Hasanen',
    role: 'Operations Management',
    arabicRole: 'مدير إدارة العمليات',
    department: 'operations',
    joinedYear: '2021',
    bio: 'يمتلك خبرة طويلة في إدارة العمليات الميدانية والتشغيلية تصل إلى 10 سنوات، التحق بشركة ادفعلي في عام 2021.',
    gender: 'male',
  },
];

export const PARTNERS_LIST: PartnerItem[] = [
  {
    id: 'fawry',
    name: 'فوري (Fawry)',
    category: 'fintech',
    categoryLabel: 'شركات التكنولوجيا المالية',
    description: 'تكامل شبكي لتوفير أوسع تغطية لخدمات سداد الفواتير والمرافق والتحصيل الإلكتروني.',
    serviceCount: '+120 خدمة متكاملة',
  },
  {
    id: 'hospital-57357',
    name: 'مستشفى سرطان الأطفال 57357',
    category: 'charity',
    categoryLabel: 'المؤسسات الطبية والخيرية',
    description: 'تحصيل التبرعات والصدقات الجارية لصالح مؤسسة مستشفى سرطان الأطفال 57357 بمصر من جميع نقاط بيع ادفعلي.',
    serviceCount: 'تبرع فوري بإيصال رسمي',
  },
  {
    id: 'medical-syndicate',
    name: 'نقابة الأطباء المصرية',
    category: 'syndicate',
    categoryLabel: 'النقابات المهنية',
    description: 'سداد اشتراكات نقابة الأطباء، مشروع العلاج، والخدمات النقابية بسهولة عبر ماكينات وتطبيق ادفعلي.',
    serviceCount: 'اشتراكات ومشروع العلاج',
  },
  {
    id: 'engineers-syndicate',
    name: 'نقابة المهندسين المصرية',
    category: 'syndicate',
    categoryLabel: 'النقابات المهنية',
    description: 'تحصيل اشتراكات الأعضاء، المعاشات، ورسوم الخدمات الهندسية لنقابة المهندسين المصرية.',
    serviceCount: 'خدمات واشتراكات النقابة',
  },
  {
    id: 'pharmacists-syndicate',
    name: 'نقابة صيادلة مصر',
    category: 'syndicate',
    categoryLabel: 'النقابات المهنية',
    description: 'تسهيل سداد الرسوم السنوية والخدمات النقابية لأعضاء النقابة العامة لصيادلة مصر.',
    serviceCount: 'تحصيل إلكتروني معتمد',
  },
  {
    id: 'teachers-syndicate',
    name: 'نقابة المهن التعليمية (المعلمين)',
    category: 'syndicate',
    categoryLabel: 'النقابات المهنية',
    description: 'خدمات سداد الاشتراكات وصندوق الزمالة لأعضاء نقابة المعلمين في كافة الإدارات التعليمية.',
    serviceCount: 'تغطية كافة المحافظات',
  },
  {
    id: 'bnb-dafatery',
    name: 'منظومة BNB Dafatery',
    category: 'fintech',
    categoryLabel: 'شركات التكنولوجيا المالية',
    description: 'تعاقد حصري لسداد وتفعيل باقات BNB Dafatery مباشرة عبر أكواد 3039 و 3040 و 3041 و 3042.',
    serviceCount: '4 باقات فورية (3039-3042)',
    codePrefix: '3039 / 3040 / 3041 / 3042',
  },
  {
    id: 'telecom-operators',
    name: 'شركات الاتصالات والإنترنت (فودافون، اتصالات، أورانج، WE)',
    category: 'telecom',
    categoryLabel: 'الاتصالات والإنترنت',
    description: 'شحن رصيد عادي وكروت فكة، تجديد باقات، وسداد فواتير الخطوط والإنترنت الأرضي بأقوى عمولة للتاجر.',
    serviceCount: 'شحن وفواتير 24/7',
  },
];

export const AUTHORIZED_AGENTS: AuthorizedAgent[] = [
  {
    id: 'elsherif-dakahlia',
    name: 'أ. السيد الشريف',
    companyName: 'الشريف للدفع الإلكتروني (Elsherif Payment)',
    governorate: 'محافظة الدقهلية',
    roleTitle: 'وكيل معتمد - محافظة الدقهلية',
    coverageAreas: ['المنصورة', 'طلخا', 'ميت غمر', 'السنبلاوين', 'بلقاس', 'دكرنس'],
    servicesProvided: [
      'فتح حسابات تجار جديدة وتفعيل فوري',
      'تسليم وبرمجة ماكينات نقاط البيع POS',
      'تغذية الأرصدة والدعم الفني الميداني',
    ],
    phone: '01110666151',
    verifiedSince: '2021',
  },
  {
    id: 'elhabib-menoufia',
    name: 'أ. محمد الحبيب',
    companyName: 'مؤسسة الحبيب لخدمات الدفع والمحمول',
    governorate: 'محافظة المنوفية',
    roleTitle: 'وكيل معتمد - محافظة المنوفية',
    coverageAreas: ['شبين الكوم', 'منوف', 'قويسنا', 'أشمون', 'الباجور', 'بركة السبع'],
    servicesProvided: [
      'توزيع ماكينات PAX و Verifone و Mobiwire',
      'شحن أرصدة التجار والموزعين على مدار اليوم',
      'توفير بكرات الورق الحراري والصيانة الفورية',
    ],
    phone: '01119295111',
    verifiedSince: '2021',
  },
  {
    id: 'greater-cairo-hub',
    name: 'الفرع الرئيسي - إدارة العمليات',
    companyName: 'ادفعلي للمدفوعات الإلكترونية - المركز الرئيسي',
    governorate: 'القاهرة الكبرى والجيزة',
    roleTitle: 'المقر الرئيسي ومركز خدمة كبار العملاء',
    coverageAreas: ['القاهرة', 'الجيزة', 'القليوبية', 'المدن الجديدة'],
    servicesProvided: [
      'تعاقدات الشركات والربط البرمجي API',
      'اعتماد الوكلاء الجدد في المحافظات',
      'الدعم الفني المركزي وتحديثات الماكينات',
    ],
    phone: '01110666151',
    verifiedSince: '2020',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'bnb-dafatery-contract',
    slug: 'bnb-dafatery-contract',
    title: 'دلوقتي معاك على ادفعلي BNB Dafatery بأكواد 3039 و 3040 و 3041 و 3042',
    category: 'contracts',
    categoryLabel: 'تعاقدات جديدة',
    date: '20 فبراير 2026',
    readTime: '3 دقائق للقراءة',
    excerpt: 'تم إضافة خدمة BNB Dafatery على منظومة ادفعلي سواء عبر ماكينة POS أو تطبيق الموبايل؛ تقدر تدفع وتفعل الباقات عندك بأكواد 3039 و 3040 و 3041 و 3042.',
    contentParagraphs: [
      'في إطار سعي شركة ادفعلي المستمر لتوسيع قائمة الخدمات المتاحة للتجار والشركات، نعلن عن إتمام التعاقد والربط الإلكتروني الكامل مع منظومة BNB Dafatery لإدارة الأعمال والحسابات.',
      'يمكن الآن لجميع تجار ووكلاء ادفعلي في كافة محافظات مصر تحصيل وتفعيل اشتراكات باقات BNB Dafatery مباشرة سواء من خلال ماكينات نقاط البيع (POS) أو من خلال تطبيق ادفعلي للموبايل في ثوانٍ معدودة.',
      'خصصت المنظومة أربعة أكواد دفع سريع مباشرة لتسهيل العملية على التاجر والعميل دون الحاجة للبحث الطويل في القوائم: الكود 3039 للباقة الأولى، الكود 3040 للباقة الثانية، الكود 3041 للباقة الثالثة، والكود 3042 للباقة المؤسسية.',
    ],
    keyTakeaways: [
      'متاح فوراً على جميع ماكينات الـ POS وتطبيق الأندرويد والـ iOS',
      'تفعيل لحظي للاشتراك بمجرد طباعة الإيصال',
      'عمولة مميزة للتاجر تُضاف تلقائياً بعد كل عملية',
    ],
    serviceCodesMentioned: ['3039', '3040', '3041', '3042'],
    visualTheme: 'bnb-dafatery',
  },
  {
    id: 'edfally-pos-mobile-launch',
    slug: 'edfally-pos-mobile-launch',
    title: 'ادفعلي ببساطة أسهل وأسرع.. إطلاق أحدث تطبيقاتنا على ماكينات الـ POS والموبايل',
    category: 'announcements',
    categoryLabel: 'إعلانات ادفعلي',
    date: '20 فبراير 2026',
    readTime: '4 دقائق للقراءة',
    excerpt: 'تم إطلاق أحدث إصدار من تطبيقاتنا على ماكينات الـ POS وتطبيقات الموبايل بواجهة أسرع ودعم التحديث التلقائي عبر الواي فاي.',
    contentParagraphs: [
      'أطلقت إدارة البرمجيات والتطوير في شركة ادفعلي الجيل الجديد من تطبيق التجار المخصص للهواتف الذكية وماكينات نقاط البيع (PAX, SUNMI, Verifone X990, Mobiwire, UROVO).',
      'يركز التحديث الجديد على اختصار خطوات تنفيذ المعاملة لتتم في أقل من ثانية، مع تحسين وضوح الشاشات والقوائم في الإضاءة النهارية وإضافة ميزة التحديث الهوائي التلقائي بمجرد اتصال الماكينة بشبكة الواي فاي.',
      'كما يتضمن التحديث عروضاً قوية للتجار تحت شعار "عمولتك أقوى على فواتير الإنترنت لاتصالات - عمولتك عمولتين" لزيادة عوائد التجار اليومية.',
    ],
    keyTakeaways: [
      'دعم التحديث التلقائي للماكينات عبر الـ Wi-Fi دون الحاجة للذهاب للفرع',
      'تحسين سرعة الطباعة الحرارية على ماكينات Mobiwire و UROVO و Verifone',
      'مضاعفة العمولات على باقات وفواتير الإنترنت المختارة',
    ],
    visualTheme: 'edfally-brand',
  },
  {
    id: 'electronic-payment-collection-system',
    slug: 'electronic-payment-collection-system',
    title: 'منظومة الدفع والتحصيل الإلكتروني ودورها في التحول الرقمي بمصر',
    category: 'fintech',
    categoryLabel: 'أخبار التكنولوجيا المالية',
    date: '20 فبراير 2026',
    readTime: '5 دقائق للقراءة',
    excerpt: 'منظومة الدفع والتحصيل الإلكتروني منظومة متكاملة مؤمنة بالتعاون مع البنك المركزي المصري والجهات المعنية لتسهيل المعاملات المالية اليومية.',
    contentParagraphs: [
      'تشهد جمهورية مصر العربية طفرة غير مسبوقة في قطاع المدفوعات الإلكترونية والشمول المالي، حيث أصبحت نقاط البيع الإلكترونية والمحافظ الرقمية الركيزة الأساسية لسداد الفواتير والرسوم الحكومية والخاصة.',
      'تعمل منظومة الدفع والتحصيل الإلكتروني على ربط مقدمي الخدمات والمرافق بشبكة واسعة من التجار والوكلاء المعتمدين، مما يوفر على المواطن عناء الانتظار ويوفر للتاجر مصدر دخل مستدام وموثوق.',
      'وتلتزم شركة ادفعلي منذ تأسيسها في عام 2020 بمواكبة رؤية الدولة المصرية في هذا التحول الرقمي عبر تطوير بنية سيرفرات محلية فائقة السرعة وتوفير الدعم الفني المتواصل للتجار.',
    ],
    keyTakeaways: [
      'تقليل الاعتماد على الكاش وتسريع دورة التحصيل للشركات والمرافق',
      'توفير إيصالات رسمية موثقة تحفظ حقوق المواطن والتاجر',
      'توسيع التغطية الجغرافية لتشمل القرى والمراكز في كافة المحافظات',
    ],
    visualTheme: 'card-terminal',
  },
  {
    id: 'efinance-fintech-investments',
    slug: 'efinance-fintech-investments',
    title: '«إي فاينانس» تجري مفاوضات للاستثمار في شركتين ناشئتين بمجال التكنولوجيا المالية',
    category: 'fintech',
    categoryLabel: 'أخبار التكنولوجيا المالية',
    date: '20 فبراير 2026',
    readTime: '4 دقائق للقراءة',
    excerpt: 'أعلنت شركة إي فاينانس للاستثمارات المالية والرقمية عن دخولها في مفاوضات للاستثمار في شركتين ناشئتين بقطاع التكنولوجيا المالية والمدفوعات.',
    contentParagraphs: [
      'يواصل قطاع التكنولوجيا المالية (Fintech) في مصر جذب الاستثمارات الاستراتيجية الكبرى، مما يعكس قوة السوق المصري وتنامي حجم المعاملات الرقمية اليومية عبر منصات وشبكات التحصيل.',
      'وتهدف هذه التحركات الاستثمارية إلى تعزيز البنية التحتية للمدفوعات الرقمية وتوسيع نطاق الحلول المقدمة للشركات الصغيرة والمتوسطة والتجار في مختلف القطاعات.',
      'ويؤكد الخبراء أن تكامل الشركات الوطنية المتخصصة في نقاط البيع مع البنية التحتية المالية يسهم بشكل مباشر في رفع كفاءة السوق وتقديم خدمات أسرع للمستهلك النهائي.',
    ],
    keyTakeaways: [
      'نمو متسارع في حجم الاستثمارات الموجهة لقطاع المدفوعات الرقمية بمصر',
      'دعم التوسع في نقاط البيع الإلكترونية والحلول السحابية للتجار',
    ],
    visualTheme: 'finance-press',
  },
  {
    id: 'what-is-electronic-payment-system',
    slug: 'what-is-electronic-payment-system',
    title: 'ما هو نظام الدفع الإلكتروني وما أهميته للتاجر والمواطن؟',
    category: 'fintech',
    categoryLabel: 'أخبار التكنولوجيا المالية',
    date: '20 فبراير 2026',
    readTime: '4 دقائق للقراءة',
    excerpt: 'يُعد نظام الدفع الإلكتروني أحد أهم أنواع طرق الدفع الحديثة، والذي من خلاله يمكنك سداد ودفع جميع التزاماتك اليومية بأمان وسرعة.',
    contentParagraphs: [
      'نظام الدفع الإلكتروني هو منظومة تقنية ومالية متكاملة تتيح إتمام عمليات سداد الفواتير، شحن الأرصدة، وتحويل الأموال إلكترونياً عبر ماكينات الـ POS أو تطبيقات الهواتف الذكية دون الحاجة للتعامل النقدي التقليدي المعقد.',
      'بالنسبة للتاجر، يمثل نظام الدفع الإلكتروني فرصة لزيادة عدد العملاء المترددين على متجره من خلال توفير كافة الخدمات التي يحتاجها الجيران والعملاء يومياً مثل شحن الكهرباء والموبايل والإنترنت ومصروفات المدارس.',
      'كما يوفر النظام تقارير مالية لحظية تساعد صاحب النشاط على معرفة أرباحه وعمولاته بدقة تامة في أي وقت.',
    ],
    keyTakeaways: [
      'توفير الوقت والجهد للمواطن عبر سداد كافة الفواتير من أقرب منفذ',
      'زيادة دخل التاجر وجذب عملاء جدد للمحل التجاري يومياً',
      'أمان مالي كامل بفضل التشفير ونظام التحقق OTP',
    ],
    visualTheme: 'mobile-wallet',
  },
  {
    id: 'electronic-payment-cards-types',
    slug: 'electronic-payment-cards-types',
    title: 'بعضها لا يشترط وجود حساب بنكي.. أنواع بطاقات الدفع الإلكتروني وفائدة كل منها',
    category: 'fintech',
    categoryLabel: 'أخبار التكنولوجيا المالية',
    date: '20 فبراير 2026',
    readTime: '5 دقائق للقراءة',
    excerpt: 'بطاقات الدفع الإلكترونية هي إحدى أدوات الدفع الإلكتروني والتي تمكن العملاء من إجراء المعاملات المالية وسداد الفواتير بمرونة عالية.',
    contentParagraphs: [
      'تتنوع بطاقات الدفع الإلكتروني في السوق المصري لتناسب كافة شرائح المجتمع، ومن أبرزها البطاقات مسبقة الدفع (Prepaid Cards) التي لا تشترط فتح حساب بنكي تقليدي، وبطاقات الخصم المباشر (Debit Cards)، والبطاقات الائتمانية (Credit Cards).',
      'تتكامل هذه البطاقات والمحافظ الإلكترونية مع ماكينات نقاط البيع الحديثة المزودة بتقنيات الـ NFC وقارئ الشرائح الذكية، مما يتيح للتاجر قبول كافة وسائل الدفع بمرونة وأمان.',
      'وتدعم ماكينات ادفعلي الحديثة مثل PAX A920 و Verifone X990 و SUNMI P2 أحدث معايير القراءة والأمان للتعامل مع مختلف وسائل الدفع الرقمية.',
    ],
    keyTakeaways: [
      'البطاقات مسبقة الدفع متاحة لجميع المواطنين دون شرط الحساب البنكي',
      'تكامل كامل بين البطاقات والمحافظ الإلكترونية وماكينات نقاط البيع الحديثة',
    ],
    visualTheme: 'pos-keypad',
  },
];

export const GALLERY_ITEMS: GalleryMediaItem[] = [
  {
    id: 'edfally-brand-identity',
    title: 'هوية شركة ادفعلي - ببساطة أسهل وأسرع',
    subtitle: 'المقر الرئيسي ومنظومة التحول الرقمي',
    category: 'branches',
    categoryLabel: 'الفروع والوكلاء',
    mediaType: 'image',
    location: 'المقر الرئيسي - مصر',
    description: 'شركة ادفعلي للمدفوعات الإلكترونية والرقمية، منظومة متكاملة تخدم أكثر من 863 نقطة بيع نشطة وتجار في مختلف محافظات الجمهورية.',
    stepsOrHighlights: [
      'غرفة عمليات ودعم فني متواصل للتجار والوكلاء',
      'مركز تهيئة وبرمجة ماكينات نقاط البيع POS قبل التسليم',
      'قاعة تدريب الوكلاء المعتمدين على أحدث التحديثات',
    ],
    visualTheme: 'brand-banner',
  },
  {
    id: 'tutorial-usb-pos-install',
    title: 'فيديو إرشادي: طريقة تنزيل وتحديث ادفعلي على ماكينات POS عبر الفلاشة والواي فاي',
    subtitle: 'شرح عملي لماكينات PAX و SUNMI و Verifone X990',
    category: 'tutorials',
    categoryLabel: 'فيديوهات إرشادية',
    mediaType: 'video',
    duration: '03:45',
    description: 'دليل مرئي خطوة بخطوة يشرح للتاجر كيفية تثبيت تطبيق ادفعلي على الماكينة باستخدام الفلاشة (USB OTG) أو تفعيل التحديث التلقائي عبر شبكة الواي فاي.',
    stepsOrHighlights: [
      'الخطوة 1: تحميل ملف الماكينة المناسب من صفحة المنتجات والتطبيقات على فلاشة.',
      'الخطوة 2: توصيل الفلاشة بالماكينة وتشغيل التثبيت التلقائي.',
      'الخطوة 3: فتح الواي فاي ليقوم النظام بسحب آخر تحديثات الخدمات والعمولات تلقائياً.',
    ],
    visualTheme: 'tutorial-usb',
  },
  {
    id: 'dakahlia-agent-branch',
    title: 'فرع ووكالة الدقهلية - أ. السيد الشريف (Elsherif Payment)',
    subtitle: 'وكيل معتمد محافظة الدقهلية',
    category: 'branches',
    categoryLabel: 'الفروع والوكلاء',
    mediaType: 'image',
    location: 'محافظة الدقهلية',
    description: 'مركز خدمة وتوزيع معتمد لشركة ادفعلي بمحافظة الدقهلية بإدارة أ. السيد الشريف، يقدم خدمات فتح الحسابات وتسليم الماكينات وشحن الأرصدة.',
    stepsOrHighlights: [
      'تسليم فوري لماكينات الدفع الإلكتروني وتفعيل حسابات التجار',
      'دعم فني ميداني وتوفير مستلزمات التشغيل للتجار في الدقهلية',
    ],
    visualTheme: 'branch-dakahlia',
  },
  {
    id: 'menoufia-agent-branch',
    title: 'فرع ووكالة المنوفية - أ. محمد الحبيب',
    subtitle: 'وكيل معتمد محافظة المنوفية',
    category: 'branches',
    categoryLabel: 'الفروع والوكلاء',
    mediaType: 'image',
    location: 'محافظة المنوفية',
    description: 'مقر الوكيل المعتمد لشركة ادفعلي في محافظة المنوفية (أ. محمد الحبيب)، لخدمة التجار والموزعين وتوفير الأرصدة على مدار الساعة.',
    stepsOrHighlights: [
      'تغطية شاملة لمراكز وقرى محافظة المنوفية',
      'توفير كافة موديلات الماكينات وتطبيقات التحصيل الفوري',
    ],
    visualTheme: 'branch-menoufia',
  },
  {
    id: 'tutorial-mobiwire-bluetooth',
    title: 'فيديو إرشادي: تثبيت تطبيق ادفعلي وتطبيق الطباعة على ماكينة Mobiwire v3 & v4',
    subtitle: 'الإرسال عبر البلوتوث وتفعيل الطابعة الحرارية',
    category: 'tutorials',
    categoryLabel: 'فيديوهات إرشادية',
    mediaType: 'video',
    duration: '02:50',
    description: 'شرح مفصل لطريقة إرسال ملف APK لتطبيق ادفعلي وتطبيق دعم الطباعة إلى ماكينة موبي وير عبر البلوتوث وضبط إعدادات الطباعة الفورية.',
    stepsOrHighlights: [
      'الخطوة 1: تحميل ملف تطبيق ادفعلي وملف دعم الطباعة للموبي وير.',
      'الخطوة 2: إرسال الملفين عبر البلوتوث إلى الماكينة وتثبيتهما.',
      'الخطوة 3: تجربة طباعة إيصال اختباري للتأكد من جاهزية الماكينة.',
    ],
    visualTheme: 'tutorial-bluetooth',
  },
  {
    id: 'pos-devices-lineup',
    title: 'استعراض الأجهزة وماكينات التحصيل المدعومة في منظومة ادفعلي',
    subtitle: 'PAX A920 • Verifone X990 • SUNMI P2 • Mobiwire • UROVO',
    category: 'devices',
    categoryLabel: 'أجهزة نقاط البيع',
    mediaType: 'image',
    location: 'معرض أجهزة ادفعلي',
    description: 'تشكيلة متكاملة من أحدث ماكينات نقاط البيع الذكية التي تدعمها شركة ادفعلي لتناسب كافة أحجام الأنشطة التجارية.',
    stepsOrHighlights: [
      'دعم كامل للماكينات الحديثة والماكينات الخارجية المملوكة للتاجر',
      'تحديثات دورية مجانية للسوفت وير وقوائم الخدمات',
    ],
    visualTheme: 'tutorial-pos',
  },
];
