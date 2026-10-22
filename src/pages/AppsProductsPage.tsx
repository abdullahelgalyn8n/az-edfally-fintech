import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Download,
  Search,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Smartphone,
  ArrowLeft,
  ArrowRight,
  Usb,
  Wifi,
  Bluetooth,
  HelpCircle,
} from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { PRODUCTS_CATALOG, ProductItem } from '../data/siteData';
import {
  filterProducts,
  getProductBySlug,
  ProductCategoryFilter,
} from '../utils/catalogLogic';
import { ProductDeviceIllustration } from '../components/PosVisuals';

const CATEGORY_TABS: Array<{ id: ProductCategoryFilter; label: string }> = [
  { id: 'all', label: `كل المنتجات (${PRODUCTS_CATALOG.length})` },
  { id: 'pos', label: 'ماكينات نقاط البيع POS (5)' },
  { id: 'mobile', label: 'تطبيقات الموبايل (1)' },
  { id: 'plugin', label: 'ملحقات الطباعة (1)' },
  { id: 'api', label: 'حلول الربط API (1)' },
];

export const AppsProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDownloadItem, setActiveDownloadItem] = useState<ProductItem | null>(null);

  const filteredProducts = filterProducts(PRODUCTS_CATALOG, selectedCategory, searchQuery);
  const posMachinesOnly = PRODUCTS_CATALOG.filter((p) => p.category === 'pos');

  return (
    <div>
      <PageHeader
        title="المنتجات والتطبيقات وماكينات التحصيل"
        subtitle="استعرض وحمّل تطبيقات ادفعلي للتجار وسوفت وير ماكينات نقاط البيع المعتمدة (PAX, SUNMI, Verifone, Mobiwire, UROVO) مع شرح خطوات التثبيت لكل جهاز."
      />

      {/* Section 1: Featured Merchant Mobile App Spotlight */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-l from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white p-7 sm:p-10 border border-sky-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-right">
                <div className="text-xs font-bold text-emerald-300 mb-2">
                  الإصدار الرسمي للتجار · أندرويد و iOS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  تطبيق التجار للموبايل — روّق دماغك.. ادفعلي هتدفعلك
                </h2>
                <p className="mt-3 text-base text-sky-100 leading-relaxed">
                  ادفع كل مدفوعاتك وحصّل فواتير عملائك من مكان واحد بسهولة وأمان: شحن رصيد، فواتير
                  الموبايل، فواتير الإنترنت، فواتير الكهرباء، مصروفات الدراسة، وباقات BNB Dafatery.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-white">
                  <div className="bg-white/10 rounded-xl p-3 border border-white/15">
                    • فواتير الموبايل
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/15">
                    • فواتير الإنترنت
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/15">
                    • فواتير الكهرباء
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/15">
                    • مصروفات الدراسة
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveDownloadItem(PRODUCTS_CATALOG[0])}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Google Play / تحميل APK مباشر</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDownloadItem(PRODUCTS_CATALOG[0])}
                    className="px-5 py-3 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-bold text-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-sky-800" />
                    <span>نسخة App Store (iOS)</span>
                  </button>

                  <Link
                    to="/apps/edfally-merchant-app"
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors inline-flex items-center gap-1.5 border border-white/20"
                  >
                    <span>صفحة تفاصيل التطبيق</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ProductDeviceIllustration
                  visualType="mobile-app"
                  modelName="تطبيق ادفعلي للتجار"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Organized Products & Supported POS Terminals Catalog */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1.5">
                كتالوج المنتجات المنظم · {filteredProducts.length} منتج معروض
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                الأجهزة وماكينات التحصيل والتطبيقات المدعومة
              </h2>
              <p className="mt-2 text-base text-slate-700">
                تدعم حلول التجار لدينا مجموعة واسعة من الأجهزة وماكينات التحصيل مع رابط مستقل لكل
                جهاز لشرح خطوات التنزيل والتشغيل
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-80">
              <label htmlFor="product-search" className="sr-only">
                ابحث عن ماكينة أو تطبيق
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="product-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث (مثال: PAX أو Verifone أو Mobiwire)..."
                  className="w-full pr-10 pl-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="tablist"
            aria-label="تصنيفات المنتجات والماكينات"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl mb-8 w-fit"
          >
            {CATEGORY_TABS.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Download / Installation Notice Banner if clicked */}
          {activeDownloadItem && (
            <div
              role="region"
              aria-label="نافذة تحميل وتثبيت المنتج"
              className="mb-8 bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-700 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-emerald-300 mb-1">
                    جاهز للتحميل والتثبيت المباشر · {activeDownloadItem.englishModel}
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    {activeDownloadItem.downloadLabel} ({activeDownloadItem.fileSize || 'مباشر'})
                  </h3>
                  <p className="text-sm text-emerald-100 mt-1">
                    طريقة التثبيت المعتمدة: {activeDownloadItem.installMethod}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    to={`/apps/${activeDownloadItem.slug}`}
                    className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors"
                  >
                    فتح دليل التثبيت الكامل
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveDownloadItem(null)}
                    className="px-3.5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold cursor-pointer"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <p className="text-base font-bold text-slate-800 mb-2">
                لا توجد أجهزة أو تطبيقات مطابقة لبحثك "{searchQuery}"
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                إعادة ضبط الفلتر
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-sky-600 transition-colors overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="p-4 pb-0">
                      <ProductDeviceIllustration
                        visualType={product.visualType}
                        modelName={product.englishModel}
                      />
                    </div>

                    <div className="p-6">
                      {/* Clean unboxed metadata line */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-semibold mb-2">
                        <span className="text-sky-800 font-bold">
                          {product.categoryLabel} · {product.badgeText}
                        </span>
                        <span dir="ltr" className="font-mono-nums text-slate-700 font-bold">
                          {product.supportedVersions}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900">
                        <Link
                          to={`/apps/${product.slug}`}
                          className="hover:text-sky-700 transition-colors"
                        >
                          {product.name}
                        </Link>
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Installation summary box */}
                      <div className="mt-4 bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
                        <div className="text-xs font-bold text-slate-900 mb-1">
                          طريقة التنزيل والتشغيل المختصرة:
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">
                          {product.installSteps[0]} {product.installSteps[1]}
                        </div>
                      </div>

                      {/* Specs preview */}
                      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                        {product.specs.slice(0, 2).map((spec) => (
                          <div
                            key={spec.label}
                            className="bg-slate-50/70 rounded-lg px-3 py-2 border border-slate-200/60"
                          >
                            <span className="text-slate-500 block">{spec.label}</span>
                            <span className="font-bold text-slate-900">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      to={`/apps/${product.slug}`}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-2"
                    >
                      <span>صفحة المنتج وخطوات التثبيت</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveDownloadItem(product)}
                      className="px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{product.downloadLabel}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: POS Hardware Comparison Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-xs font-bold text-sky-800 mb-1.5">دليل مقارنة الأجهزة</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              جدول مقارنة ماكينات التحصيل المعتمدة (POS)
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-700">
              قارن بين الموديلات المدعومة وطريقة تنزيل وتحديث سوفت وير ادفعلي على كل ماكينة
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-800">
                    <th className="py-3.5 px-5">اسم الماكينة</th>
                    <th className="py-3.5 px-5">الموديلات المدعومة</th>
                    <th className="py-3.5 px-5">طريقة التثبيت والتحديث</th>
                    <th className="py-3.5 px-5">حجم الحزمة</th>
                    <th className="py-3.5 px-5">الرابط المخصص</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {posMachinesOnly.map((pos) => (
                    <tr key={pos.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-5 font-extrabold text-slate-900">{pos.name}</td>
                      <td dir="ltr" className="py-3.5 px-5 font-mono-nums text-sky-800 font-bold text-right">
                        {pos.supportedVersions}
                      </td>
                      <td className="py-3.5 px-5 text-slate-700">{pos.installMethod}</td>
                      <td dir="ltr" className="py-3.5 px-5 font-mono-nums text-slate-700 text-right">
                        {pos.fileSize}
                      </td>
                      <td className="py-3.5 px-5">
                        <Link
                          to={`/apps/${pos.slug}`}
                          className="text-xs font-bold text-sky-800 hover:underline inline-flex items-center gap-1"
                        >
                          <span>فتح الصفحة</span>
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: لماذا تطبيقاتنا؟ (Matching screenshot bottom section) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">لماذا تطبيقاتنا؟</h2>
            <p className="mt-2 text-base text-slate-700">
              صممت تطبيقات وسوفت وير ماكينات ادفعلي لتوفر للتاجر أعلى درجات السرعة والأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">سرعة فائقة</h3>
              <p className="text-sm text-slate-700">
                تطبيقات سريعة وخفيفة تعمل بسلاسة وتنفذ عمليات الشحن وسداد الفواتير لحظياً
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">أمان عالي</h3>
              <p className="text-sm text-slate-700">
                حماية متقدمة لبياناتك ومعاملاتك وأرصدتك بنظام التحقق OTP وربط الماكينة
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">سهولة الاستخدام</h3>
              <p className="text-sm text-slate-700">
                واجهة عربية بسيطة وواضحة عالية التباين تناسب جميع التجار على الموبايل والماكينة
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">المنتج غير موجود</h1>
        <p className="text-slate-700 mb-6">لم نتمكن من العثور على رابط الماكينة أو التطبيق المطلوب.</p>
        <Link
          to="/apps"
          className="px-5 py-2.5 rounded-xl bg-sky-700 text-white font-bold text-sm inline-flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى صفحة المنتجات والتطبيقات</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={product.name}
        subtitle={`${product.englishModel} — ${product.shortDescription}`}
        breadcrumbLabel={product.name}
        parentBreadcrumb={{ label: 'المنتجات والتطبيقات', to: '/apps' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Details Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                <ProductDeviceIllustration
                  visualType={product.visualType}
                  modelName={product.englishModel}
                />

                <div className="mt-6">
                  <div className="text-xs font-bold text-sky-800 mb-1">
                    {product.categoryLabel} · {product.badgeText}
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                    نظرة عامة على {product.name}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Installation Guide */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    خطوات التنزيل والتثبيت على الجهاز
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                    <Usb className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Bluetooth className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-4">
                  {product.installSteps.map((step, index) => (
                    <div
                      key={step}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex items-start gap-4"
                    >
                      <span className="w-7 h-7 rounded-lg bg-sky-700 text-white font-mono-nums font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs & Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">المواصفات الفنية</h3>
                  <dl className="space-y-3 text-sm">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between border-b border-slate-200 pb-2.5"
                      >
                        <dt className="text-slate-600 font-medium">{spec.label}</dt>
                        <dd className="font-bold text-slate-900">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">أبرز المميزات</h3>
                  <ul className="space-y-3 text-sm">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Action Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-b from-[#0A2540] to-[#0B3B6E] text-white rounded-2xl p-7 border border-sky-900">
                <div className="text-xs font-bold text-emerald-300 mb-1">
                  {product.priceNote}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">{product.name}</h3>
                <div className="text-xs text-sky-200 mb-5">
                  <span className="font-bold">الموديل: </span>
                  <span dir="ltr" className="font-mono-nums">
                    {product.supportedVersions}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setDownloadInitiated(true)}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{product.downloadLabel}</span>
                </button>

                {downloadInitiated && (
                  <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-xs text-emerald-100 leading-relaxed">
                    <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>تم تجهيز حزمة ({product.englishModel})</span>
                    </div>
                    اتبع خطوات التثبيت الموضحة بالصفحة أو تواصل مع الدعم الفني على 01110666151
                    للتفعيل الفوري على حسابك.
                  </div>
                )}

                <Link
                  to="/contact"
                  className="mt-3 w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center block transition-colors border border-white/15"
                >
                  طلب شراء / برمجة الماكينة
                </Link>

                <div className="mt-6 pt-5 border-t border-white/15 text-xs text-sky-100 space-y-2">
                  <div>
                    <span className="text-sky-300 font-bold">مناسب لـ: </span>
                    {product.recommendedFor}
                  </div>
                  <div>
                    <span className="text-sky-300 font-bold">الاتصال المدعوم: </span>
                    {product.connectionType.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Other Products Quick Links */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                <h4 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-700" />
                  <span>أجهزة وتطبيقات أخرى</span>
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {PRODUCTS_CATALOG.filter((p) => p.slug !== product.slug).map((other) => (
                    <li key={other.id}>
                      <Link
                        to={`/apps/${other.slug}`}
                        className="text-slate-700 hover:text-sky-800 font-semibold flex items-center justify-between py-1"
                      >
                        <span>{other.name}</span>
                        <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
