import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  CreditCard,
  Smartphone,
  Building2,
  ShoppingCart,
  Wallet,
  ShieldCheck,
  Search,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { SERVICES_LIST, ServiceItem } from '../data/siteData';
import { getServiceBySlug, searchBillerCodes } from '../utils/catalogLogic';

const ServiceIcon: React.FC<{ iconName: ServiceItem['iconName'] }> = ({ iconName }) => {
  switch (iconName) {
    case 'credit-card':
      return <CreditCard className="w-6 h-6" />;
    case 'smartphone':
      return <Smartphone className="w-6 h-6" />;
    case 'building':
      return <Building2 className="w-6 h-6" />;
    case 'shopping-cart':
      return <ShoppingCart className="w-6 h-6" />;
    case 'wallet':
      return <Wallet className="w-6 h-6" />;
    case 'shield':
      return <ShieldCheck className="w-6 h-6" />;
  }
};

export const ServicesPage: React.FC = () => {
  const [codeQuery, setCodeQuery] = useState('');
  const filteredCodes = searchBillerCodes(codeQuery);

  return (
    <div>
      <PageHeader
        title="خدماتنا"
        subtitle="نقدم مجموعة متكاملة من الحلول الرقمية للدفع الإلكتروني، تحصيل الفواتير، ماكينات نقاط البيع، وحلول المؤسسات."
      />

      {/* Section 1: 6 Core Services Grid (High-Contrast Structured Cards) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_LIST.map((service) => (
              <article
                key={service.id}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 hover:border-sky-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center shadow-xs">
                      <ServiceIcon iconName={service.iconName} />
                    </div>
                    <span className="text-xs font-mono-nums font-bold text-slate-600">
                      {service.number} · خدمة معتمدة
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900 mb-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-sky-700 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/80 pt-4 text-sm font-semibold text-slate-800">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5"
                  >
                    <span>رابط وتفاصيل الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                  <span
                    dir="ltr"
                    className="text-[11px] font-mono-nums text-slate-600"
                  >{`/services/${service.slug}`}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Biller Code & Quick Payment Directory */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1.5">دليل الأكواد الفورية للتجار</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                دليل أكواد الدفع السريع والخدمات المميزة
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-700">
                ابحث بالكود (مثل 3039 لباقات BNB Dafatery) أو باسم الخدمة للوصول الفوري على الماكينة أو التطبيق
              </p>
            </div>

            <div className="w-full md:w-80">
              <label htmlFor="biller-search" className="sr-only">
                ابحث عن كود الخدمة
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="biller-search"
                  type="search"
                  value={codeQuery}
                  onChange={(e) => setCodeQuery(e.target.value)}
                  placeholder="ابحث بالكود (3039) أو اسم الخدمة..."
                  className="w-full pr-10 pl-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-800">
                    <th className="py-3.5 px-5">كود الخدمة</th>
                    <th className="py-3.5 px-5">اسم الخدمة / الباقة</th>
                    <th className="py-3.5 px-5">مقدم الخدمة</th>
                    <th className="py-3.5 px-5">ملاحظة التفعيل والعمولة</th>
                    <th className="py-3.5 px-5">القطاع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {filteredCodes.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-600">
                        لا توجد أكواد مطابقة لبحثك "{codeQuery}". جرب البحث بكود 3039 أو اتصالات.
                      </td>
                    </tr>
                  ) : (
                    filteredCodes.map((item) => (
                      <tr key={`${item.code}-${item.name}`} className="hover:bg-slate-50">
                        <td className="py-3.5 px-5 font-mono-nums font-extrabold text-sky-800">
                          #{item.code}
                        </td>
                        <td className="py-3.5 px-5 font-bold text-slate-900">{item.name}</td>
                        <td className="py-3.5 px-5 text-slate-700">{item.provider}</td>
                        <td className="py-3.5 px-5 text-emerald-800 font-semibold">
                          {item.commissionNote}
                        </td>
                        <td className="py-3.5 px-5">
                          <Link
                            to={`/services/${item.serviceSlug}`}
                            className="text-xs font-bold text-sky-800 hover:underline"
                          >
                            {item.serviceTitle}
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Custom Service CTA Banner matching screenshot */}
          <div className="mt-14 rounded-3xl bg-gradient-to-l from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white p-8 sm:p-12 text-center border border-sky-900">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              هل تحتاج خدمة مخصصة أو ربط برمجي لشركتك؟
            </h2>
            <p className="mt-3 text-base text-sky-100 max-w-xl mx-auto">
              تواصل معنا لمناقشة احتياجاتك وتصميم الحل المناسب لعملك أو إضافة أكواد تحصيل خاصة
              بشركتك على جميع ماكينات وتطبيقات ادفعلي.
            </p>
            <div className="mt-7">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-colors inline-flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <span>تواصل معنا الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">الخدمة غير موجودة</h1>
        <p className="text-slate-700 mb-6">لم نتمكن من العثور على رابط الخدمة المطلوب.</p>
        <Link
          to="/services"
          className="px-5 py-2.5 rounded-xl bg-sky-700 text-white font-bold text-sm inline-flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى صفحة الخدمات</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbLabel={service.title}
        parentBreadcrumb={{ label: 'خدماتنا', to: '/services' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90">
                <div className="text-xs font-mono-nums font-bold text-sky-800 mb-2">
                  قطاع الخدمة رقم {service.number} · الفئة المستهدفة: {service.targetAudience}
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                  تفاصيل ومميزات الخدمة
                </h2>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                  لماذا تختار {service.title} من ادفعلي؟
                </h3>
                <ul className="space-y-3">
                  {service.detailedBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Biller Codes for this service */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
                <div className="flex items-center gap-2.5 mb-4">
                  <Terminal className="w-5 h-5 text-sky-700" />
                  <h3 className="text-lg font-extrabold text-slate-900">
                    الأكواد والباقات المرتبطة بهذه الخدمة
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.billerCodes.map((code) => (
                    <div
                      key={code.code}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-200/90"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-nums font-extrabold text-sky-800 text-sm">
                          كود: #{code.code}
                        </span>
                        <span className="text-xs text-slate-600">{code.provider}</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{code.name}</div>
                      <div className="text-xs text-emerald-800 font-semibold mt-1">
                        {code.commissionNote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-b from-[#0A2540] to-[#0B3B6E] text-white rounded-2xl p-7 border border-sky-900">
                <h3 className="text-xl font-extrabold mb-2">اطلب تفعيل هذه الخدمة الآن</h3>
                <p className="text-sm text-sky-100 leading-relaxed mb-6">
                  تواصل مع فريق مبيعات ودعم ادفعلي لفتح حساب تاجر جديد أو ربط مؤسستك بالخدمة فوراً.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center block transition-colors"
                  >
                    تقديم طلب اشتراك / تعاقد
                  </Link>
                  <Link
                    to="/apps"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center block transition-colors border border-white/15"
                  >
                    استعراض الأجهزة والتطبيقات
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                <h4 className="text-base font-extrabold text-slate-900 mb-3">خدمات أخرى</h4>
                <ul className="space-y-2.5 text-sm">
                  {SERVICES_LIST.filter((s) => s.slug !== service.slug).map((other) => (
                    <li key={other.id}>
                      <Link
                        to={`/services/${other.slug}`}
                        className="text-slate-700 hover:text-sky-800 font-semibold flex items-center justify-between py-1"
                      >
                        <span>{other.title}</span>
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
