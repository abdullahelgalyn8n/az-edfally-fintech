import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  Building2,
  Headphones,
  Download,
} from 'lucide-react';
import {
  HOME_STATS,
  STRATEGIC_GOALS,
  RELIABILITY_PILLARS,
  PRODUCTS_CATALOG,
  SERVICES_LIST,
} from '../data/siteData';
import { ProductDeviceIllustration } from '../components/PosVisuals';

const HERO_SLIDES = [
  {
    id: 'etisalat-commission',
    kicker: 'عرض التجار الحصري · #عمولتك_عمولتين',
    title: 'عمولتك أقوى على فواتير الإنترنت لاتصالات',
    subtitle: 'ضاعف أرباحك اليومية عند تحصيل فواتير الإنترنت وشحن الرصيد عبر ماكينات Mobiwire و PAX وتطبيق ادفعلي.',
    deviceLabel: 'MobiWire & PAX SmartPOS',
    highlightStat: 'دفع فوري 100%',
  },
  {
    id: 'bnb-dafatery',
    kicker: 'تعاقد جديد · تفعيل فوري',
    title: 'دلوقتي معاك على ادفعلي BNB Dafatery',
    subtitle: 'ادفع وفعل اشتراكات باقات BNB Dafatery مباشرة بأكواد سريعة 3039 و 3040 و 3041 و 3042 من الماكينة أو التطبيق.',
    deviceLabel: 'أكواد 3039 · 3040 · 3041 · 3042',
    highlightStat: 'ربط مباشر API',
  },
  {
    id: 'pos-fleet',
    kicker: 'أقوى أسطول أجهزة نقاط البيع',
    title: 'دعم شامل لماكينات PAX و Verifone و SUNMI و UROVO',
    subtitle: 'تحديث تلقائي للسوفت وير عبر الواي فاي أو الفلاشة مع طباعة حرارية فورية ودعم فني على مدار الساعة.',
    deviceLabel: 'PAX · Verifone X990 · SUNMI',
    highlightStat: '+863 نقطة بيع',
  },
];

export const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const currentSlide = HERO_SLIDES[activeSlide];
  const featuredProducts = PRODUCTS_CATALOG.slice(0, 4);
  const featuredServices = SERVICES_LIST.slice(0, 3);

  return (
    <div>
      {/* High-Contrast Hero Section */}
      <section className="relative bg-gradient-to-bl from-[#07192E] via-[#0B3B6E] to-[#026AA7] text-white overflow-hidden border-b border-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Right Column (RTL): Primary Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center text-right">
              <div className="text-xs sm:text-sm font-bold text-sky-200 mb-3 tracking-wide">
                ببساطة أسهل وأسرع · شركة مساهمة مصرية منذ عام 2020
              </div>

              <h1
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                className="font-extrabold tracking-tight text-white leading-[1.2]"
              >
                نقدم حلول متكاملة{' '}
                <span className="text-emerald-300 underline decoration-emerald-400/50 decoration-2 underline-offset-8">
                  للدفع الإلكتروني
                </span>{' '}
                والتحول الرقمي
              </h1>

              <p className="mt-5 text-base sm:text-lg text-sky-100 leading-relaxed max-w-2xl font-medium">
                من خلال قنوات إلكترونية عديدة وماكينات نقاط بيع ذكية (POS) وتطبيقات الموبايل، نسهل
                عليك الدفع والتحصيل وسداد الفواتير بأمان وسرعة في جميع محافظات مصر.
              </p>

              {/* Single Primary CTA + Secondary Action */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-colors inline-flex items-center gap-2.5 shadow-sm whitespace-nowrap shrink-0"
                >
                  <span>ابدأ الآن كوكيل أو تاجر</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <Link
                  to="/apps"
                  className="px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-bold text-sm sm:text-base transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4 text-sky-700" />
                  <span>استعراض الماكينات والتطبيقات</span>
                </Link>
              </div>

              {/* Clean Unboxed Trust Metadata */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-sky-100 font-medium">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>تطبيق سهل الاستخدام (أندرويد و iOS)</span>
                </div>
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>دفع آمن ومضمون 100%</span>
                </div>
              </div>
            </div>

            {/* Left Column (RTL): Interactive POS & Campaign Showcase Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/55 border border-white/20 rounded-2xl p-6 sm:p-7 backdrop-blur-xs">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-sky-200 mb-4">
                  <span className="font-bold text-emerald-300">{currentSlide.kicker}</span>
                  <span className="font-mono-nums text-white/80">{currentSlide.highlightStat}</span>
                </div>

                {/* POS Interactive Screen Mockup */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-xl p-5 mb-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block">منظومة تحصيل التجار</span>
                      <span className="text-sm font-bold text-white font-mono-nums">
                        {currentSlide.deviceLabel}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/60 text-xs font-bold inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>دفع فوري</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-white leading-snug mb-2">
                    {currentSlide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentSlide.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-sky-300 font-semibold">أمان عالي 100% · OTP</span>
                    <Link
                      to="/apps"
                      className="text-white font-bold hover:text-emerald-300 transition-colors"
                    >
                      تفاصيل الأجهزة ←
                    </Link>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`عرض الشريحة ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide ? 'w-7 bg-emerald-400' : 'w-2 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="الشريحة السابقة"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="الشريحة التالية"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Pages Directory Bar */}
        <div className="bg-slate-950/45 border-t border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 overflow-x-auto text-xs">
            <span className="font-bold text-sky-200 whitespace-nowrap shrink-0">
              خريطة صفحات الموقع المباشرة:
            </span>
            <div className="flex items-center gap-2">
              <Link to="/about" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                من نحن (/about)
              </Link>
              <Link to="/services" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                خدماتنا (/services)
              </Link>
              <Link to="/apps" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                المنتجات والماكينات (/apps)
              </Link>
              <Link to="/partners" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                شركاؤنا (/partners)
              </Link>
              <Link to="/gallery" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                المعرض (/gallery)
              </Link>
              <Link to="/news" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                الأخبار (/news)
              </Link>
              <Link to="/contact" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold whitespace-nowrap">
                اتصل بنا (/contact)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: أرقامنا تتحدث عنا (Quantitative Proof Strip) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">أرقامنا تتحدث عنا</h2>
            <p className="mt-2 text-base text-slate-700 font-medium">
              نفخر بثقة عملائنا وتجارنا في جميع المحافظات ونسعى دائماً لتقديم أفضل خدمات الدفع الإلكتروني
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 text-center"
              >
                <div
                  dir="ltr"
                  className="text-3xl sm:text-4xl font-extrabold text-sky-800 font-mono-nums tracking-tight"
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-base font-bold text-slate-900">{stat.label}</div>
                <div className="mt-1 text-xs text-slate-600">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: تعرف علينا - شركة ادفعلي للمدفوعات الإلكترونية */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="text-xs font-bold text-sky-800 mb-2">تعرف علينا · قصتنا</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                شركة ادفعلي للمدفوعات الإلكترونية
              </h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                شركة مساهمة مصرية تمارس نشاطها منذ عام 2020 في مجال المدفوعات الإلكترونية والرقمية.
                بدأت نشاطها بتطوير أنظمة المدفوعات والتحول الرقمي مواكبةً لرؤية الدولة المصرية في
                الشمول المالي والتحول الرقمي.
              </p>

              <ul className="mt-6 space-y-3.5 text-sm sm:text-base font-semibold text-slate-800">
                <li className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-sky-700 shrink-0" />
                  <span>شركة مساهمة مصرية معتمدة منذ عام 2020</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>تطوير مستمر لأنظمة المدفوعات الإلكترونية وماكينات الـ POS</span>
                </li>
                <li className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-sky-700 shrink-0" />
                  <span>مواكبة رؤية الدولة المصرية في التحول الرقمي وسداد المرافق</span>
                </li>
                <li className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>دعم فني متميز ومتواصل للتجار والوكلاء على مدار الساعة</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-5 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>اعرف المزيد والهيكل الوظيفي</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  to="/partners"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-sm transition-colors whitespace-nowrap shrink-0"
                >
                  شركاء النجاح والوكلاء
                </Link>
              </div>
            </div>

            {/* Left Visual Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white p-7 sm:p-8 flex flex-col justify-between border border-slate-800">
                <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                  <div>
                    <div className="text-xs text-sky-200">التأسيس والترخيص</div>
                    <div className="text-xl font-extrabold font-mono-nums">2020 · مصر</div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-sky-200">فريق العمل</div>
                    <div className="text-xl font-extrabold font-mono-nums">+50 خبير ومهندس</div>
                  </div>
                </div>

                <div className="my-8 space-y-4">
                  <h3 className="text-xl font-extrabold text-white">
                    بيئة تقنية متكاملة لخدمة التاجر والمواطن
                  </h3>
                  <p className="text-sm text-sky-100 leading-relaxed">
                    ندير منظومة الدفع من خلال سيرفراتنا الخاصة وفريق هندسي متخصص في البرمجيات وأمن
                    المعلومات لضمان سرعة تنفيذ العمليات واستقرار الرصيد في كافة الأوقات.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                      <div className="text-xs text-sky-200">المقر الرئيسي</div>
                      <div className="text-sm font-bold text-white mt-0.5">جمهورية مصر العربية</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                      <div className="text-xs text-sky-200">التغطية الجغرافية</div>
                      <div className="text-sm font-bold text-white mt-0.5">شبكة وكلاء بالمحافظات</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-sky-200">
                  <span>شركة ادفعلي للمدفوعات الإلكترونية والرقمية</span>
                  <span className="font-mono-nums">ISO / PCI Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: المنتجات وماكينات التحصيل والتطبيقات (Organized Showcase) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1.5">المنتجات والأجهزة المعتمدة</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                تطبيقات التجار وماكينات نقاط البيع (POS)
              </h2>
              <p className="mt-2 text-base text-slate-700">
                اختر الجهاز أو التطبيق المناسب لنشاطك التجاري واستعرض المواصفات وطريقة التثبيت المباشرة
              </p>
            </div>
            <Link
              to="/apps"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-colors inline-flex items-center gap-2 self-start md:self-end whitespace-nowrap shrink-0"
            >
              <span>عرض جميع المنتجات والماكينات ({PRODUCTS_CATALOG.length})</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-sky-600 transition-colors"
              >
                <div>
                  <div className="p-3 pb-0">
                    <ProductDeviceIllustration
                      visualType={product.visualType}
                      modelName={product.englishModel}
                      compact
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-sky-800 mb-1">
                      {product.categoryLabel} · {product.badgeText}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      <Link to={`/apps/${product.slug}`} className="hover:text-sky-700 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="text-xs font-mono-nums text-slate-600 mt-0.5">
                      {product.englishModel}
                    </div>
                    <p className="mt-2.5 text-sm text-slate-700 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <Link
                    to={`/apps/${product.slug}`}
                    className="text-xs font-bold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>صفحة المنتج والتثبيت</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-mono-nums text-slate-600">{product.fileSize}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: أهدافنا + الاعتمادية */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold text-sky-800 mb-1.5">أهدافنا الاستراتيجية</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              نسعى لتحقيق أهداف طموحة
            </h2>
            <p className="mt-2 text-base text-slate-700">
              نعمل بجد لتحقيق رؤيتنا في قيادة التحول الرقمي وخدمات الدفع في مصر
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {STRATEGIC_GOALS.map((goal) => (
              <div
                key={goal.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-nums font-bold text-sky-700 mb-2">
                    {goal.number}. الهدف الاستراتيجي
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{goal.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* الاعتمادية: نعتمد على أسس قوية */}
          <div className="rounded-3xl bg-gradient-to-l from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white p-8 sm:p-10 lg:p-12 border border-sky-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 text-right">
                <div className="text-xs font-bold text-sky-200 mb-2">الاعتمادية والاستقرار</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  نعتمد على أسس قوية
                </h2>
                <p className="mt-3 text-base text-sky-100 leading-relaxed">
                  نؤمن بأن النجاح يُبنى على أسس صلبة من التطوير المستمر للسيرفرات والاستثمار في
                  الموارد البشرية والشراكات الكبرى.
                </p>
                <div className="mt-6">
                  <Link
                    to="/services"
                    className="px-5 py-3 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-bold text-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>استكشف خدماتنا وأكواد الدفع</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {RELIABILITY_PILLARS.map((pillar) => (
                  <div
                    key={pillar.step}
                    className="bg-slate-950/40 border border-white/15 rounded-xl p-4 flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 font-mono-nums font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {pillar.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-sky-100 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Preview of Services with Dedicated Links */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-slate-900">أبرز قطاعات الخدمات في ادفعلي</h3>
              <Link to="/services" className="text-sm font-bold text-sky-800 hover:text-sky-950">
                كل الخدمات (6) ←
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((srv) => (
                <Link
                  key={srv.id}
                  to={`/services/${srv.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-600 transition-colors block"
                >
                  <div className="text-xs font-mono-nums font-bold text-sky-700 mb-1">
                    {srv.number} · خدمة متكاملة
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">{srv.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {srv.shortDescription}
                  </p>
                  <span className="text-xs font-bold text-sky-800">
                    عرض تفاصيل الخدمة والأكواد ←
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
